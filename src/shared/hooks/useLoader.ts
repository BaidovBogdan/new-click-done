'use client';

import { usePathname } from 'next/navigation';
import { useBreakpoint } from './useBreakpoint';
import { useState, useEffect } from 'react';

export const useLoader = () => {
  const pathname = usePathname();
  const breakpoint = useBreakpoint();
  const [isLoaded, setIsLoaded] = useState(false);

  const isHome = pathname === '/';
  const isBlog = pathname === '/blog';

  useEffect(() => {
    const getImagesToLoad = () => {
      const images = ['/images/svgIcons/logo.svg'];

      if (isHome) {
        switch (breakpoint) {
          case 'mobile':
            images.push(
              '/images/home/mobileGirlHero.webp',
              '/images/home/mobileOverlay.webp'
            );
            break;
          case 'tablet':
            images.push(
              '/images/home/tabletGirlHero.webp',
              '/images/home/tabletOverlay.webp'
            );
            break;
          case 'desktop':
            images.push('/images/home/desktopGirlHero.webp');
            break;
        }
      } else if (isBlog) {
        switch (breakpoint) {
          case 'mobile':
            images.push('/images/blog/mobile-blog-cta.webp');
            break;
          case 'tablet':
            images.push('/images/blog/mobile-blog-cta.webp');
            break;
          case 'desktop':
            images.push('/images/blog/mobile-blog-cta.webp');
            break;
        }
      }

      return images;
    };

    const images = getImagesToLoad();
    let loadedImages = 0;
    const totalImages = images.length;

    const handleImageLoad = (src: string) => {
      loadedImages++;
      console.log(`Image loaded: ${src}, ${loadedImages}/${totalImages}`);
      if (loadedImages === totalImages) {
        console.log('useLoader: All images loaded');
        setIsLoaded(true);
      }
    };

    const handleImageError = (src: string) => {
      console.error(`Image failed to load: ${src}`);
      loadedImages++;
      if (loadedImages === totalImages) {
        console.log('useLoader: All images processed (with errors)');
        setIsLoaded(true);
      }
    };

    const preloadImages = () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => handleImageLoad(src);
        img.onerror = () => handleImageError(src);
      });
    };

    setIsLoaded(false);

    if (document.readyState === 'complete' && totalImages === 0) {
      console.log('useLoader: No images to preload, document complete');
      setIsLoaded(true);
    } else {
      preloadImages();
    }

    const minLoaderTime = setTimeout(() => {
      if (loadedImages === totalImages) {
        setIsLoaded(true);
      }
    }, 1000);

    return () => {
      clearTimeout(minLoaderTime);
      console.log('useLoader: Cleanup');
    };
  }, [pathname, breakpoint]);

  return { isLoaded };
};
