import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  onAllLoaded?: () => void;
}

export const useImagePreloader = ({
  images,
  onAllLoaded,
}: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src));
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        // Все равно считаем "загруженным" чтобы не блокировать UI
        setLoadedImages(prev => new Set(prev).add(src));
        resolve();
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    const loadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage));
        setIsAllLoaded(true);
        onAllLoaded?.();
      } catch (error) {
        console.error('Error loading images:', error);
        setIsAllLoaded(true);
        onAllLoaded?.();
      }
    };

    loadAllImages();
  }, [images, preloadImage, onAllLoaded]);

  return {
    isAllLoaded,
    loadedImages,
    loadedCount: loadedImages.size,
    totalCount: images.length,
  };
};
