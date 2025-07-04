import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';

export default function Girl() {
  return (
    <div className='relative w-full flex justify-center items-center'>
      {/* Background Line Images - Full Width */}
      <div className='absolute inset-0 left-[-54vw] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden'>
        {/* Mobile Line */}
        <div className='sm:hidden w-full flex justify-center'>
          <Image
            src='/images/home/mobileLineGirl.webp'
            alt='girl line'
            width={478}
            height={163}
            className='w-screen max-w-none object-cover'
            priority
          />
        </div>
      </div>
      {/* Tablet Line */}
      <div className='absolute inset-0 left-[-16px] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden'>
        <div className='hidden sm:block lg:hidden w-full justify-center'>
          <Image
            src='/images/home/tabletLineGirl.webp'
            alt='girl line'
            width={869}
            height={297}
            className='w-screen max-w-none object-cover'
            priority
          />
        </div>
      </div>
      {/* Desktop Line */}
      <div className='absolute inset-0 left-[-1.1vw] right-[-50vw] w-[200vw] flex justify-center items-center overflow-hidden 3xl:left-[-0.85vw] 4xl:left-[-0.64vw]'>
        <div className='hidden lg:block w-full justify-center'>
          <Image
            src='/images/home/desktopLineGirl.webp'
            alt='girl line'
            width={1582}
            height={541}
            className='w-screen max-w-none object-cover 4xl:scale-y-[0.8] 5xl:scale-y-[0.6]'
            priority
          />
        </div>
      </div>

      {/* Foreground Girl Images - Centered */}
      <div className='relative z-10 flex justify-center'>
        {/* Mobile Girl */}
        <div className='block sm:hidden'>
          <Image
            src='/images/home/mobileGirlHero.webp'
            alt='girl'
            width={340}
            height={240}
            priority
            quality={100}
          />
        </div>
        {/* Tablet Girl */}
        <div className='hidden sm:block xl:hidden relative'>
          <Image
            src='/images/home/tabletGirlHero.webp'
            alt='girl'
            width={550}
            height={340}
            priority
            quality={100}
          />
          {/* Tablet Squares */}
          <div className='absolute top-[9.5%] left-[-14%] w-[188px] h-[192px] bg-white z-10 rounded-2xl'>
            <div className='p-4 flex flex-col gap-3 font-normal'>
              <div className='flex justify-between items-center'>
                <div>
                  <Image
                    src='/images/home/avatarNegr.webp'
                    alt='avatar'
                    width={56}
                    height={56}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='TextFS'>Alex Wazovski</span>
                  <span className='TextFSSM opacity-50'>10 years of exp.</span>
                </div>
              </div>
              <div>
                <span className='TextFS'>Let me help you with your tasks!</span>
                <div className='flex gap-4 mt-5'>
                  <span className='flex items-center gap-2 TextFSSM opacity-50'>
                    <StarFilled className='!text-[#FFC53D] !text-xl' /> 4.8{' '}
                    <span>(287 reviews)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[8%] right-[-15%] w-[188px] h-[166px] bg-white z-10 rounded-2xl'>
            <div className='p-4 flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                <Image
                  src='/images/home/girlCleaning.webp'
                  alt='cleaning'
                  width={40}
                  height={40}
                />
                <span className='font-medium TextFS'>Cleaning my house</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='TextFSSM opacity-50 font-normal'>
                  5 min ago
                </span>
                <span className='TextFSSM font-medium text-[#FF564F] underline underline-offset-1 cursor-pointer'>
                  +10 connects
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Girl */}
        <div className='hidden xl:block relative'>
          <Image
            src='/images/home/desktopGirlHero.webp'
            alt='girl'
            width={960}
            height={480}
            priority
            quality={100}
          />
          {/* Desktop Squares */}
          <div className='absolute top-[11.5%] left-[-12.5%] w-[188px] h-[192px] bg-white z-10 rounded-2xl'>
            <div className='p-4 flex flex-col gap-5 font-normal'>
              <div className='flex justify-between items-center'>
                <div>
                  <Image
                    src='/images/home/avatarNegr.webp'
                    alt='avatar'
                    width={56}
                    height={56}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='TextFS'>Alex Wazovski</span>
                  <span className='TextFSSM opacity-50'>10 years of exp.</span>
                </div>
              </div>
              <div>
                <span className='TextFS'>Let me help you with your tasks!</span>
                <div className='flex gap-4 mt-5'>
                  <span className='flex items-center gap-2 TextFSSM opacity-50'>
                    <StarFilled className='!text-[#FFC53D] !text-xl' /> 4.8{' '}
                    <span>(287 reviews)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[15%] right-[-12%] w-[200px] h-[166px] bg-white z-10 rounded-2xl'>
            <div className='p-4 flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                <Image
                  src='/images/home/girlCleaning.webp'
                  alt='cleaning'
                  width={40}
                  height={40}
                />
                <span className='font-medium TextFS'>Cleaning my house</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='TextFSSM opacity-50 font-normal'>
                  5 min ago
                </span>
                <span className='TextFSSM font-medium text-[#FF564F] underline underline-offset-1 cursor-pointer'>
                  +10 connects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
