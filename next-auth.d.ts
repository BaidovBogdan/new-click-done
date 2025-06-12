import { JWT, User as NextAuthUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends NextAuthUser {
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string;
    };
    accessToken: string;
    tokenError?: string;
    error?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    lastRefresh?: number;
    user: {
      id: string;
      name: string | null;
      email: string;
    };
    error?: string;
  }
}
