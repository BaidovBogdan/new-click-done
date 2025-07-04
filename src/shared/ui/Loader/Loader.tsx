'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className='fixed inset-0 bg-white z-50 flex items-center justify-center'>
      <motion.div
        className='mb-1'
        style={{
          willChange: 'transform, opacity',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0.9, 1],
          opacity: [0, 1, 0.7, 1],
        }}
        transition={{
          times: [0, 0.4, 0.7, 1],
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0,
          ease: ['easeOut', 'easeInOut', 'easeInOut'],
        }}
      >
        <img src='/images/svgIcons/logo.svg' alt='logo icon' loading='eager' />
      </motion.div>
    </div>
  );
}
