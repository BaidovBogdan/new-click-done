'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';

const svgMobile = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13.5493 2.76363C13.091 2.67191 12.6388 2.5519 12.1953 2.40429C11.984 2.33763 11.7473 2.26696 11.4747 2.18629C10.4567 1.88638 9.46623 1.50009 8.51401 1.03163C8.35428 0.952686 8.17851 0.911621 8.00034 0.911621C7.82217 0.911621 7.6464 0.952686 7.48668 1.03163C6.53417 1.49998 5.54348 1.88627 4.52534 2.18629C4.25268 2.26696 4.01601 2.33963 3.80468 2.40429C3.36119 2.5519 2.90899 2.67191 2.45068 2.76363C2.18294 2.81301 1.94106 2.95489 1.7673 3.16448C1.59354 3.37407 1.49893 3.63804 1.50001 3.91029V7.01763C1.50018 8.41472 1.87384 9.78637 2.58229 10.9905C3.29074 12.1947 4.30821 13.1875 5.52934 13.8663L7.43268 14.9243C7.60581 15.0212 7.80092 15.0721 7.99934 15.0721C8.19777 15.0721 8.39287 15.0212 8.56601 14.9243L10.4707 13.8663C11.6918 13.1875 12.7093 12.1947 13.4177 10.9905C14.1262 9.78637 14.4998 8.41472 14.5 7.01763V3.91029C14.5011 3.63804 14.4065 3.37407 14.2327 3.16448C14.059 2.95489 13.8171 2.81301 13.5493 2.76363Z'
      fill='#597EF7'
    />
    <path
      d='M7.33356 9.16665C7.26789 9.16681 7.20283 9.15393 7.14218 9.12875C7.08153 9.10357 7.02648 9.0666 6.98022 9.01998L5.64689 7.68665C5.55857 7.59186 5.51049 7.4665 5.51277 7.33696C5.51506 7.20743 5.56753 7.08384 5.65914 6.99223C5.75075 6.90062 5.87434 6.84815 6.00388 6.84586C6.13341 6.84358 6.25877 6.89166 6.35356 6.97998L7.33356 7.95931L9.64689 5.64665C9.74167 5.55833 9.86704 5.51024 9.99657 5.51253C10.1261 5.51481 10.2497 5.56729 10.3413 5.6589C10.4329 5.75051 10.4854 5.8741 10.4877 6.00363C10.49 6.13317 10.4419 6.25853 10.3536 6.35331L7.68689 9.01998C7.64064 9.0666 7.58559 9.10357 7.52493 9.12875C7.46428 9.15393 7.39923 9.16681 7.33356 9.16665Z'
      fill='white'
    />
  </svg>
);

const svgTablet = (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.9367 3.45466C16.3638 3.34001 15.7985 3.19 15.2442 3.00549C14.98 2.92216 14.6842 2.83382 14.3433 2.73299C13.0709 2.3581 11.8328 1.87523 10.6425 1.28966C10.4429 1.19098 10.2231 1.13965 10.0004 1.13965C9.77772 1.13965 9.558 1.19098 9.35834 1.28966C8.16772 1.8751 6.92935 2.35796 5.65668 2.73299C5.31585 2.83382 5.02001 2.92466 4.75584 3.00549C4.20149 3.19 3.63624 3.34001 3.06334 3.45466C2.72868 3.51639 2.42633 3.69374 2.20913 3.95572C1.99192 4.21771 1.87366 4.54768 1.87501 4.88799V8.77216C1.87523 10.5185 2.3423 12.2331 3.22786 13.7383C4.11342 15.2435 5.38526 16.4845 6.91168 17.333L9.29084 18.6555C9.50727 18.7767 9.75115 18.8403 9.99918 18.8403C10.2472 18.8403 10.4911 18.7767 10.7075 18.6555L13.0883 17.333C14.6148 16.4845 15.8866 15.2435 16.7722 13.7383C17.6577 12.2331 18.1248 10.5185 18.125 8.77216V4.88799C18.1264 4.54768 18.0081 4.21771 17.7909 3.95572C17.5737 3.69374 17.2713 3.51639 16.9367 3.45466Z'
      fill='#597EF7'
    />
    <path
      d='M9.1667 11.4584C9.08461 11.4586 9.0033 11.4425 8.92748 11.411C8.85166 11.3795 8.78285 11.3333 8.72504 11.275L7.05837 9.60837C6.94797 9.48989 6.88787 9.33318 6.89072 9.17127C6.89358 9.00935 6.95917 8.85486 7.07368 8.74035C7.18819 8.62584 7.34268 8.56025 7.5046 8.55739C7.66652 8.55453 7.82322 8.61464 7.9417 8.72504L9.1667 9.9492L12.0584 7.05837C12.1768 6.94797 12.3336 6.88787 12.4955 6.89072C12.6574 6.89358 12.8119 6.95917 12.9264 7.07368C13.0409 7.18819 13.1065 7.34268 13.1093 7.5046C13.1122 7.66652 13.0521 7.82322 12.9417 7.9417L9.60837 11.275C9.55055 11.3333 9.48174 11.3795 9.40592 11.411C9.33011 11.4425 9.24879 11.4586 9.1667 11.4584Z'
      fill='white'
    />
  </svg>
);

