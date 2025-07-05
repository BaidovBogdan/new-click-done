'use client';

import { useState } from 'react';
import { Button } from 'antd';
import { StepIndicator } from '@/shared/ui';

export default function CreateOrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
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

  return (
    <div className='flex flex-col h-screen'>
      {/* Step Indicator */}

      <div className='mt-10'>
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Step Content */}
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>Шаг {currentStep}</h2>
          <div className='text-lg text-gray-600'>
            {currentStep === 1 && 'Выберите категорию услуги'}
            {currentStep === 2 && 'Опишите детали задания'}
            {currentStep === 3 && 'Укажите дату и время'}
            {currentStep === 4 && 'Выберите исполнителя'}
            {currentStep === 5 && 'Подтвердите заказ'}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between pt-4'>
        <Button
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
          size='large'
        >
          Назад
        </Button>
        <Button
          type='primary'
          onClick={handleNextStep}
          disabled={currentStep === totalSteps}
          size='large'
        >
          {currentStep === totalSteps ? 'Завершить' : 'Далее'}
        </Button>
      </div>
    </div>
  );
}
