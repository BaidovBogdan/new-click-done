'use client';
import {
  isForgotPasswordAtom,
  isLoginAtom,
  registerStepAtom,
  forgotPasswordStepAtom,
  isOverlayMobileHeaderAtom,
} from '@/shared/store/atoms';
import { Button } from 'antd';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);
  const [, setRegisterStep] = useAtom(registerStepAtom);
  const [, setIsForgotPassword] = useAtom(isForgotPasswordAtom);
  const [, setForgotPasswordStep] = useAtom(forgotPasswordStepAtom);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useAtom(
    isOverlayMobileHeaderAtom
  );
  const pathname = usePathname();
  const [isAuthPage, setIsAuthPage] = useState(false);
  useEffect(() => {
    if (pathname === '/auth') {
      setIsAuthPage(true);
    } else {
      setIsAuthPage(false);
    }
  }, [pathname]);

  const handleChangeLogin = () => {
    setForgotPasswordStep(1);
    setRegisterStep(1);
    setIsLogin(prev => !prev);
    setIsForgotPassword(false);
  };

  return (
    <header className="sticky z-50">
      <div className="flex items-start justify-between lg:max-w-[85%] mx-auto">
        <div
          className="flex items-end gap-1"
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className="mb-1">
            {' '}
            <img src="/images/svgIcons/logo.svg" alt="phone icon" />
          </div>
          <span className="text-2xl font-medium">ClickDone</span>
        </div>
        {!isAuthPage && (
          <div className="hidden lg:flex !h-10 items-center gap-4 xl:gap-10 font-normal TextFSLG text-[#1A1A1A] xl:ml-[155px]">
            <Link href="/categories">Categories</Link>
            <Link href="/specialists">Specialists</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/blog">Blog</Link>
          </div>
        )}
        <div>
          {isAuthPage ? (
            <Button
              style={{
                borderColor: '#D9D9D9',
                color: '#1D1D1FE5',
                borderRadius: '10px',
                borderWidth: '1px',
                width: 85,
                height: 40,
              }}
              className="active:!bg-gray-200 hover:!bg-gray-100"
              onClick={handleChangeLogin}
            >
              <span className="TextFS font-medium">
                {isLogin ? 'Sign up' : 'Log in'}
              </span>
            </Button>
          ) : (
            <div className="flex gap-2">
              <div className="hidden sm:block">
                <Button
                  style={{
                    borderColor: '#D9D9D9',
                    color: '#1D1D1FE5',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    width: 233,
                    height: 40,
                  }}
                >
                  <div className="flex gap-2">
                    <span className="TextFSLG font-medium text-[#1D1D1FE5]">
                      Website for specialists
                    </span>
                    <img
                      src="/images/svgIcons/arrowUpBtn.svg"
                      alt="arrowUpBtn"
                    />
                  </div>
                </Button>
              </div>
              <Button
                style={{
                  borderColor: '#D9D9D9',
                  color: '#1D1D1FE5',
                  borderRadius: '10px',
                  borderWidth: '1px',
                  width: 85,
                  height: 40,
                }}
                className="active:!bg-red-500/60 hover:!bg-red-400/60 !bg-[#FF564F]"
                onClick={() => {
                  router.push('/auth');
                  setIsBurgerMenuOpen(false);
                }}
              >
                <span className="TextFS font-medium text-white">
                  {isLogin ? 'Sign up' : 'Log in'}
                </span>
              </Button>
              <div
                className="cursor-pointer flex items-center justify-center active:!bg-gray-200 hover:!bg-gray-100 lg:hidden"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  borderColor: '#D9D9D9',
                  borderWidth: '1px',
                }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    setIsBurgerMenuOpen(!isBurgerMenuOpen);
                  }, 100);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isBurgerMenuOpen ? 'close' : 'open'}
                    initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart - похоже на Face ID
                    }}
                  >
                    {isBurgerMenuOpen ? (
                      <img
                        src="/images/svgIcons/closeOverlay.svg"
                        alt="closeOverlay"
                      />
                    ) : (
                      <img
                        src="/images/svgIcons/openOverlay.svg"
                        alt="openOverlay"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
