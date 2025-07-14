'use client';

import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBreakpoint } from '@/shared/hooks';
import { PopularService } from '@/widgets';
import { FooterHome } from '@/shared/ui';

const svg = (
  <svg
    width='744'
    height='344'
    viewBox='0 0 744 344'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1117.18 228.635C834.502 207.23 613.935 -12.6322 318.928 14.3126C23.9211 41.2574 -162.55 430.025 -542.838 308.284'
      stroke='#EDEDED'
      strokeWidth='24'
    />
  </svg>
);

const svg2 = (
  <svg
    width='1440'
    height='344'
    viewBox='0 0 1440 344'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1464.63 228.635C1181.96 207.23 961.388 -12.632 666.381 14.3128C371.374 41.2576 184.903 430.026 -195.385 308.285'
      stroke='#EDEDED'
      strokeWidth='24'
    />
  </svg>
);

export default function NotFound() {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  return (
    <>
      <div className='flex justify-center -mx-4 mt-10'>
        <motion.div
          className='flex flex-col gap-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        >
          <div className='flex gap-2 font-semibold text-[140px] sm:text-[200px] leading-[160px] items-center justify-center relative'>
            {isMobile ? (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 1.8,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  className='absolute -top-4 left-4'
                >
                  <Image
                    src='/images/errors/mobile-cut.webp'
                    alt='cut-image'
                    width={56}
                    height={56}
                    quality={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 2.1,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  className='absolute top-0 right-1'
                >
                  <Image
                    src='/images/errors/mobile-santex.webp'
                    alt='santex-image'
                    width={56}
                    height={56}
                    quality={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 2.4,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  className='absolute top-32 left-8'
                >
                  <Image
                    src='/images/errors/mobile-molot.webp'
                    alt='molot-image'
                    width={56}
                    height={56}
                    quality={100}
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 1.8,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  whileHover={{
                    rotate: [0, -5, 5, -3, 3, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className='absolute -top-4 -left-16 cursor-pointer'
                >
                  <Image
                    src='/images/errors/tablet-cut.webp'
                    alt='cut-image'
                    width={64}
                    height={64}
                    quality={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 2.1,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  whileHover={{
                    rotate: [0, 5, -5, 3, -3, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className='absolute top-0 -right-11 cursor-pointer'
                >
                  <Image
                    src='/images/errors/tablet-santex.webp'
                    alt='santex-image'
                    width={64}
                    height={64}
                    quality={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 2.4,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                    duration: 0.6,
                  }}
                  whileHover={{
                    rotate: [0, -7, 7, -4, 4, 0],
                    scale: 1.15,
                    transition: { duration: 0.6 },
                  }}
                  className='absolute top-26 -left-3 z-30 cursor-pointer'
                >
                  <Image
                    src='/images/errors/tablet-molot.webp'
                    alt='molot-image'
                    width={64}
                    height={64}
                    quality={100}
                  />
                </motion.div>
              </>
            )}
            {/* Цифра 5 - прилетает сверху */}
            <motion.div
              className='font-involve relative'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: 'spring',
                damping: 15,
                stiffness: 100,
              }}
            >
              4
              <div className='absolute top-16 left-[16px] w-[8px] h-10 z-20 bg-black scale-x-[-0.9] scale-y-[-1.4] rotate-33 rounded-xl sm:top-15 sm:left-[20.99px] sm:rotate-33.5 sm:w-[11.5px] sm:scale-x-[1.29] sm:h-16' />
              <div className='absolute top-16 left-[24px] w-[6px] h-10 z-20 bg-black scale-x-[-1.15] rotate-33 rounded-xl sm:top-11 sm:left-[36.5px] sm:rotate-32.5 sm:w-3 sm:scale-x-[1.2] sm:h-16' />
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
              <div className='absolute top-16 left-[5px] w-[10px] h-8 z-20 bg-black scale-x-[1.04] rounded-sm sm:top-12 sm:h-10 sm:left-2 sm:w-3 sm:rotate-[1deg] sm:scale-x-[1.13]' />
              <div className='absolute top-16 left-[14px] w-[6px] h-8 z-20 bg-black scale-x-[-1.2] sm:top-12 sm:left-5 sm:h-10 sm:w-2.5 sm:rotate-[2.5deg] sm:scale-x-[1]' />
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
              4
              <div className='absolute top-16 left-[16px] w-[8px] h-10 z-20 bg-black scale-x-[-0.95] rotate-33 rounded-xl sm:top-11 sm:left-[34px] sm:rotate-33.5 sm:w-[11.5px] sm:scale-x-[1.25] sm:h-14' />
              <div className='absolute top-16 left-[24px] w-[6px] h-10 z-20 bg-black scale-x-[-1.15] rotate-33 rounded-xl sm:top-11 sm:left-[39.2px] sm:rotate-32.5 sm:w-3 sm:scale-x-[1.19] sm:h-14' />
            </motion.div>

            {/* Фоновое изображение - появляется с задержкой */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 1.8 }}
            >
              {isMobile && (
                <Image
                  src='/images/errors/mobile-404.webp'
                  alt='error-line'
                  width={543}
                  height={1583}
                  quality={100}
                  className='absolute top-18 left-0 object-cover z-10'
                />
              )}
              {isTablet && (
                <div className='absolute top-14 -left-45 object-cover z-10'>
                  {svg}
                </div>
              )}
              {isDesktop && (
                <div className='absolute top-14 left-[-525px] object-cover z-10'>
                  {svg2}
                </div>
              )}
            </motion.div>
          </div>

          {/* Текст и кнопка - появляются в конце */}
          <motion.div
            className='flex flex-col gap-3 items-center justify-center mt-6'
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
              Oops... This page not fould
            </motion.span>
            <motion.span
              className='TextFSLG font-normal text-[#1D1D1FA6] text-center'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <span className='mx-24'>This page no longer exists </span>
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
      <div className='mt-10'>
        <PopularService title='You might be looking for' />
      </div>
      <div className='mt-10'>
        <FooterHome />
      </div>
    </>
  );
}
