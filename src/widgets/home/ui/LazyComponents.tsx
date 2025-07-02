'use client';

import dynamic from 'next/dynamic';

// Компонент загрузки для секций
const SectionLoader = () => (
  <div className='flex justify-center items-center h-32'>
    <div className='w-8 h-8 border-4 border-gray-200 border-t-[#FF564F] rounded-full animate-spin'></div>
  </div>
);

// Dynamic imports для клиентских компонентов
export const LazyCategory = dynamic(() => import('./Category'), {
  loading: () => <SectionLoader />,
});

export const LazyHowItWorks = dynamic(() => import('./HowItWorks'), {
  loading: () => <SectionLoader />,
});

export const LazyQr = dynamic(() => import('./Qr'), {
  loading: () => <SectionLoader />,
});

export const LazyFeedback = dynamic(() => import('./Feedback'), {
  loading: () => <SectionLoader />,
});

export const LazyFourPeople = dynamic(() => import('./FourPeople'), {
  loading: () => <SectionLoader />,
});

export const LazyBlog = dynamic(() => import('./Blog'), {
  loading: () => <SectionLoader />,
});
