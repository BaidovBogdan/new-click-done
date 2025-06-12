import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';
import axios, { AxiosError } from 'axios';
import { signOut } from 'next-auth/react';

const AUTH_URL = process.env.AUTH_URL;

interface DecodedToken {
  exp: number;
  sub?: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

async function refreshAccessToken(token: any): Promise<any> {
  try {
    const response = await axios.post(
      `${AUTH_URL}/api/v1/jwt/refresh/`,
      {},
      {
        headers: { Authorization: `Bearer ${token.refreshToken}` },
      }
    );
    const newAccessToken = response.data.access_token;
    const decoded = jwtDecode<DecodedToken>(newAccessToken);
    const newExpiresAt = decoded.exp * 1000;
    return {
      ...token,
      accessToken: newAccessToken,
      expiresAt: newExpiresAt,
      lastRefresh: Date.now(),
      error: undefined,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      // Если статус ответа 401, выполняем логаут
      if (axiosError.response?.status === 401) {
        console.error('Unauthorized: Refresh token invalid or expired');
        signOut();
        return { ...token, error: 'Unauthorized' };
      }
    }
    console.error('Error refreshing access token:', error);
    return { ...token, error: 'RefreshAccessTokenError' };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any | null> {
        if (!credentials?.email || !credentials?.password) {
          console.error('Missing email or password');
          return null;
        }

        const formData = new FormData();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);

        try {
          const response = await axios.post(
            `${AUTH_URL}/api/v1/jwt/login/`,
            formData,
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
          );
          console.log('Login response:', response.data);

          const { access_token, refresh_token } = response.data;

          const decoded = jwtDecode<DecodedToken>(access_token);
          console.log('Decoded access token:', decoded);

          return {
            id: decoded.sub || credentials.email,
            email: decoded.email || credentials.email,
            name: decoded.name || null,
            accessToken: access_token,
            refreshToken: refresh_token,
          };
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            console.error(
              'Login failed with response:',
              error.response.status,
              error.response.data
            );
            const errorMessage =
              error.response.data?.message ||
              error.response.data?.detail ||
              'Invalid email or password';
            throw new Error(errorMessage);
          } else {
            console.error('Authorize error:', error);
            throw new Error('An unexpected error occurred during login');
          }
        }
      },
    }),
    CredentialsProvider({
      id: 'google-auth',
      name: 'Google',
      credentials: {
        code: { label: 'Authorization Code', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.code) return null;

        try {
          // 1. Обмениваем код на токены через ваш бэкенд
          const { data } = await axios.get(`${AUTH_URL}/auth/google`, {
            params: { code: credentials.code },
          });

          if (!data.access_token || !data.refresh_token) {
            throw new Error('Invalid tokens from backend');
          }

          // 2. Декодируем токен для получения информации о пользователе
          const decoded = jwtDecode<DecodedToken>(data.access_token);

          return {
            id: decoded.sub || decoded.email || '',
            email: decoded.email,
            name: decoded.name,
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          };
        } catch (error) {
          console.error('Google authorization error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const decoded = jwtDecode<DecodedToken>(user.accessToken);
        const expiresAt = decoded.exp * 1000;
        return {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiresAt,
          lastRefresh: Date.now(),
          user: { id: user.id, name: user.name, email: user.email },
        };
      }

      const refreshInterval = 14 * 60 * 1000;
      const timeSinceLastRefresh = Date.now() - (token.lastRefresh || 0);

      if (
        timeSinceLastRefresh >= refreshInterval ||
        Date.now() >= token.expiresAt
      ) {
        console.log('Token refresh triggered:', {
          timeSinceLastRefresh: timeSinceLastRefresh / 1000,
          expiresIn: (token.expiresAt - Date.now()) / 1000,
        });
        return await refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/auth', error: '/auth?error=google-auth-failed' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
