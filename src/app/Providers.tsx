'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { Header, Overlay } from '@/features';
import { ConfigProvider, ThemeConfig } from 'antd';
import { isOverlayMobileHeaderAtom } from '../shared/store/atoms';
import { usePathname } from 'next/navigation';
import '@ant-design/v5-patch-for-react-19';
import { Footer, Loader } from '@/shared/ui';
import { useAtom } from 'jotai';
import { AnimatePresence, motion } from 'framer-motion';
import { useLoader } from '@/shared/hooks';

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
  const isHomePageOrBlogOrPost =
    pathname === '/' || pathname === '/blog' || pathname.startsWith('/blog/');
  const { isLoaded } = useLoader();

  const isAuth = pathname === '/auth';

  return (
    <SessionProvider>
      <ConfigProvider theme={theme}>
        <AnimatePresence mode='wait'>
          {!isLoaded && (
            <motion.div
              key='loader'
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          {isLoaded && (
            <motion.div
              key='content'
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
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
                {isAuth && <Footer />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default Providers;
