'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className='fixed inset-0 bg-white z-50 flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        {/* Логотип */}
        <div className='flex items-end gap-1'>
          <motion.div
            className='mb-1'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
          >
            <img src='/images/svgIcons/logo.svg' alt='logo icon' />
          </motion.div>
          <motion.span
            className='text-2xl font-medium'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: 'spring',
              stiffness: 100,
            }}
          >
            ClickDone
          </motion.span>
        </div>

        {/* Анимированный спиннер */}
        <div className='relative'>
          <motion.div
            className='w-12 h-12 border-4 border-gray-200 rounded-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.div
            className='absolute top-0 left-0 w-12 h-12 border-4 border-[#FF564F] border-t-transparent rounded-full'
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.6,
            }}
          />
        </div>

        {/* Текст загрузки */}
        <motion.p
          className='text-[#FF564F] font-medium text-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.9,
            type: 'spring',
            stiffness: 100,
          }}
        >
          Loading amazing experience...
        </motion.p>

        {/* Анимированные точки */}
        <div className='flex gap-2'>
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              className='w-2 h-2 bg-[#FF564F] rounded-full'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2 + 1.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
