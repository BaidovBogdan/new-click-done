'use client';

import { Button } from 'antd';
import Image from 'next/image';

const googleIcon = (
  <svg
    width='24'
    height='26'
    viewBox='0 0 24 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.374 18.7861L4.83984 25.4443L4.80566 25.4639C4.37757 25.7162 3.87837 25.8603 3.34668 25.8604C2.22544 25.8604 1.24132 25.1795 0.768555 24.2295L0.853516 24.1455L11.293 13.707L16.374 18.7861ZM10.5859 13L0.472656 23.1104C0.470709 23.0683 0.469727 23.0257 0.469727 22.9834V3.0166C0.469727 2.97392 0.470679 2.93101 0.472656 2.88867L10.5859 13ZM21.9756 10.4922L21.9854 10.499C22.8787 10.9877 23.4834 11.9344 23.4834 13.0234C23.4833 14.1202 22.87 15.0715 21.9678 15.5586L17.2705 18.2686L12 13L17.249 7.75098L21.9756 10.4922ZM3.34668 0.139648C3.89007 0.139651 4.39791 0.290183 4.83301 0.550781L16.3545 7.23242L11.293 12.293L0.853516 1.85547L0.768555 1.77051C1.24124 0.820484 2.22517 0.139648 3.34668 0.139648Z'
      fill='white'
    />
  </svg>
);

const appleIcon = (
  <svg
    width='19'
    height='23'
    viewBox='0 0 19 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15.269 12.3008C15.2907 10.6198 16.1934 9.02922 17.6256 8.14876C16.7221 6.85844 15.2088 6.04034 13.6344 5.99108C11.9552 5.81482 10.3272 6.99591 9.47149 6.99591C8.59922 6.99591 7.28172 6.00858 5.86299 6.03777C4.01374 6.09751 2.28977 7.1489 1.39007 8.76564C-0.543928 12.1141 0.898662 17.0351 2.75127 19.7417C3.67817 21.0671 4.76145 22.5475 6.1789 22.495C7.56596 22.4375 8.084 21.6105 9.7583 21.6105C11.4171 21.6105 11.9031 22.495 13.3493 22.4616C14.8377 22.4375 15.7754 21.1304 16.6698 19.7925C17.3358 18.8481 17.8483 17.8044 18.1882 16.7C16.4391 15.9602 15.271 14.2 15.269 12.3008Z'
      fill='white'
    />
    <path
      d='M12.5373 4.21108C13.3489 3.23687 13.7487 1.98469 13.6518 0.720459C12.412 0.850679 11.2668 1.44324 10.4443 2.38007C9.63998 3.2954 9.22143 4.52555 9.30056 5.74146C10.5408 5.75423 11.7601 5.17773 12.5373 4.21108Z'
      fill='white'
    />
  </svg>
);

export default function Qr() {
  return (
    <div className='w-[358px] h-[558px] sm:w-[754px] sm:h-[381px] xl:w-[1200px] xl:h-[376px] relative'>
      {/* Unified text content with responsive positioning and styling */}
      <div className='absolute top-10 left-0 sm:top-18 sm:left-8 xl:top-28 xl:left-10 w-full h-full flex flex-col gap-2 sm:gap-4 items-center sm:items-start'>
        <div className='text-white text-center sm:text-left HeadingFS2 font-medium flex flex-col gap-2 xl:!text-[40px] xl:!leading-[48px]'>
          <span className='sm:hidden'>Better in</span>
          <span className='sm:hidden'>a mobile app</span>
          <span className='hidden sm:block xl:hidden'>Better in</span>
          <span className='hidden sm:block xl:hidden'>a mobile app</span>
          <span className='hidden xl:block'>Better in a mobile app</span>
        </div>
        <div className='text-white font-medium text-center sm:text-left'>
          <span className='TextFS sm:hidden'>
            Get the full experience — download the app now.
          </span>
          <div className='hidden sm:flex xl:hidden TextFSLG flex-col'>
            <span>Get the full experience —</span>
            <span>download the app now.</span>
          </div>
          <span className='hidden xl:block HeadingFS4'>
            Get the full experience — download the app now.
          </span>
        </div>
        <div className='text-white TextFS font-normal opacity-70 text-center sm:text-left'>
          <span className='sm:hidden'>
            Easier booking, instant chat, real-time updates
          </span>
          <div className='hidden sm:flex xl:hidden flex-col gap-1'>
            <span>Easier booking, instant chat,</span>
            <span>real-time updates</span>
          </div>
          <span className='hidden xl:block'>
            Easier booking, instant chat, real-time updates
          </span>
        </div>
        <div className='flex gap-2 justify-center sm:justify-start items-end mt-0 sm:mt-7'>
          <Button className='!border-[1px] !rounded-lg !max-w-[135px] !h-10 !bg-transparent'>
            <div className='flex justify-between items-center gap-2 text-white'>
              <div>{googleIcon}</div>
              <div className='flex flex-col -space-y-1'>
                <span className='text-left text-[10px]'>Get it on</span>
                <span className='text-[16px]'>Google Play</span>
              </div>
            </div>
          </Button>
          <Button className='!border-[1px] !rounded-lg !max-w-[135px] !h-10 !bg-transparent'>
            <div className='flex justify-between items-center gap-2 text-white'>
              <div>{appleIcon}</div>
              <div className='flex flex-col -space-y-1'>
                <span className='text-left text-[10px]'>Download on the</span>
                <span className='text-[16px]'>App Store</span>
              </div>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile image */}
      <Image
        src='/images/home/MobileQr.webp'
        alt='qr'
        width={358}
        height={558}
        className='!min-h-[558px] sm:hidden'
        loading='lazy'
        quality={100}
      />

      {/* Tablet image */}
      <Image
        src='/images/home/TabletQr.webp'
        alt='qr'
        width={754}
        height={381}
        className='!min-h-[381px] hidden sm:block xl:hidden'
        loading='lazy'
        quality={100}
      />

      {/* Desktop image */}
      <Image
        src='/images/home/LaptopQr.webp'
        alt='qr'
        width={1200}
        height={376}
        className='hidden xl:block'
        loading='lazy'
        quality={100}
      />
    </div>
  );
}
