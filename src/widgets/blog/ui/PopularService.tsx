'use client';

import { SubCategoryItemProps } from '@/shared/model/types/subCategory';
import { SubCategoryItem } from '@/shared/ui';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { isOverlayMobileHeaderAtom } from '@/shared/store/atoms';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { useAtom } from 'jotai';
import Image from 'next/image';

const getSubCategory = (
  breakpoint: 'mobile' | 'tablet' | 'desktop'
): SubCategoryItemProps[] => {
  const getImagePath = (baseName: string, folder: 'home' | 'blog' = 'home') => {
    if (folder === 'blog') {
      const prefix = breakpoint === 'mobile' ? 'mobile' : 'tablet';
      return `/images/blog/${prefix}-${baseName}.webp`;
    } else {
      const prefix =
        breakpoint === 'mobile'
          ? 'Mobile'
          : breakpoint === 'tablet'
          ? 'Tablet'
          : 'Tablet';
      return `/images/home/${prefix}-${baseName}.webp`;
    }
  };

  return [
    {
      title: 'Babysitting',
      image: getImagePath('bottle'),
      link: '/subCategory1',
    },
    {
      title: 'Carpentry',
      image: getImagePath('stul'),
      link: '/subCategory2',
    },
    {
      title: 'Delivery & Moving Services',
      image: getImagePath('boxs'),
      link: '/subCategory3',
    },
    {
      title: 'Home maintenance and repairs',
      image: getImagePath('boxInstrument', 'blog'),
      link: '/subCategory4',
    },
    {
      title: 'Photography & Videography',
      image: getImagePath('books', 'blog'),
      link: '/subCategory5',
    },
    {
      title: 'Cleaning and housekeeping',
      image: getImagePath('pylesos', 'blog'),
      link: '/subCategory6',
    },
    {
      title: 'Pet care',
      image: getImagePath('dog'),
      link: '/subCategory7',
    },
    {
      title: 'Counselling',
      image: getImagePath('brain'),
      link: '/subCategory8',
    },
    {
      title: 'Graphic Design & Marketing',
      image: getImagePath('laptop'),
      link: '/subCategory9',
    },
    {
      title: 'Home Security Installation',
      image: getImagePath('security'),
      link: '/subCategory10',
    },
    {
      title: 'Photography & Videography',
      image: getImagePath('camera'),
      link: '/subCategory11',
    },
    {
      title: 'Garden and pool care',
      image: getImagePath('cut', 'blog'),
      link: '/subCategory12',
    },
    {
      title: 'Beauty and wellness',
      image: getImagePath('womanInst', 'blog'),
      link: '/subCategory13',
    },
  ];
};

