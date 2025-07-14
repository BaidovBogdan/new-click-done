'use client';

import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBreakpoint } from '@/shared/hooks';

const svg = (
  <svg
    width='744'
    height='384'
    viewBox='0 0 744 384'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M-386.381 192.529C-102.991 185.206 128.236 -23.4169 421.538 18.1633C714.84 59.7435 881.75 457.303 1267.62 354.621'
      stroke='#EDEDED'
      strokeWidth='24'
    />
  </svg>
);

const svg2 = (
  <svg
    width='1440'
    height='384'
    viewBox='0 0 1440 384'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M-38.3812 192.529C245.009 185.206 476.236 -23.4169 769.538 18.1633C1062.84 59.7435 1229.75 457.303 1615.62 354.621'
      stroke='#EDEDED'
      strokeWidth='24'
    />
  </svg>
);
export default function Error() {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  return (
    <div className='flex justify-center items-center h-[calc(100vh-75px)] -mx-4'>
      <motion.div
        className='flex flex-col gap-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
      >
        <div className='flex gap-2 font-semibold text-[140px] sm:text-[200px] leading-[160px] items-center justify-center relative'>
          {/* Цифра 5 - прилетает сверху */}
          <motion.div
            className='font-involve z-20'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: 'spring',
              damping: 15,
              stiffness: 100,
            }}
          >
            5
          </motion.div>

          {/* Первый 0 - прилетает снизу */}
          <motion.div
            className='font-involve relative'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              type: 'spring',
              damping: 15,
              stiffness: 100,
            }}
          >
            0
            <div className='absolute top-14 left-[5px] w-[10px] h-8 z-20 bg-black scale-x-[1.01] rounded-sm rotate-[1deg] sm:top-12 sm:left-2 sm:w-3 sm:scale-x-[1.13]' />
            <div className='absolute top-14 left-[14px] w-[6px] h-8 z-20 bg-black scale-x-[-1.2] rotate-[2deg] sm:top-12 sm:left-5 sm:w-2.5 sm:scale-x-[1]' />
          </motion.div>

          {/* Последний 0 - прилетает сверху */}
          <motion.div
            className='font-involve relative'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.1,
              type: 'spring',
              damping: 15,
              stiffness: 100,
            }}
          >
            0
            <div className='absolute top-16 left-[5px] w-[10px] h-10 z-20 bg-black scale-x-[1.06] rounded-xl sm:left-2 sm:top-13 sm:w-3 sm:scale-x-[1.23]' />
            <div className='absolute top-16 left-[14px] w-[6px] h-10 z-20 bg-black scale-x-[-1.2] rounded-xl sm:top-13 sm:w-3 sm:scale-x-[1.52] sm:h-12' />
          </motion.div>

          {/* Фоновое изображение - появляется с задержкой */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1.8 }}
          >
            {isMobile && (
              <Image
                src='/images/errors/mobile-500.webp'
                alt='error-line'
                width={543}
                height={1583}
                quality={100}
                className='absolute top-14.5 left-0 object-cover z-10'
              />
            )}
            {isTablet && (
              <div className='absolute top-12.5 -left-18.5 object-cover z-10'>
                {svg}
              </div>
            )}
            {isDesktop && (
              <div className='absolute top-12.5 left-[-425px] object-cover z-10'>
                {svg2}
              </div>
            )}
          </motion.div>
        </div>

        {/* Текст и кнопка - появляются в конце */}
        <motion.div
          className='flex flex-col gap-3 items-center justify-center'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.span
            className='font-medium HeadingFS4 text-[#1D1D1FE5]'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Sorry, It's not you. It's us
          </motion.span>
          <motion.span
            className='TextFSLG font-normal text-[#1D1D1FA6] text-center px-10'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            Try refreshing the page, or going back and attempt the action again
          </motion.span>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-2'
          >
            <Link href='/'>
              <Button className='!bg-[#FF564F] !text-white !font-medium !TextFSLG !rounded-xl !h-12 w-40'>
                Go to main page
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
