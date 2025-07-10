'use client';

import { Breadcrumb, Button, ConfigProvider } from 'antd';
import { useBreakpoint } from '@/shared/hooks';
import Image from 'next/image';
import { StarFilled } from '@ant-design/icons';
import BlogGridCard from '@/shared/ui/Blog/BlogGridCard';
import { BlogCard } from '@/shared/ui';
import FooterHome from '@/shared/ui/Footer/FooterHome';
import { useState, useEffect, useRef } from 'react';

const blogCards = [
  {
    image: '/images/home/Laptop-blog1.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog2.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
  {
    image: '/images/home/Laptop-blog3.webp',
    desc: 'Does avoiding impulse purchases help you save money?',
    date: '12.06.2025',
  },
];

const svgMobileLeft = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.0007 12.6667L5.33398 8.00004L10.0007 3.33337'
      stroke='#1D1D1F'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function BlogPost() {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  const [isScrolledPast2000, setIsScrolledPast2000] = useState(false);
  const [fixedPosition, setFixedPosition] = useState({ top: 0, left: 0 });
  const [activeSection, setActiveSection] = useState('introduction');

  // Refs для каждого раздела
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const shutOffRef = useRef<HTMLDivElement | null>(null);
  const findValveRef = useRef<HTMLDivElement | null>(null);
  const stepByStepRef = useRef<HTMLDivElement | null>(null);
  const troubleshootRef = useRef<HTMLDivElement | null>(null);

  // Функция для скролла к разделу
  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    sectionId?: string
  ) => {
    if (sectionId === 'introduction') {
      // Для Introduction скроллим в самый верх страницы
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Логика для фиксированного меню
      if (scrollY >= 2200 && !isScrolledPast2000) {
        const element = document.querySelector('.table-of-contents');
        if (element) {
          const rect = element.getBoundingClientRect();
          setFixedPosition({
            top: rect.top + scrollY,
            left: rect.left,
          });
        }
        setIsScrolledPast2000(true);
      } else if (scrollY < 2200 && isScrolledPast2000) {
        setIsScrolledPast2000(false);
      }

      // Определяем активный раздел
      const sections = [
        { ref: introductionRef, id: 'introduction' },
        { ref: shutOffRef, id: 'shutoff' },
        { ref: findValveRef, id: 'findvalve' },
        { ref: stepByStepRef, id: 'stepbystep' },
        { ref: troubleshootRef, id: 'troubleshoot' },
      ];

      // Если в самом верху страницы, активируем Introduction
      if (scrollY < 200) {
        setActiveSection('introduction');
      } else {
        // Иначе проверяем какой раздел в центре экрана (наполовину виден)
        const windowHeight = window.innerHeight;
        const centerPoint = windowHeight / 6;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.ref.current) {
            const rect = section.ref.current.getBoundingClientRect();
            // Проверяем, находится ли раздел в центральной области экрана
            if (rect.top <= centerPoint && rect.bottom >= centerPoint) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolledPast2000]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: '#1D1D1FE5',
            lastItemColor: '#1D1D1F73',
            separatorColor: '#1D1D1FE5',
          },
        },
      }}
    >
      <div className='lg:max-w-[85%] mx-auto'>
        <div className='mt-4'>
          {isMobile && (
            <Button
              className='!bg-transparent !border-none active:!bg-gray-500/10 !w-[57px] !h-[22px]'
              type='text'
            >
              <div className='flex items-center gap-2'>
                {svgMobileLeft}
                <span className='font-normal TextFS'>Back</span>
              </div>
            </Button>
          )}
          {(isTablet || isDesktop) && (
            <div>
              <Breadcrumb
                items={[
                  {
                    title: 'Main',
                  },
                  {
                    title: 'News',
                  },
                  {
                    title:
                      'How to Turn Off the Water to a Faucet: A Calm and Clear Guide',
                  },
                ]}
              />
              <br />
              <br />
              <div className='w-[125px] h-[22px] hidden sm:flex justify-between font-normal TextFS text-[#1D1D1FA6]/70 xl:hidden'>
                <span>12.06.2025</span>
                <span>Article</span>
              </div>
            </div>
          )}
        </div>
        <div className='mt-6 xl:flex xl:gap-12'>
          <div className='hidden xl:block xl:w-[30%]'>
            <div
              className={`table-of-contents ${
                isScrolledPast2000 ? '!absolute' : '!fixed'
              }`}
              style={
                isScrolledPast2000
                  ? {
                      top: `${fixedPosition.top}px`,
                      left: `${fixedPosition.left}px`,
                    }
                  : {}
              }
            >
              <div className='p-4 bg-white rounded-2xl flex flex-col gap-4'>
                <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                  Table of Contents
                </span>
                <div className='flex flex-col gap-3'>
                  <span
                    className={`font-normal TextFSLG cursor-pointer transition-colors duration-300 ${
                      activeSection === 'introduction'
                        ? 'text-[#1D1D1FE5]'
                        : 'text-[#1D1D1F73] hover:text-[#1D1D1FE5]'
                    }`}
                    onClick={() =>
                      scrollToSection(introductionRef, 'introduction')
                    }
                  >
                    1. Introduction
                  </span>
                  <span
                    className={`font-normal TextFSLG cursor-pointer transition-colors duration-300 ${
                      activeSection === 'shutoff'
                        ? 'text-[#1D1D1FE5]'
                        : 'text-[#1D1D1F73] hover:text-[#1D1D1FE5]'
                    }`}
                    onClick={() => scrollToSection(shutOffRef, 'shutoff')}
                  >
                    2. Why You Might Need to Shut Off the Water
                  </span>
                  <span
                    className={`font-normal TextFSLG cursor-pointer transition-colors duration-300 ${
                      activeSection === 'findvalve'
                        ? 'text-[#1D1D1FE5]'
                        : 'text-[#1D1D1F73] hover:text-[#1D1D1FE5]'
                    }`}
                    onClick={() => scrollToSection(findValveRef, 'findvalve')}
                  >
                    3. Where to Find the Shut-Off Valve
                  </span>
                  <span
                    className={`font-normal TextFSLG cursor-pointer transition-colors duration-300 ${
                      activeSection === 'stepbystep'
                        ? 'text-[#1D1D1FE5]'
                        : 'text-[#1D1D1F73] hover:text-[#1D1D1FE5]'
                    }`}
                    onClick={() => scrollToSection(stepByStepRef, 'stepbystep')}
                  >
                    4. Step-by-Step: Turning Off the Water
                  </span>
                  <span
                    className={`font-normal TextFSLG cursor-pointer transition-colors duration-300 ${
                      activeSection === 'troubleshoot'
                        ? 'text-[#1D1D1FE5]'
                        : 'text-[#1D1D1F73] hover:text-[#1D1D1FE5]'
                    }`}
                    onClick={() =>
                      scrollToSection(troubleshootRef, 'troubleshoot')
                    }
                  >
                    5. If the Water Doesn't Stop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-[70%] flex flex-col gap-4 sm:gap-7 xl:max-w-[804px]'>
            <span className='font-medium HeadingFS3 sm:!text-[32px] sm:!leading-[40px] text-[#1A1A1A]'>
              How to Turn Off the Water to a Faucet: A Calm and Clear Guide
            </span>
            <div className='mx-auto'>
              {isMobile && (
                <Image
                  src={'/images/blog/mobile-slug.webp'}
                  alt='blog'
                  width={350}
                  height={400}
                  priority
                  quality={100}
                />
              )}

              {isTablet && (
                <Image
                  src={'/images/blog/tablet-slug.webp'}
                  alt='blog'
                  width={703}
                  height={400}
                  priority
                  quality={100}
                />
              )}

              {isDesktop && (
                <Image
                  src={'/images/blog/laptop-slug.webp'}
                  alt='blog'
                  width={800}
                  height={400}
                  priority
                  quality={100}
                />
              )}
            </div>
            <div className='p-4 bg-white rounded-2xl flex flex-col gap-4 xl:hidden'>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                Table of Contents
              </span>
              <div className='flex flex-col gap-3'>
                <span className='font-normal TextFSLG text-[#1D1D1FE5]'>
                  1. Introduction
                </span>
                <span className='font-normal TextFSLG text-[#1D1D1F73]'>
                  2. Why You Might Need to Shut Off the Water
                </span>
                <span className='font-normal TextFSLG text-[#1D1D1F73]'>
                  3. Where to Find the Shut-Off Valve
                </span>
                <span className='font-normal TextFSLG text-[#1D1D1F73]'>
                  4. Step-by-Step: Turning Off the Water
                </span>
                <span className='font-normal TextFSLG text-[#1D1D1F73]'>
                  5. If the Water Doesn’t Stop
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-4' ref={introductionRef}>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                1. Introduction
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                Download and get easy access to the orders, Download and get
                easy access to the orders,Download and get easy access to the
                orders, Download and get easy to the orders,Download and get
                easy access to the orders, Download and get easy
              </span>
              <div className='p-4 bg-white rounded-2xl flex flex-col gap-4'>
                <div className='flex gap-6 items-start'>
                  {isMobile ? (
                    <Image
                      src={'/images/home/avatarNegr.webp'}
                      alt='avatar'
                      width={48}
                      height={48}
                      quality={100}
                    />
                  ) : (
                    <Image
                      src={'/images/home/avatarNegr.webp'}
                      alt='avatar'
                      width={82}
                      height={82}
                      quality={100}
                    />
                  )}
                  <div className='sm:flex justify-between w-full'>
                    <div className='flex flex-col gap-2'>
                      <span className='text-[#1D1D1FE5]'>Akex Akes</span>
                      <div className='font-normal TextFS text-[#1D1D1F73] flex gap-2'>
                        <div className='w-[55px] h-7.5 flex items-center justify-center gap-1 opacity-70 bg-[#F7F7F7] rounded-lg'>
                          <StarFilled className='!text-[#FFC107]' key={'asd'} />
                          4,2
                        </div>
                        <div className='w-[79px] h-7.5 flex items-center justify-center bg-[#F7F7F7] rounded-lg'>
                          30 review
                        </div>
                      </div>
                    </div>
                    <Button className='!bg-[#FF564F] !w-[129px] !h-10 !rounded-lg !hidden sm:!block'>
                      <span className='font-medium TextFS text-white'>
                        Open the form
                      </span>
                    </Button>
                  </div>
                </div>
                <div className='font-normal TextFS text-[#1D1D1FE5] sm:!text-[20px] sm:!leading-[28px]'>
                  “ I need a general cleaning of my home before I need a general
                  cleaning of my home before I need a general cleaning of my
                  home before I need ”
                </div>
                <div className='sm:hidden'>
                  <Button className='!bg-[#FF564F] !w-full !h-10 !rounded-lg'>
                    <span className='font-medium TextFS text-white'>
                      Open the form
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-4' ref={shutOffRef}>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                2. Why You Might Need to Shut Off the Water
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                There are several reasons for turning off the water. Maybe your
                faucet is dripping. Maybe you're planning to replace it. Or
                maybe you’ve noticed a sudden spray of water under the sink and
                don’t know what to do. In any case, you can’t fix the issue
                until the water is off.
              </span>

              <div className='mx-auto mt-2'>
                {isMobile && (
                  <div className='flex gap-3'>
                    <Image
                      src={'/images/blog/mobile-2step.webp'}
                      alt='2step'
                      width={169}
                      height={169}
                      quality={100}
                    />
                    <Image
                      src={'/images/blog/mobile-2step.webp'}
                      alt='2step'
                      width={169}
                      height={169}
                      quality={100}
                    />
                  </div>
                )}
                {isTablet && (
                  <div className='flex gap-3'>
                    <Image
                      src={'/images/blog/tablet-2step.webp'}
                      alt='2step'
                      width={345}
                      height={300}
                      quality={100}
                      className='!min-w-[305px]'
                    />
                    <Image
                      src={'/images/blog/tablet-2step.webp'}
                      alt='2step'
                      width={345}
                      height={300}
                      quality={100}
                      className='!min-w-[305px]'
                    />
                  </div>
                )}
                {isDesktop && (
                  <div className='flex gap-3'>
                    <Image
                      src={'/images/blog/laptop-2step.webp'}
                      alt='2step'
                      width={390}
                      height={300}
                      quality={100}
                    />
                    <Image
                      src={'/images/blog/laptop-2step.webp'}
                      alt='2step'
                      width={390}
                      height={300}
                      quality={100}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-4' ref={findValveRef}>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                3. Where to Find the Shut-Off Valve
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                In most modern homes, you’ll find small shut-off valves under
                the sink — usually one for cold water and one for hot. These are
                connected to the flexible pipes that supply your faucet. They’re
                usually small, round or oval handles that you can turn by hand.
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                No valves under the sink? Head to your bathroom or utility
                closet. Many apartments and older buildings have a main shut-off
                on the water riser in the bathroom — usually behind a metal or
                plastic panel. In houses, the main valve may be in a basement or
                near the water meter.
              </span>
            </div>
            <div className='flex flex-col gap-3 mt-4' ref={stepByStepRef}>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                4. Step-by-Step: Turning Off the Water If you’ve found a valve:
              </span>
              <div className='ml-2'>
                <ul className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6] list-disc pl-4'>
                  <li>
                    Turn it clockwise (right) until it stops. This usually
                    closes it.
                  </li>
                  <li>
                    If it’s a lever (ball valve), turn it so it’s perpendicular
                    to the pipe.
                  </li>
                  <li>
                    Open your faucet — if water stops, you did it right. If a
                    small amount trickles out, that’s just leftover water in the
                    pipe.
                  </li>
                </ul>
              </div>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                If the valve is old or stuck, don’t force it. Use a cloth or
                pliers gently, or call someone with more experience.
              </span>
              <div className='mx-auto'>
                {isMobile && (
                  <Image
                    src={'/images/blog/mobile-slug.webp'}
                    alt='blog'
                    width={350}
                    height={400}
                    priority
                    quality={100}
                  />
                )}

                {isTablet && (
                  <Image
                    src={'/images/blog/tablet-slug.webp'}
                    alt='blog'
                    width={703}
                    height={400}
                    priority
                    quality={100}
                  />
                )}

                {isDesktop && (
                  <Image
                    src={'/images/blog/laptop-slug.webp'}
                    alt='blog'
                    width={800}
                    height={400}
                    priority
                    quality={100}
                  />
                )}
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-4' ref={troubleshootRef}>
              <span className='font-medium HeadingFS4 text-[#1A1A1A]'>
                5. If the Water Doesn’t Stop
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                — The wrong valve
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                — A broken or faulty shut-off
              </span>
              <span className='font-normal text-[16px] leading-[28px] sm:leading-[24px] text-[#1D1D1FA6]'>
                In that case, try to find the main water valve in your apartment
                or house and shut that off instead. If you can’t locate it or
                it’s an emergency (like water flooding the floor), call building
                maintenance or an emergency plumber right away.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 flex flex-col gap-4 xl:max-w-[85%] xl:mx-auto'>
        <span className='font-medium HeadingFS3 text-[#1A1A1A]'>
          Related Articles
        </span>
        <div className='flex flex-col gap-4 sm:hidden'>
          {blogCards.map((card, index) => (
            <BlogGridCard
              key={index}
              image={card.image}
              mobileImage={card.image}
              desc={card.desc}
              date={card.date}
            />
          ))}
        </div>
        <div className='hidden sm:block xl:hidden -mx-4'>
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
        </div>
        <div className='hidden xl:flex justify-center gap-6'>
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
      <div className='mt-32'>
        <FooterHome />
      </div>
    </ConfigProvider>
  );
}
