'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { Header, Overlay } from '@/features';
import { ConfigProvider, ThemeConfig } from 'antd';
import { isOverlayMobileHeaderAtom } from '../shared/store/atoms';
import { usePathname } from 'next/navigation';
import '@ant-design/v5-patch-for-react-19';
import { Footer } from '@/shared/ui';
import { useAtom } from 'jotai';
import { AnimatePresence } from 'framer-motion';

interface ProvidersProps {
  children: ReactNode;
}

const theme: ThemeConfig = {
  token: {
    fontFamily:
      'var(--font-poppins), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [isOverlayMobileHeader] = useAtom(isOverlayMobileHeaderAtom);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <SessionProvider>
      <ConfigProvider theme={theme}>
        <div
          className={`flex flex-col min-h-screen p-4 !overflow-hidden transition-colors ${
            isOverlayMobileHeader && 'bg-white'
          }`}
        >
          <Header />
          <main className='flex-grow'>
            {children}
            <AnimatePresence>
              {isOverlayMobileHeader && <Overlay />}
            </AnimatePresence>
          </main>
          {!isHomePage && <Footer />}
        </div>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default Providers;
