'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { Header } from '@/features/navigation';
import { ConfigProvider, ThemeConfig } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { Footer } from '@/shared/ui';
interface ProvidersProps {
  children: ReactNode;
}

const theme: ThemeConfig = {
  token: {
    fontFamily:
      'var(--font-poppins), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
};

const Providers: FC<ProvidersProps> = ({ children }) => (
  <SessionProvider>
    <ConfigProvider theme={theme}>
      <div className="flex flex-col min-h-screen p-4">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ConfigProvider>
  </SessionProvider>
);

export default Providers;
