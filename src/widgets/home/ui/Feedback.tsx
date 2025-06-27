'use client';

import { FeedbackCard } from '@/shared/ui';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const feedbacks = [
  {
    spec: 'Cleaning',
    time: '1 week ago',
    stars: '4,2',
    name: 'Marie Riead',
    description:
      'Download and get easy access to the orders, Download and get easy access to the orders,Download and get easy access to the orders, Download and get easy  to the orders,Download and get easy access to the orders, Download and get easy',
    spec2: 'IT specialist',
    image: '/images/home/avatarNegr.webp',
  },
  {
    spec: 'Cleaning',
    time: '1 week ago',
    stars: '4,2',
    name: 'Marie Riead',
    description:
      'Download and get easy access to the orders, Download and get easy access to the orders,Download and get easy access to the orders, Download and get easy  to the orders,Download and get easy access to the orders, Download and get easy',
    spec2: 'IT specialist',
    image: '/images/home/avatarNegr.webp',
  },
  {
    spec: 'Cleaning',
    time: '1 week ago',
    stars: '4,2',
    name: 'Marie Riead',
    description:
      'Download and get easy access to the orders, Download and get easy access to the orders,Download and get easy access to the orders, Download and get easy  to the orders,Download and get easy access to the orders, Download and get easy',
    spec2: 'IT specialist',
    image: '/images/home/avatarNegr.webp',
  },
  {
    spec: 'Cleaning',
    time: '1 week ago',
    stars: '4,2',
    name: 'Marie Riead',
    description:
      'Download and get easy access to the orders, Download and get easy access to the orders,Download and get easy access to the orders, Download and get easy  to the orders,Download and get easy access to the orders, Download and get easy',
    spec2: 'IT specialist',
    image: '/images/home/avatarNegr.webp',
  },
  {
    spec: 'Cleaning',
    time: '1 week ago',
    stars: '4,2',
    name: 'Marie Riead',
    description:
      'Download and get easy access to the orders, Download and get easy access to the orders,Download and get easy access to the orders, Download and get easy  to the orders,Download and get easy access to the orders, Download and get easy',
    spec2: 'IT specialist',
    image: '/images/home/avatarNegr.webp',
  },
];

const svgComment = (
  <svg
    width='83'
    height='74'
    viewBox='0 0 83 74'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g opacity='0.2'>
      <path
        d='M82.8887 68.8888C82.8887 71.4047 80.8491 73.4443 78.3331 73.4443H50.9998C48.4838 73.4443 46.4442 71.4047 46.4442 68.8888V37.9528C46.4442 37.3243 46.5743 36.7026 46.8262 36.1269L61.1945 3.28505C61.9199 1.62688 63.5582 0.555443 65.3681 0.555443H76.6922C79.7656 0.555443 81.9571 3.53635 81.0404 6.46981L72.4239 34.0427C71.9655 35.5094 73.0613 36.9999 74.598 36.9999H78.3331C80.8491 36.9999 82.8887 39.0395 82.8887 41.5554V68.8888Z'
        fill='#1D1D1F'
        fillOpacity='0.45'
      />
      <path
        d='M36.4443 68.8888C36.4443 71.4047 34.4047 73.4443 31.8888 73.4443H4.55544C2.03948 73.4443 -0.000110626 71.4047 -0.000110626 68.8888V37.9528C-0.000110626 37.3243 0.129932 36.7026 0.38184 36.1269L14.7501 3.28505C15.4756 1.62688 17.1138 0.555443 18.9237 0.555443H30.2479C33.3213 0.555443 35.5128 3.53635 34.5961 6.46981L25.9796 34.0427C25.5212 35.5094 26.617 36.9999 28.1537 36.9999H31.8888C34.4047 36.9999 36.4443 39.0395 36.4443 41.5554V68.8888Z'
        fill='#1D1D1F'
        fillOpacity='0.45'
      />
    </g>
  </svg>
);

export default function Feedback() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const mobileConstraintsRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [mobileContainerWidth, setMobileContainerWidth] = useState(400);

  useEffect(() => {
    const updateWidth = () => {
      if (constraintsRef.current) {
        setContainerWidth(constraintsRef.current.offsetWidth);
      }
      if (mobileConstraintsRef.current) {
        setMobileContainerWidth(mobileConstraintsRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className='flex flex-col gap-6 sm:gap-10 -mx-4 xl:-mx-0 mt-10 sm:mt-20'>
      <span className='text-center font-medium HeadingFS2 sm:!text-[48px] sm:!leading-[48px]'>
        Feedback
      </span>
      <span className='text-center font-medium HeadingFS4 sm:!text-[24px] sm:!leading-[32px] xl:hidden'>
        What our customers are saying
      </span>

      <div className='max-w-[1408px] mx-auto 3xl:max-w-full'>
        {' '}
        {/* Для xl экранов - разделение на левую и правую части */}
        <div className='hidden xl:flex xl:gap-20 xl:items-center ml-[104px]'>
          {/* Левая часть - SVG, заголовок, подзаголовок и нумерация */}
          <div className='flex flex-col gap-12 xl:flex-shrink-0'>
            {/* SVG иконка */}
            <div className='flex justify-start'>{svgComment}</div>

            {/* Подзаголовок */}
            <div className='font-medium text-[32px] leading-[40px] w-[319px]'>
              What our customers are saying
            </div>

            {/* Нумерация */}
            <div className='text-[16px] text-gray-500'>
              <span className='text-[#1D1D1FE5]'>2</span>/30
            </div>
          </div>

          {/* Правая часть - карусель */}
          <div
            className='flex-1 relative overflow-hidden -mx-4 h-[364px]'
            ref={constraintsRef}
          >
            <motion.div
              className='flex gap-6 px-4'
              drag='x'
              dragConstraints={{
                left: -Math.max(
                  0,
                  feedbacks.length * (392 + 16) - containerWidth
                ),
                right: 0,
              }}
              dragElastic={0.1}
              style={{
                width: 'fit-content',
              }}
            >
              {feedbacks.map((feedback, index) => (
                <div key={index} className='flex-shrink-0 w-[392px] h-full'>
                  <FeedbackCard {...feedback} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Для мобильных и планшетов - горизонтальный скролл */}
      <div
        className='xl:hidden relative overflow-hidden h-[364px] sm:h-[366px]'
        ref={constraintsRef}
      >
        <motion.div
          className='flex gap-4 px-4'
          drag='x'
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          style={{
            width: 'fit-content',
          }}
        >
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-[280px] sm:w-[392px] h-full'
            >
              <FeedbackCard {...feedback} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
