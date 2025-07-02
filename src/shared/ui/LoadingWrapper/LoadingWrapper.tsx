'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from '../Loader';
import { useComponentsReady } from '@/shared/hooks';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isReady } = useComponentsReady();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1700);

      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {!showContent && (
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
        {showContent && (
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
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
