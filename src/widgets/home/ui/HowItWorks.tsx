'use client';

import { HowItWorksCard } from '@/shared/ui';
import { Button } from 'antd';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function HowItWorks() {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: '-50px' });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrDesktop(window.innerWidth >= 640); // sm and above
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getHowItWorks = () => [
    {
      title: 'Post Your Request',
      description:
        "Tell us what you need in just a few clicks - it's fast, free, and easy.",
      image: `/images/home/${
        isTabletOrDesktop ? 'Laptop' : 'Mobile'
      }-step1.webp`,
    },
    {
      title: 'Get Offers from Verified Pros',
      description:
        'Qualified specialists reach out to you. Compare prices and reviews to choose the best.',
      image: `/images/home/${
        isTabletOrDesktop ? 'Laptop' : 'Mobile'
      }-step2.webp`,
    },
    {
      title: 'Job Done. Payment Secured.',
      description:
        'Your task is completed, your payment is protected, and your satisfaction is guaranteed.',
      image: `/images/home/${
        isTabletOrDesktop ? 'Laptop' : 'Mobile'
      }-step3.webp`,
    },
  ];

  const howItWorks = getHowItWorks();

  return (
    <div className='flex flex-col justify-between gap-4 bg-white rounded-3xl -mx-4 xl:mx-0 xl:p-4 h-[590px] sm:h-[756px] xl:h-[788px]'>
      <div
        ref={titleRef}
        className='font-medium text-center HeadingFS2 text-[#1A1A1A] sm:!text-[48px] sm:!leading-[48px] mt-10'
      >
        How it{' '}
        <motion.span
          className='text-[#FF564F] inline-block'
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.5 }
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          works
        </motion.span>
      </div>

      {/* Mobile and Tablet: Horizontal Scroll */}
      <div className='xl:hidden relative overflow-hidden' ref={constraintsRef}>
        <motion.div
          className='flex gap-3 px-4 sm:px-4 will-change-transform'
          drag='x'
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          style={{
            width: 'fit-content',
          }}
        >
          {howItWorks.map((item, index) => (
            <div key={index} className='flex-shrink-0'>
              <HowItWorksCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop: Static Grid */}
      <div className='hidden xl:flex justify-center gap-6 px-4'>
        {howItWorks.map((item, index) => (
          <HowItWorksCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <div className='flex justify-center mb-10'>
        <Button className='!bg-[#FF564F] !rounded-xl !h-[48px] !w-[149px] hover:!bg-[#FF564F]/90 hover:!border-red-500 active:!bg-[#FF564F]/90 active:!border-red-500 focus:!bg-[#FF564F]/90 focus:!border-red-500'>
          <div className='flex gap-2 text-white font-medium TextFSLG'>
            <img src='/images/svgIcons/plus.svg' alt='plus' />
            <span>Create task</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