const svgRightArrow = (isActive: boolean = true) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 18L15 12L9 6'
      stroke='#1D1D1F'
      strokeOpacity={isActive ? '1' : '0.45'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const svgLeftArrow = (isActive: boolean = true) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 18L9 12L15 6'
      stroke='#1D1D1F'
      strokeOpacity={isActive ? '1' : '0.45'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function PopularService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.01 });
  const [isOverlayMobileHeader] = useAtom(isOverlayMobileHeaderAtom);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();

  const allCategories = getSubCategory(breakpoint);
  const totalSlides = Math.ceil(allCategories.length / 4);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * 4;
    return allCategories.slice(startIndex, startIndex + 4);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Сброс слайда при изменении данных
  useEffect(() => {
    setCurrentSlide(0);
  }, [breakpoint]);

  const handleDragStart = () => {
    setIsDragging(true);
    setPauseAnimation(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setPauseAnimation(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const firstRow = getSubCategory(breakpoint).slice(0, 6);
  const secondRow = getSubCategory(breakpoint).slice(6, 13);

  return (
    <div
      ref={containerRef}
      className='w-screen overflow-hidden py-8 -mx-4 xl:mx-[120px]'
    >
      <div className='p-4 xl:flex xl:justify-between xl:max-w-[1230px]'>
        <span className='HeadingFS3 font-medium text-left'>
          Popular service
        </span>
        <div className='gap-3 hidden xl:flex'>
          <button
            onClick={prevSlide}
            className='transition-opacity hover:opacity-70'
            disabled={currentSlide === 0}
          >
            {svgLeftArrow(currentSlide > 0)}
          </button>
          <button
            onClick={nextSlide}
            className='transition-opacity hover:opacity-70'
            disabled={currentSlide === totalSlides - 1}
          >
            {svgRightArrow(currentSlide < totalSlides - 1)}
          </button>
        </div>
      </div>
      {/* Mobile: анимированные полосы */}
      <div className='flex flex-col gap-3 sm:hidden mt-1'>
        {/* Первая полоса - движение вправо */}
        <div className='relative overflow-hidden' ref={firstRowRef}>
          <motion.div
            className='flex gap-3 will-change-transform'
            drag='x'
            dragConstraints={firstRowRef}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={
              isMobile && isInView && !isOverlayMobileHeader && !pauseAnimation
                ? {
                    x: [-832, 0],
                  }
                : {}
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: 'fit-content',
            }}
          >
            {[...firstRow, ...firstRow, ...firstRow].map((item, index) => (
              <div key={`first-${index}`} className='flex-shrink-0'>
                <Link href={item.link}>
                  <SubCategoryItem
                    title={item.title}
                    image={item.image}
                    link={item.link}
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Вторая полоса - движение вправо */}
        <div className='relative overflow-hidden' ref={secondRowRef}>
          <motion.div
            className='flex gap-3 will-change-transform'
            drag='x'
            dragConstraints={secondRowRef}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={
              isMobile && isInView && !isOverlayMobileHeader && !pauseAnimation
                ? {
                    x: [0, -815],
                  }
                : {}
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: 'fit-content',
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map((item, index) => (
              <div key={`second-${index}`} className='flex-shrink-0'>
                <Link href={item.link}>
                  <SubCategoryItem
                    title={item.title}
                    image={item.image}
                    link={item.link}
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tablet: анимированная полоса с горизонтальными карточками */}
      <div className='hidden sm:flex xl:hidden flex-col gap-3 mt-1'>
        <div className='relative overflow-hidden'>
          <motion.div
            className='flex gap-4 will-change-transform'
            drag='x'
            dragConstraints={{ left: -7220, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={
              !isMobile && isInView && !isOverlayMobileHeader && !pauseAnimation
                ? {
                    x: [-1200, 0],
                  }
                : {}
            }
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: 'fit-content',
            }}
          >
            {[...getSubCategory(breakpoint), ...getSubCategory(breakpoint)].map(
              (item, index) => (
                <div key={`tablet-${index}`} className='flex-shrink-0'>
                  <Link href={item.link}>
                    <div className='w-[288px] h-[120px] bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow'>
                      <div className='flex-1'>
                        <h3 className='text-sm font-medium text-gray-900 leading-tight'>
                          {item.title}
                        </h3>
                      </div>
                      <div className='flex-shrink-0 ml-4'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={128}
                          height={120}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
      {/* Desktop: 4 карточки с переключением через стрелочки */}
      <div className='hidden xl:block p-4 overflow-hidden mr-[316.5px]'>
        <div className='mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              className='flex gap-4 justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {getCurrentSlideItems().map((item, index) => (
                <div
                  key={`desktop-${currentSlide}-${index}`}
                  className='flex-shrink-0'
                >
                  <Link href={item.link}>
                    <div className='w-[288px] h-[120px] bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow'>
                      <div className='flex-1'>
                        <h3 className='text-sm font-medium text-gray-900 leading-tight'>
                          {item.title}
                        </h3>
                      </div>
                      <div className='flex-shrink-0 ml-4'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={128}
                          height={120}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
