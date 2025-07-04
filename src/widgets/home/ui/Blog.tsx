'use client';

import { BlogCard } from '@/shared/ui';
import { useEffect, useRef } from 'react';

const blogCards = [
  {
    image: '/images/home/Laptop-blog1.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog2.webp',
    desc: 'Without five minutes: does microlearning work?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog3.webp',
    desc: 'A small guide to self-checking your bike',
    date: '12.06.2025',
  },
];

export default function Blog() {
  const constraintsRef = useRef(null);

  useEffect(() => {
    console.log('Blog component mounted');
  }, []);

  return (
    <div className='mt-16 -mx-4'>
      <div className='flex flex-col gap-8'>
        <span className='text-[#1A1A1A] text-center font-medium text-[32px] leading-[40px] sm:text-[48px] sm:leading-[48px]'>
          Blog
        </span>

        {/* Анимированная версия для экранов до xl */}
        <div
          className='xl:hidden relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory'
          style={{
            scrollbarWidth: 'none',
          }}
        >
          <div className='flex gap-4 px-4 sm:px-4 min-w-max'>
            {blogCards.map((card, index) => (
              <div key={index} className='flex-shrink-0 snap-center'>
                <BlogCard
                  image={card.image}
                  mobileImage={card.image}
                  desc={card.desc}
                  date={card.date}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Статичная версия для xl+ экранов */}
        <div className='hidden xl:flex justify-center gap-6 px-4'>
          {blogCards.map((card, index) => (
            <BlogCard
              key={index}
              image={card.image}
              mobileImage={card.image}
              desc={card.desc}
              date={card.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
