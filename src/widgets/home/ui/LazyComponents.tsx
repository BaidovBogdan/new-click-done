'use client';

import dynamic from 'next/dynamic';

// Компонент загрузки для секций
const SectionLoader = () => (
  <div className='flex justify-center items-center h-32'>
    <div className='w-8 h-8 border-4 border-gray-200 border-t-[#FF564F] rounded-full animate-spin'></div>
  </div>
);

// Dynamic imports для клиентских компонентов с правильным синтаксисом
export const LazyCategory = dynamic(
  () => import('./Category').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);

export const LazyHowItWorks = dynamic(
  () => import('./HowItWorks').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);

export const LazyQr = dynamic(
  () => import('./Qr').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);

export const LazyFeedback = dynamic(
  () => import('./Feedback').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);

export const LazyFourPeople = dynamic(
  () => import('./FourPeople').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);

export const LazyBlog = dynamic(
  () => import('./Blog').then(mod => ({ default: mod.default })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);
export const LazyFooterHome = dynamic(
  () =>
    import('@/shared/ui/Footer/FooterHome').then(mod => ({
      default: mod.default,
    })),
  {
    loading: () => <SectionLoader />,
    ssr: false,
  }
);
