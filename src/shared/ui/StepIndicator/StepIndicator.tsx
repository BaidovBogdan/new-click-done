'use client';

import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
  disabled?: boolean;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  onStepClick,
  disabled = false,
}: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          backgroundColor: '#52c41a',
          borderColor: '#52c41a',
          textColor: '#ffffff',
        };
      case 'current':
        return {
          backgroundColor: 'white',
          borderColor: '#1D1D1FE5',
          textColor: '#1D1D1FE5',
          borderWidth: '2px',
        };
      default:
        return {
          backgroundColor: 'white',
          borderColor: '#1D1D1F73',
          textColor: '#1D1D1F73',
        };
    }
  };

  const handleStepClick = (step: number) => {
    if (!disabled && onStepClick && step <= currentStep) {
      onStepClick(step);
    }
  };

  return (
    <div className='w-full h-6 flex justify-between'>
      {steps.map((step, index) => {
        const status = getStepStatus(step);
        const stepStyles = getStepStyles(status);
        const isClickable = !disabled && step <= currentStep && onStepClick;

        return (
          <div key={step} className='relative flex items-center'>
            <motion.div
              className={`
                relative w-8 h-8 rounded-full flex items-center justify-center border z-10
                ${isClickable ? 'cursor-pointer' : ''}
                transition-all duration-200
                ${isClickable ? 'hover:shadow-md' : ''}
              `}
              style={{
                backgroundColor: stepStyles.backgroundColor,
                borderColor: stepStyles.borderColor,
                borderWidth: stepStyles.borderWidth,
              }}
              onClick={() => handleStepClick(step)}
              whileHover={isClickable ? { scale: 1.1 } : {}}
              whileTap={isClickable ? { scale: 0.9 } : {}}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
            >
              {status === 'completed' ? (
                <motion.svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <motion.path
                    d='M5 13l4 4L19 7'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  />
                </motion.svg>
              ) : (
                <motion.span
                  className='!TextFSSM font-normal'
                  style={{ color: stepStyles.textColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                >
                  {step}
                </motion.span>
              )}

              {/* Current step pulse animation */}
              {status === 'current' && (
                <motion.div
                  className='absolute inset-0 rounded-full border-2'
                  style={{
                    borderColor: stepStyles.borderColor,
                    opacity: 0.3,
                  }}
                  animate={{
                    scale: [1, 1.3, 0.9, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.div>

            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div
                className='absolute left-9 top-1/2 w-full !h-[0.1px] bg-[#1D1D1F73] transform -translate-y-1/2 z-0 opacity-50'
                style={{ width: 'calc(100vw / 4 - 56px)' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
