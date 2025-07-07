'use client';

import { FilterButtonProps } from '@/shared/model/types/blog';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Компонент частицы
const Particle = ({
  index,
  onComplete,
}: {
  index: number;
  onComplete: () => void;
}) => {
  const angle = (index * 360) / 10; // 8 частиц по кругу
  const distance = 60 + Math.random() * 70; // случайное расстояние
  const x = Math.cos((angle * Math.PI) / 180) * distance;
  const y = Math.sin((angle * Math.PI) / 180) * distance;

  return (
    <motion.div
      className='absolute w-1 h-1 bg-[#1A1A1A] rounded-full pointer-events-none'
      style={{
        left: '50%',
        top: '50%',
        zIndex: 50,
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      animate={{
        x: x,
        y: y,
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 2.5,
        ease: 'easeOut',
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export default function FilterButton({
  isActive,
  children,
  onClick,
}: FilterButtonProps) {
  const activeColor = '#1A1A1A';
  const inactiveColor = '#ffffff';
  const [showParticles, setShowParticles] = useState(false);
  const [particleKey, setParticleKey] = useState(0);
  const prevActiveRef = useRef(isActive);

  // Отслеживаем изменение с активного на неактивное
  useEffect(() => {
    if (prevActiveRef.current && !isActive) {
      // Была активна, стала неактивна - запускаем частицы
      setShowParticles(true);
      setParticleKey(prev => prev + 1);
    }
    prevActiveRef.current = isActive;
  }, [isActive]);

  const handleParticleComplete = () => {
    setShowParticles(false);
  };

  return (
    <div className='relative'>
      <motion.div
        className='font-normal TextFSLG rounded-lg px-3 py-2 cursor-pointer select-none overflow-hidden relative'
        onClick={onClick}
        style={{
          backgroundColor: inactiveColor,
          backgroundImage: `linear-gradient(50deg, ${activeColor} 50%, transparent 50%)`,
          backgroundSize: '299.6% 100%',
          backgroundPosition: isActive ? '0% 0%' : '100% 0%',
          color: isActive ? '#ffffff' : '#1D1D1FA6',
        }}
        animate={{
          backgroundPosition: isActive ? '0% 0%' : '100% 0%',
          color: isActive ? '#ffffff' : '#1D1D1FA6',
        }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        {children}
      </motion.div>

      {/* Частицы */}
      <AnimatePresence>
        {showParticles && (
          <div key={particleKey}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Particle
                key={`${particleKey}-${index}`}
                index={index}
                onComplete={index === 0 ? handleParticleComplete : () => {}}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
