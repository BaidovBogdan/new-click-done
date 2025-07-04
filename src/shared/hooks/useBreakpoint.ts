'use client';

import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth >= 1280) {
        // xl breakpoint
        setBreakpoint('desktop');
      } else if (window.innerWidth >= 640) {
        // sm breakpoint
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    // Set initial breakpoint
    updateBreakpoint();

    // Add event listener
    window.addEventListener('resize', updateBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};
