'use client';

import { DatePicker, Form, Input, Select, Divider, ConfigProvider } from 'antd';
import { LoginFormProps, RegisterFormProps } from '../model/types';
import { useState, useEffect, useMemo } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import debounce from 'lodash.debounce';
import type { GetProps } from 'antd';
import {
  hidePassword,
  showPassword,
  svgDonePasswordConditions,
  svgErrorPasswordConditions,
  svgSearchSelect,
  svgLocationSelect,
} from '@/shared/ui';
import Image from 'next/image';

type OTPProps = GetProps<typeof Input.OTP>;

const Flag = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_493_4036)">
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill="#F0F0F0"
        />
        <path
          d="M2.34314 13.6569C-0.781047 10.5327 -0.781047 5.46736 2.34314 2.34314C2.34292 2.34348 6.95655 8.00001 6.95655 8.00001L2.34314 13.6569Z"
          fill="black"
        />
        <path
          d="M6.95609 7.99996L1.06059 4.01599C0.877812 4.33371 0.716625 4.66533 0.578125 5.00858L3.56278 7.99999L0.578219 10.9916C0.716594 11.3346 0.877625 11.666 1.06028 11.9835L6.95609 7.99996Z"
          fill="#FFDA44"
        />
        <path
          d="M15.9321 6.95654H6.95614L2.34289 2.34326C1.84577 2.84039 1.41386 3.40261 1.06086 4.01607L5.03708 8.00001L1.06055 11.9834C1.41355 12.5971 1.84564 13.1595 2.34289 13.6567L6.95614 9.04348H15.9321C15.9766 8.70192 15.9998 8.35367 15.9998 8.00001C15.9998 7.64636 15.9766 7.29811 15.9321 6.95654Z"
          fill="#6DA544"
        />
        <path
          d="M3.12891 14.3461C4.47794 15.383 6.16659 15.9999 7.99959 15.9999C11.6958 15.9999 14.806 13.493 15.724 10.0869H7.38812L3.12891 14.3461Z"
          fill="#0052B4"
        />
        <path
          d="M15.724 5.91303C14.806 2.50691 11.6958 0 7.99959 0C6.16659 0 4.47794 0.616906 3.12891 1.65384L7.38809 5.91303H15.724Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_493_4036">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export interface PasswordConditions {
  length: boolean;
  hasUpperLower: boolean;
  hasNumberOrSymbol: boolean;
  noEmail: boolean;
  isNotCommon: boolean;
}

interface PasswordConditionsCardProps {
  conditions: PasswordConditions;
}

export const PasswordValidation = (
  password: string,
  email: string
): PasswordConditions => {
  const conditions: PasswordConditions = {
    length: password.length >= 8,
    hasUpperLower: /[a-z].*[A-Z]|[A-Z].*[a-z]/.test(password),
    hasNumberOrSymbol: /\d|[\W_]/.test(password),
    noEmail: email
      ? !password.toLowerCase().includes(email.toLowerCase())
      : true,
    isNotCommon: !['password123', 'admin123', '12345678'].includes(
      password.toLowerCase()
    ),
  };
  return conditions;
};

