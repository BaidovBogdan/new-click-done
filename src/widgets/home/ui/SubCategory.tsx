'use client';

import { SubCategoryItem } from '@/shared/ui';
import { motion, useInView } from 'framer-motion';
import { useAtom } from 'jotai';
import { isOverlayMobileHeaderAtom } from '@/shared/store/atoms';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { SubCategoryItemProps } from '@/shared/model/types/subCategory';

const getSubCategory = (isMobile: boolean): SubCategoryItemProps[] => [
  {
    title: 'Babysitting',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-bottle.webp`,
    link: '/subCategory1',
  },
  {
    title: 'Carpentry',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-stul.webp`,
    link: '/subCategory2',
  },
  {
    title: 'Delivery & Moving Services',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-boxs.webp`,
    link: '/subCategory3',
  },
  {
    title: 'Photography & Videography',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-camera.webp`,
    link: '/subCategory4',
  },
  {
    title: 'Pet care',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-dog.webp`,
    link: '/subCategory5',
  },
  {
    title: 'Counselling',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-brain.webp`,
    link: '/subCategory6',
  },
  {
    title: 'Graphic Design & Marketing',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-laptop.webp`,
    link: '/subCategory7',
  },
  {
    title: 'Home Security Installation',
    image: `/images/home/${isMobile ? 'Mobile' : 'Tablet'}-security.webp`,
    link: '/subCategory8',
  },
];

export default function SubCategory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.01 });
  const [isOverlayMobileHeader] = useAtom(isOverlayMobileHeaderAtom);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

  const subCategory = getSubCategory(isMobile);
  const firstRow = subCategory.slice(0, 4);
  const secondRow = subCategory.slice(4, 8);
  return (
    <div
      ref={containerRef}
      className='w-screen overflow-hidden py-8 -mx-4 sm:-mx-6 lg:-mx-8'
    >
      {/* Mobile: анимированные полосы */}
      <div className='flex flex-col gap-3 sm:hidden'>
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

      {/* Tablet: статичные 2 ряда */}
      <div className='hidden sm:flex xl:hidden flex-col gap-3'>
        <div className='flex gap-6 justify-center'>
          {firstRow.map((item, index) => (
            <div key={`tablet-first-${index}`}>
              <Link href={item.link}>
                <SubCategoryItem
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className='flex gap-6 justify-center'>
          {secondRow.map((item, index) => (
            <div key={`tablet-second-${index}`}>
              <Link href={item.link}>
                <SubCategoryItem
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: статичный 1 ряд */}
      <div className='hidden xl:flex gap-4 justify-center'>
        {subCategory.map((item, index) => (
          <div key={`desktop-${index}`}>
            <Link href={item.link}>
              <SubCategoryItem
                title={item.title}
                image={item.image}
                link={item.link}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
