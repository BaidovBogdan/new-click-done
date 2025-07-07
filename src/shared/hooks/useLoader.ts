'use client';

import { useState, useEffect } from 'react';

export const useLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Прелоад критичных изображений для overlay
    const preloadImages = () => {
      const images = [
        '/images/svgIcons/logo.svg',
        '/images/home/mobileGirlHero.webp',
        '/images/home/mobileLineGirl.webp',
        '/images/home/desktopGirlHero.webp',
        '/images/home/desktopLineGirl.webp',
        '/images/home/tabletGirlHero.webp',
        '/images/home/tabletLineGirl.webp',
        '/images/home/tabletOverlay.webp',
        '/images/home/mobileOverlay.webp',
      ];

      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Проверяем состояние загрузки
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      // Если страница уже загружена
      setIsLoaded(true);
    } else {
      // Ждем полной загрузки
      window.addEventListener('load', handleLoad);
    }

    // Запускаем прелоад
    preloadImages();

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoaded };
};