const svgDot = (
  <svg
    width='6'
    height='6'
    viewBox='0 0 6 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='3' cy='3' r='3' fill='white' />
  </svg>
);

export default function FourPeople() {
  useEffect(() => {
    console.log('FourPeople component mounted');
  }, []);

  return (
    <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 xl:flex-row-reverse'>
      <div className='relative sm:hidden !min-h-[340px]'>
        <div className='absolute top-0 left-0 w-full h-full p-4 mt-1 text-white flex flex-col justify-between !min-h-[340px]'>
          <div className='flex items-center justify-center w-[178px] h-[28px] rounded-xl border border-[#FFFFFF33] gap-2'>
            <span>{svgMobile}</span>
            <span className='font-normal TextFSSM'>
              1000+ Trusted specialist
            </span>
          </div>
          <div>
            <span className='HeadingFS3 font-medium'>
              Looking for more clients and steady income?
            </span>
          </div>
          <div className='opacity-70'>
            <div className='flex flex-col gap-2 TextFS !font-normal'>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Get orders from 100500 + clients</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Set your own prices and work on your terms</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Receive guaranteed payments with no hassle</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Build your reputation with verified reviews</span>
              </div>
            </div>
          </div>
          <div>
            <Button className='w-full !h-12 !rounded-xl !bg-[#FF564F] !text-white !font-medium !TextFSLG !border-none'>
              Register as a specialist
            </Button>
          </div>
        </div>
        <Image
          src='/images/home/Mobile4PeopleBlack.webp'
          alt='bg-4-people'
          width={358}
          height={360}
          className='!min-h-[360px]'
          quality={100}
          loading='lazy'
        />
      </div>
      <Image
        src='/images/home/Mobile4People.webp'
        alt='4-people'
        width={358}
        height={208}
        quality={100}
        className='sm:hidden'
        loading='lazy'
      />
      <div className='hidden relative sm:block xl:hidden'>
        <div className='absolute top-0 left-0 w-full h-full p-6 ml-4 mt-2 text-white flex flex-col gap-6 !min-h-[422px]'>
          <div className='flex items-center justify-center w-[178px] h-[28px] rounded-xl border border-[#FFFFFF33] gap-2'>
            <span>{svgTablet}</span>
            <span className='font-normal TextFSSM'>
              1000+ Trusted specialist
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='HeadingFS3 font-medium'>
              Looking for more clients
            </span>
            <span className='HeadingFS3 font-medium'>and steady income?</span>
          </div>
          <div className='opacity-70'>
            <div className='flex flex-col gap-2 TextFS !font-normal'>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Get orders from 100500 + clients</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Set your own prices and work on your terms</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Receive guaranteed payments with no hassle</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Build your reputation with verified reviews</span>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <Button className='!h-14 !rounded-xl !bg-[#FF564F] !text-white !font-medium !TextFSLG !border-none !w-[207px]'>
              Register as a specialist
            </Button>
          </div>
        </div>
        <Image
          src='/images/home/Tablet4PeopleBlack.webp'
          alt='bg-4-people'
          width={754}
          height={422}
          quality={100}
          className='!min-h-[422px]'
          loading='lazy'
        />
      </div>
      <Image
        src='/images/home/Tablet4People.webp'
        alt='4-people'
        width={754}
        height={409}
        quality={100}
        className='hidden sm:block xl:hidden'
        loading='lazy'
      />
      <div className='hidden xl:block relative'>
        <div className='absolute top-0 left-0 w-full h-full p-4 ml-4 mt-3 text-white flex flex-col gap-6 !min-h-[520px]'>
          {' '}
          <div className='flex items-center justify-center w-[178px] h-[28px] rounded-xl border border-[#FFFFFF33] gap-2'>
            <span>{svgTablet}</span>
            <span className='font-normal TextFSSM'>
              1000+ Trusted specialist
            </span>
          </div>
          <div className='flex flex-col w-64'>
            <span className='HeadingFS3 font-medium'>
              Looking for more clients and steady income?
            </span>
          </div>
          <div className='opacity-70 w-72'>
            <div className='flex flex-col gap-2 TextFS !font-normal'>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Get orders from 100500 + clients</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Set your own prices and work on your terms</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Receive guaranteed payments with no hassle</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>{svgDot}</span>
                <span>Build your reputation with verified reviews</span>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <Button className='!h-14 !rounded-xl !bg-[#FF564F] !text-white !font-medium !TextFSLG !border-none !w-[207px]'>
              Register as a specialist
            </Button>
          </div>
        </div>
        <Image
          src='/images/home/Laptop4PeopleBlack.webp'
          alt='bg-4-people'
          width={383}
          height={520}
          quality={100}
          className='!min-h-[520px]'
          loading='lazy'
        />
      </div>
      <Image
        src='/images/home/Laptop4People.webp'
        alt='4-people'
        width={792}
        height={520}
        quality={100}
        className='hidden xl:block'
        loading='lazy'
      />
    </div>
  );
}