export const PasswordConditionsCard: React.FC<PasswordConditionsCardProps> = ({
  conditions,
}) => {
  return (
    <div>
      <ul className="text-sm space-y-1">
        <li
          className={`flex ${
            conditions.length ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className="mr-2 translate-y-[4.5px]">
            {conditions.length
              ? svgDonePasswordConditions
              : svgErrorPasswordConditions}
          </span>{' '}
          Contains at least 8 characters
        </li>
        <li
          className={`flex items-start ${
            conditions.hasUpperLower ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className="mr-2 translate-y-[4.5px]">
            {conditions.hasUpperLower
              ? svgDonePasswordConditions
              : svgErrorPasswordConditions}
          </span>
          Contains both lower (a-z) and upper case letters (A-Z)
        </li>
        <li
          className={`flex ${
            conditions.hasNumberOrSymbol ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className="mr-2 translate-y-[4.5px]">
            {conditions.hasNumberOrSymbol
              ? svgDonePasswordConditions
              : svgErrorPasswordConditions}
          </span>{' '}
          Contains at least one number (0-9) or a symbol
        </li>
        <li
          className={`flex ${
            conditions.noEmail ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className="mr-2 translate-y-[4.5px]">
            {conditions.noEmail
              ? svgDonePasswordConditions
              : svgErrorPasswordConditions}
          </span>{' '}
          Does not contain your email address
        </li>
        <li
          className={`flex ${
            conditions.isNotCommon ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span className="mr-2 translate-y-[4.5px]">
            {conditions.isNotCommon
              ? svgDonePasswordConditions
              : svgErrorPasswordConditions}
          </span>{' '}
          Is not commonly used
        </li>
      </ul>
    </div>
  );
};

export const countryOptions = [
  {
    value: '+27',
    label: (
      <div
        style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}
        className="TextFSLG font-normal"
      >
        <div style={{ marginRight: -4, marginTop: -3 }}>
          <Flag />
        </div>
        &nbsp;+27
      </div>
    ),
    country: 'South Africa',
  },
  { value: '+1', label: '+1', country: 'United States' },
  { value: '+44', label: '+44', country: 'United Kingdom' },
  { value: '+49', label: '+49', country: 'Germany' },
  { value: '+33', label: '+33', country: 'France' },
  { value: '+86', label: '+86', country: 'China' },
];

const checkIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3337 4L6.00033 11.3333L2.66699 8"
      stroke="#333333"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Add location options
const locationOptions = [
  { value: 'johannesburg', label: 'Johannesburg' },
  { value: 'cape_town', label: 'Cape Town' },
  { value: 'durban', label: 'Durban' },
];

export default function RegisterForm({
  isEmail,
  registerStep,
  setRegisterStep,
}: RegisterFormProps) {
  const [selectedCountry, setSelectedCountry] = useState('+27');
  const [value, setValue] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [otpValue, setOtpValue] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [passwordConditions, setPasswordConditions] =
    useState<PasswordConditions>({
      length: false,
      hasUpperLower: false,
      hasNumberOrSymbol: false,
      noEmail: false,
      isNotCommon: false,
    });
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Create debounced function for phone input
  const debouncedSetValue = debounce((val: string | undefined) => {
    setValue(val);
  }, 1150);

  useEffect(() => {
    debouncedSetValue(inputValue);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [inputValue]);

  const handlePhoneChange = (newValue: string | undefined) => {
    setInputValue(newValue);
  };

  const onChange: OTPProps['onChange'] = text => {
    console.log('onChange:', text);
  };

  const onInput: OTPProps['onInput'] = value => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  useEffect(() => {
    if (otpValue?.length === 4) {
      setRegisterStep(3);
    }
  }, [otpValue, setRegisterStep]);

  useEffect(() => {
    setPasswordConditions(
      PasswordValidation(password || '', isEmail ? 'email' : 'phone')
    );
  }, [password, isEmail]);

  // Create custom dropdown for location select
  const locationDropdownRender = (menu: React.ReactElement) => (
    <div className="custom-dropdown">
      <div className="p-2">
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ borderRadius: '12px', height: 48 }}
          prefix={<span className="mr-2">{svgSearchSelect}</span>}
        />
      </div>
      <Divider style={{ margin: '4px 0' }} />
      <div
        className="py-2 px-3 flex items-center cursor-pointer text-[#FF564F] hover:bg-gray-50"
        onClick={() => {
          // Handle "Use my location" click
          setSelectedLocation('current_location');
        }}
      >
        <span className="mr-2">{svgLocationSelect}</span>
        <span>Use my location</span>
      </div>
      {menu}
    </div>
  );

  // Filter location options based on search
  const filteredOptions = locationOptions.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Custom option rendering for location select
  const customOptionRender = (option: any, info: any) => {
    const isSelected = selectedLocation === option.value;
    const index = locationOptions.findIndex(o => o.value === option.value);
    const showDivider = index > 0 && index < locationOptions.length;

    return (
      <>
        {index > 0 && index < locationOptions.length && (
          <Divider style={{ margin: '0' }} />
        )}
        <div
          className={`py-2 px-3 flex justify-between items-center cursor-pointer ${
            isSelected ? 'text-[#333333] font-medium' : 'text-[#666666]'
          }`}
        >
          <span>{option.label}</span>
          {isSelected && <span>{checkIcon}</span>}
        </div>
      </>
    );
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 12,
        },
        components: {
          Select: {
            optionSelectedBg: '#F0F0F0',
          },
        },
      }}
    >
      <div className="mt-5 lg:mt-2">
        {registerStep === 1 && (
          <Form layout="vertical">
            {isEmail ? (
              <Form.Item
                name="email"
                label="Email"
                validateStatus="error"
                help="Enter your email"
                hasFeedback
              >
                <Input
                  style={{ height: '48px', borderRadius: '12px' }}
                  placeholder="Please enter your email"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="phone"
                label="Phone"
                validateStatus="error"
                help="Enter your phone"
              >
                <div style={{ position: 'relative' }}>
                  <Select
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    style={{
                      width: 80,
                      height: 32,
                      background: '#0000000F',
                      borderRadius: '8px',
                      border: 'none',
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: 'none',
                      paddingRight: -8,
                    }}
                    dropdownStyle={{ borderRadius: '12px', width: 90 }}
                    bordered={false}
                    options={countryOptions}
                  />
                  <PhoneInput
                    country="US"
                    maxLength={14}
                    value={inputValue}
                    onChange={handlePhoneChange}
                    placeholder="(415) 915-9293"
                    className="ant-input"
                    style={{
                      height: '48px',
                      borderRadius: '12px',
                      paddingLeft: 100,
                      width: '100%',
                      outline: 'none',
                      border: '1px solid #d9d9d9',
                    }}
                  />
                </div>
              </Form.Item>
            )}
          </Form>
        )}
        {registerStep === 2 && (
          <Form layout="vertical">
            <Form.Item
              name="otp"
              label="Verification code"
              validateStatus="error"
              help="The code you entered is incorrect. Please try again"
              hasFeedback
            >
              <Input.OTP
                length={4}
                {...sharedProps}
                value={otpValue}
                onChange={setOtpValue}
              />
            </Form.Item>
          </Form>
        )}
        {registerStep === 3 && (
          <Form layout="vertical">
            <Form.Item
              name="name"
              label="Full name"
              validateStatus="error"
              help="Please enter your full name"
              hasFeedback
            >
              <Input
                style={{ height: '48px', borderRadius: '12px' }}
                placeholder="Enter your name"
              />
            </Form.Item>
            {!isEmail ? (
              <Form.Item
                name="email"
                label="Email"
                validateStatus="error"
                help="Please enter a valid email address"
                hasFeedback
              >
                <Input
                  style={{ height: '48px', borderRadius: '12px' }}
                  placeholder="Please enter your email"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="phone"
                label="Phone"
                validateStatus="error"
                help="Please enter a valid phone number"
              >
                <div style={{ position: 'relative' }}>
                  <Select
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    style={{
                      width: 80,
                      height: 32,
                      background: '#0000000F',
                      borderRadius: '8px',
                      border: 'none',
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: 'none',
                      paddingRight: -8,
                    }}
                    dropdownStyle={{ borderRadius: '12px', width: 90 }}
                    bordered={false}
                    options={countryOptions}
                  />
                  <PhoneInput
                    country="US"
                    maxLength={14}
                    value={inputValue}
                    onChange={handlePhoneChange}
                    placeholder="(415) 915-9293"
                    className="ant-input"
                    style={{
                      height: '48px',
                      borderRadius: '12px',
                      paddingLeft: 100,
                      width: '100%',
                      outline: 'none',
                      border: '1px solid #d9d9d9',
                    }}
                  />
                </div>
              </Form.Item>
            )}
            <Form.Item name="password" label="Password" validateStatus="error">
              <Input.Password
                iconRender={visible => (visible ? hidePassword : showPassword)}
                style={{ height: '48px', borderRadius: '12px' }}
                placeholder="Enter password"
              />
            </Form.Item>
            <PasswordConditionsCard conditions={passwordConditions} />
          </Form>
        )}
        {registerStep === 4 && (
          <Form layout="vertical">
            <Form.Item
              name="birthday"
              label="Date of birthday"
              validateStatus="error"
              help="Please enter a valid date of birth"
              hasFeedback
            >
              <DatePicker
                style={{ height: '48px', borderRadius: '12px' }}
                className="!w-full"
                placeholder="ex 28.07.2002"
              />
            </Form.Item>
            <Form.Item name="location" label="Location">
              <div
                style={{ width: '100%', height: 48, borderRadius: 12 }}
                className="rounded-xl"
              >
                <Select
                  style={{ height: '48px' }}
                  className="!w-full"
                  placeholder="Select your location"
                  dropdownRender={locationDropdownRender}
                  options={filteredOptions}
                  optionRender={customOptionRender}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  dropdownStyle={{ borderRadius: '12px' }}
                />
              </div>
            </Form.Item>
          </Form>
        )}
        {registerStep === 5 && (
          <div className="flex flex-col gap-5">
            <Image
              src="/images/PasswordStrengthContainer.png"
              alt="asdasd"
              width={440}
              height={4}
            />
            <span className="HeadingFS2 font-medium text-[#1D1D1FE5] tracking-[-0.03em]">
              Find a specialist
            </span>
            <span className="TextFSLG text-[#1D1D1FE5] font-normal max-w-[280px] tracking-[-0.03em]">
              In the search or describe the task through “create request”
            </span>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
