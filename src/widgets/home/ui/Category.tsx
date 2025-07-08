'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Category() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // < sm
      setIsTablet(width >= 640 && width < 1280); // sm to xl
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    console.log('Category component mounted');
  }, []);

  const getImagePrefix = () => {
    if (isMobile) return 'Mobile';
    if (isTablet) return 'Tablet';
    return 'Laptop';
  };

  const categories = [
    {
      id: 1,
      title: 'Home maintenance and repairs',
      image: `Category1.webp`,
      link: '/categories/home-maintenance-and-repairs',
    },
    {
      id: 2,
      title: 'Cleaning and housekeeping',
      image: `Category2.webp`,
      link: '/categories/cleaning-and-housekeeping',
    },
    {
      id: 3,
      title: 'Garden and pool care',
      image: `Category3.webp`,
      link: '/categories/garden-and-pool-care',
    },
    {
      id: 4,
      title: 'Beauty and wellness',
      image: `Category4.webp`,
      link: '/categories/beauty-and-wellness',
    },
    {
      id: 5,
      title: 'Tutors & learning',
      image: `Category5.webp`,
      link: '/categories/tutors-and-learning',
    },
  ];

  return (
    <div className='w-full'>
      {/* Mobile layout (< sm): 1 + 2 + 2 structure */}
      <div className='sm:hidden flex flex-col gap-3'>
        {/* First div - full width, height 220px */}
        <Link href={categories[0].link}>
          <div
            className='w-full h-[220px] bg-white rounded-3xl relative overflow-hidden'
            style={{
              backgroundImage: `url(/images/home/${getImagePrefix()}${
                categories[0].image
              })`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
            }}
          >
            <div className='absolute top-4 left-4'>
              <div className='text-lg leading-[26px] font-medium text-[#1D1D1FE5] !w-52'>
                {categories[0].title}
              </div>
            </div>
          </div>
        </Link>

        {/* Second row - 2 divs, height 175px each */}
        <div className='flex gap-3'>
          <Link href={categories[1].link} className='flex-1'>
            <div
              className='h-[220px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[1].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='text-lg leading-[26px] font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[1].title}
                </div>
              </div>
            </div>
          </Link>
          <Link href={categories[2].link} className='flex-1'>
            <div
              className='h-[220px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[2].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='text-lg leading-[26px] font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[2].title}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Third row - 2 divs, height 175px each */}
        <div className='flex gap-3'>
          <Link href={categories[3].link} className='flex-1'>
            <div
              className='h-[220px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[3].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='text-lg leading-[26px] font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[3].title}
                </div>
              </div>
            </div>
          </Link>
          <Link href={categories[4].link} className='flex-1'>
            <div
              className='h-[220px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[4].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='text-lg leading-[26px] font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[4].title}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Tablet layout (sm to xl): 2 + 3 structure */}
      <div className='hidden sm:flex xl:hidden flex-col gap-3'>
        {/* First row - 2 divs, height 260px each */}
        <div className='flex gap-3'>
          <Link href={categories[0].link} className='flex-1'>
            <div
              className='h-[260px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[0].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS4 font-medium text-[#1D1D1FE5] !w-52'>
                  {categories[0].title}
                </div>
              </div>
            </div>
          </Link>
          <Link href={categories[1].link} className='flex-1'>
            <div
              className='h-[260px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[1].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS4 font-medium text-[#1D1D1FE5] !w-52'>
                  {categories[1].title}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Second row - 3 divs, height 260px each */}
        <div className='flex gap-3'>
          <Link href={categories[2].link} className='flex-1'>
            <div
              className='h-[260px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[2].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS4 font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[2].title}
                </div>
              </div>
            </div>
          </Link>
          <Link href={categories[3].link} className='flex-1'>
            <div
              className='h-[260px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[3].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS4 font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[3].title}
                </div>
              </div>
            </div>
          </Link>
          <Link href={categories[4].link} className='flex-1'>
            <div
              className='h-[260px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[4].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS4 font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[4].title}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop layout (xl+): 2 + 3 structure */}
      <div className='hidden xl:flex flex-col gap-6 items-center justify-center'>
        {/* First row - 2 divs, height 260px each */}
        <div className='flex gap-6'>
          <Link
            href={categories[0].link}
            className='hover:scale-105 transition-all duration-300'
          >
            <div
              className='h-[260px] !w-[588px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[0].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS3 font-medium text-[#1D1D1FE5] !w-60'>
                  {categories[0].title}
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={categories[1].link}
            className='hover:scale-105 transition-all duration-300'
          >
            <div
              className='h-[260px] !w-[588px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[1].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS3 font-medium text-[#1D1D1FE5] !w-36 xl:!w-42'>
                  {categories[1].title}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Second row - 3 divs, height 260px each */}
        <div className='flex gap-6'>
          <Link
            href={categories[2].link}
            className='hover:scale-105 transition-all duration-300'
          >
            <div
              className='h-[260px] !w-[384px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[2].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS3 font-medium text-[#1D1D1FE5] !w-42'>
                  {categories[2].title}
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={categories[3].link}
            className='hover:scale-105 transition-all duration-300'
          >
            <div
              className='h-[260px] !w-[384px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[3].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS3 font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[3].title}
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={categories[4].link}
            className='hover:scale-105 transition-all duration-300'
          >
            <div
              className='h-[260px] !w-[384px] bg-white rounded-3xl relative overflow-hidden'
              style={{
                backgroundImage: `url(/images/home/${getImagePrefix()}${
                  categories[4].image
                })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <div className='absolute top-4 left-4'>
                <div className='HeadingFS3 font-medium text-[#1D1D1FE5] !w-36'>
                  {categories[4].title}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
