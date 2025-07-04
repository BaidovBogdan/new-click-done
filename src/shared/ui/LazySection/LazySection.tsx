'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

const DefaultFallback = () => (
  <div className='flex justify-center items-center h-32'>
    <div className='w-8 h-8 border-4 border-gray-200 border-t-[#FF564F] rounded-full animate-spin'></div>
  </div>
);

export default function LazySection({
  children,
  fallback = <DefaultFallback />,
  rootMargin = '200px',
  threshold = 0.1,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return <div ref={ref}>{isVisible ? children : fallback}</div>;
}
