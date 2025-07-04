'use client';

import { useState, useEffect } from 'react';
import { useImagePreloader } from './useImagePreloader';

// Функция для определения только самых критичных изображений (Hero + Girl)
const getCriticalImages = () => {
  if (typeof window === 'undefined') return [];

  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1280;

  const heroImages = [
    '/images/svgIcons/securityMobileClients.svg',
    '/images/svgIcons/mobileCheck.svg',
    '/images/svgIcons/mobileSupport.svg',
    '/images/svgIcons/mobilePayment.svg',
    '/images/svgIcons/mobileSearchHero.svg',
    isMobile
      ? '/images/home/mobileInstrument.webp'
      : '/images/home/tabletInstrument.webp',
    isMobile
      ? '/images/svgIcons/mobileServices.svg'
      : '/images/svgIcons/laptopServices.svg',
  ];

  const girlImages = ['/images/home/avatarNegr.webp'];

  if (isMobile) {
    girlImages.push('/images/home/mobileGirlHero.webp');
  } else if (isTablet) {
    girlImages.push('/images/home/tabletGirlHero.webp');
  } else {
    girlImages.push('/images/home/desktopGirlHero.webp');
  }

  // SubCategory изображения теперь загружаются позже через lazy loading
  // Оставляем только критичные изображения для первого экрана
  return [...heroImages, ...girlImages];
};

export const useComponentsReady = () => {
  const [isScreenSizeDetected, setIsScreenSizeDetected] = useState(false);
  const [criticalImages, setCriticalImages] = useState<string[]>([]);

  // Ждем определения размера экрана
  useEffect(() => {
    const detectScreenSize = () => {
      setCriticalImages(getCriticalImages());
      setIsScreenSizeDetected(true);
    };

    if (typeof window !== 'undefined') {
      detectScreenSize();
      window.addEventListener('resize', detectScreenSize);
      return () => window.removeEventListener('resize', detectScreenSize);
    }
  }, []);

  const { isAllLoaded: imagesLoaded } = useImagePreloader({
    images: criticalImages,
  });

  const isReady = isScreenSizeDetected && imagesLoaded;

  return {
    isReady,
    isScreenSizeDetected,
    imagesLoaded,
    criticalImages,
  };
};
