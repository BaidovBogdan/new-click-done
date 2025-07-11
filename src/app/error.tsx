'use client';

import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Error() {
  return (
    <div className='flex justify-center items-center h-screen -mx-4'>
      <motion.div
        className='flex flex-col gap-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
      >
        <div className='flex gap-2 font-semibold text-[140px] leading-[160px] items-center justify-center relative'>
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
            <div className='absolute top-14 left-[5px] w-[10px] h-8 z-20 bg-black scale-x-[1.01] rounded-sm rotate-[1deg]' />
            <div className='absolute top-14 left-[14px] w-[6px] h-8 z-20 bg-black scale-x-[-1.2] rotate-[2deg]' />
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
            <div className='absolute top-16 left-[5px] w-[10px] h-8 z-20 bg-black scale-x-[1.06] rounded-xl' />
            <div className='absolute top-16 left-[14px] w-[6px] h-8 z-20 bg-black scale-x-[-1.2] rounded-xl' />
          </motion.div>

          {/* Фоновое изображение - появляется с задержкой */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1.8 }}
          >
            <Image
              src='/images/errors/mobile-500.webp'
              alt='error-line'
              width={543}
              height={1583}
              quality={100}
              className='absolute top-14.5 left-0 object-cover z-10'
            />
          </motion.div>
        </div>

        {/* Текст и кнопка - появляются в конце */}
        <motion.div
          className='flex flex-col gap-6 items-center justify-center'
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
            className='TextFSLG font-normal text-[#1D1D1FA6] text-center'
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
