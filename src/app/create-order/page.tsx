'use client';

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { StepIndicator } from '@/shared/ui';

const ArrowRightOutlined = () => {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.66602 10H16.3327M16.3327 10L11.3327 5M16.3327 10L11.3327 15'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const ArrowLeftOutlined = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8327 10H4.16602M4.16602 10L9.16602 15M4.16602 10L9.16602 5'
        stroke='#1D1D1F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default function CreateOrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showFixedIndicator, setShowFixedIndicator] = useState(false);
  const totalSteps = 5;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFixedIndicator(scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Asd = () => {
    return (
      <div className='flex flex-col gap-56'>
        <span>1123123</span>
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
        <br />
        <span>1123123</span>
      </div>
    );
  };

  return (
    <div className='flex flex-col'>
      {/* Static Step Indicator */}
      <div className='mt-10'>
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Fixed Step Indicator (appears on scroll) */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white pt-4 pb-4 px-4 z-40 shadow-sm transition-all duration-300 ${
          showFixedIndicator
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Step Content */}
      <div className='flex items-center justify-center mt-10'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>Шаг {currentStep}</h2>
          <div className='text-lg text-gray-600'>
            {currentStep === 1 && <Asd />}
            {currentStep === 2 && 'Опишите детали задания'}
            {currentStep === 3 && 'Укажите дату и время'}
            {currentStep === 4 && 'Выберите исполнителя'}
            {currentStep === 5 && 'Подтвердите заказ'}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-18 pb-5 h-36'>
        <div className='flex justify-between w-full gap-2 px-4'>
          <Button
            type='primary'
            onClick={handlePreviousStep}
            disabled={currentStep === 1}
            className='!h-12 flex-1 !bg-white !text-[#1D1D1FE5] !rounded-xl'
          >
            <div className='flex items-center justify-center gap-2'>
              <ArrowLeftOutlined />
              Previous Step
            </div>
          </Button>
          <Button
            type='primary'
            onClick={handleNextStep}
            disabled={currentStep === totalSteps}
            className='!h-12 flex-1 !bg-[#FF564F] !text-white !rounded-xl'
          >
            <div className='flex items-center justify-center gap-2'>
              Next Step
              <ArrowRightOutlined />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
