'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { motion } from 'framer-motion';

export default function Overlay() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const menuItems = ['Categories', 'Specialists', 'About Us', 'Blog'];

  return (
    <motion.div
      className="fixed inset-x-0 top-[80px] bottom-0 bg-white z-40 p-4 flex flex-col justify-between !overflow-hidden will-change-transform"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ willChange: 'transform, opacity' }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex justify-center">
          <Image
            src="/images/home/mobileOverlay.webp"
            alt="phone"
            width={358}
            height={88}
            quality={85}
            className="block sm:hidden"
          />
          <Image
            src="/images/home/tabletOverlay.webp"
            alt="laptop"
            width={704}
            height={128}
            quality={85}
            className="hidden sm:block lg:hidden"
          />
        </div>
      </motion.div>

      {/* Menu items - on mobile in center, on tablet at bottom */}
      <div className="flex flex-col space-y-8 HeadingFS2 font-medium sm:mb-16">
        {menuItems.map((item, index) => (
          <motion.span
            key={item}
            className="text-right"
            style={{ willChange: 'transform, opacity' }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4 + index * 0.1,
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Button - only visible on mobile */}
      <motion.div
        className="mb-8 sm:hidden"
        style={{ willChange: 'transform, opacity' }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex justify-center">
          <Button
            style={{
              borderColor: '#D9D9D9',
              color: '#1D1D1FE5',
              borderRadius: '10px',
              borderWidth: '1px',
              width: 358,
              height: 40,
            }}
          >
            <div className="flex gap-2">
              <span className="TextFSLG font-medium text-[#1D1D1FE5]">
                Website for specialists
              </span>
              <img src="/images/svgIcons/arrowUpBtn.svg" alt="arrowUpBtn" />
            </div>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
