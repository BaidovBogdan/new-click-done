'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Divider, Input } from 'antd';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 640); // sm and above
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='flex flex-col gap-6 items-center'>
      <div
        className='flex gap-2 items-center px-1.5 py-1'
        style={{ border: '1px solid #EDEDED', borderRadius: '10px' }}
      >
        <img src='/images/svgIcons/securityMobileClients.svg' alt='clients' />
        <span className='font-normal TextFSSM'>3000+ satisfied clients</span>
      </div>
      <div className='flex flex-col items-center gap-1 text-[#1D1D1FE5] font-medium TextFSXLLG tracking-[-0.02em] sm:!text-[64px] sm:!leading-[72px]'>
        <div className='flex flex-row flex-wrap items-center gap-1'>
          <span>Find</span>
          <Image
            src='/images/home/mobileInstrument.webp'
            alt='instrument'
            width={90}
            height={40}
            className='sm:hidden'
          />
          <Image
            src='/images/home/tabletInstrument.webp'
            alt='instrument'
            width={144}
            height={64}
            className='hidden sm:block'
          />
          <span>a specialist</span>
        </div>
        <div className='flex items-center gap-1'>
          <span>for your</span>
          <div className='relative sm:ml-1.5'>
            <motion.span
              className='text-[#FF564F] inline-block will-change-transform'
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0, 1.1, 0.8, 1],
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: 'easeOut',
              }}
              style={{
                transformOrigin: 'center',
                willChange: 'transform, opacity',
              }}
            >
              services
            </motion.span>

            {!isTabletOrDesktop ? (
              <motion.img
                src='/images/svgIcons/mobileServices.svg'
                alt='three dots'
                style={{ willChange: 'transform, opacity' }}
                className='absolute top-0 right-0 transform translate-x-4.5'
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: [0, 1.4, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: 'easeOut',
                }}
              />
            ) : (
              <motion.img
                src='/images/svgIcons/laptopServices.svg'
                alt='three dots'
                style={{ willChange: 'transform, opacity' }}
                className='absolute top-[-6px] right-0 transform translate-x-7'
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: [0, 1.4, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: 'easeOut',
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className='w-full max-w-[500px] lg:max-w-[600px]'>
        <Input
          style={{ border: 'none', borderRadius: '10px' }}
          className='w-full !h-12'
          type='text'
          placeholder='Service or specialist'
          suffix={
            <Button
              style={{
                backgroundColor: '#FF564F',
                borderRadius: '12px',
                height: '40px',
              }}
            >
              <img src='/images/svgIcons/mobileSearchHero.svg' alt='search' />
              <span className='text-white font-medium TextFS'>Search</span>
            </Button>
          }
        />
      </div>
      <div className='flex items-center justify-between w-full max-w-[475px] text-[#1D1D1F73] font-normal TextFSSM mt-2'>
        <div className='flex flex-col items-center gap-2'>
          <img src='/images/svgIcons/mobileCheck.svg' alt='verified' />
          <span>Verified Professionals</span>
        </div>
        <Divider
          type='vertical'
          style={{ height: '48px', borderLeftWidth: '2px' }}
        />
        <div className='flex flex-col items-center gap-2'>
          <img src='/images/svgIcons/mobileSupport.svg' alt='support' />
          <span>24/7 Support</span>
        </div>
        <Divider
          type='vertical'
          style={{ height: '48px', borderLeftWidth: '2px' }}
        />
        <div className='flex flex-col items-center gap-2'>
          <img src='/images/svgIcons/mobilePayment.svg' alt='payment' />
          <span>Secure Payments</span>
        </div>
      </div>
    </div>
  );
}
