'use client';

import { Form, Input, Select } from 'antd';
import { LoginFormProps } from '../model/types';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import debounce from 'lodash.debounce';

const showPassword = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.21967 2.21967C1.9534 2.48594 1.9292 2.9026 2.14705 3.19621L2.21967 3.28033L6.25424 7.3149C4.33225 8.66437 2.89577 10.6799 2.29888 13.0644C2.1983 13.4662 2.4425 13.8735 2.84431 13.9741C3.24613 14.0746 3.6534 13.8305 3.75399 13.4286C4.28346 11.3135 5.59112 9.53947 7.33416 8.39452L9.14379 10.2043C8.43628 10.9258 8 11.9143 8 13.0046C8 15.2138 9.79086 17.0046 12 17.0046C13.0904 17.0046 14.0788 16.5683 14.8004 15.8608L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0466 21.5141 22.0708 21.0974 21.8529 20.8038L21.7803 20.7197L15.6668 14.6055L15.668 14.604L14.4679 13.4061L11.598 10.5368L11.6 10.536L8.71877 7.65782L8.72 7.656L7.58672 6.52549L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967ZM10.2041 11.2655L13.7392 14.8006C13.2892 15.2364 12.6759 15.5046 12 15.5046C10.6193 15.5046 9.5 14.3853 9.5 13.0046C9.5 12.3287 9.76824 11.7154 10.2041 11.2655ZM12 5.5C10.9997 5.5 10.0291 5.64807 9.11109 5.925L10.3481 7.16119C10.8839 7.05532 11.4364 7 12 7C15.9231 7 19.3099 9.68026 20.2471 13.4332C20.3475 13.835 20.7546 14.0794 21.1565 13.9791C21.5584 13.8787 21.8028 13.4716 21.7024 13.0697C20.5994 8.65272 16.6155 5.5 12 5.5ZM12.1947 9.00928L15.996 12.81C15.8942 10.7531 14.2472 9.10764 12.1947 9.00928Z"
      fill="#1D1D1F"
      fillOpacity="0.45"
    />
  </svg>
);

const hidePassword = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9999 9.00462C14.209 9.00462 15.9999 10.7955 15.9999 13.0046C15.9999 15.2138 14.209 17.0046 11.9999 17.0046C9.79073 17.0046 7.99987 15.2138 7.99987 13.0046C7.99987 10.7955 9.79073 9.00462 11.9999 9.00462ZM11.9999 10.5046C10.6192 10.5046 9.49987 11.6239 9.49987 13.0046C9.49987 14.3853 10.6192 15.5046 11.9999 15.5046C13.3806 15.5046 14.4999 14.3853 14.4999 13.0046C14.4999 11.6239 13.3806 10.5046 11.9999 10.5046ZM11.9999 5.5C16.6134 5.5 20.596 8.65001 21.701 13.0644C21.8016 13.4662 21.5574 13.8735 21.1556 13.9741C20.7537 14.0746 20.3465 13.8305 20.2459 13.4286C19.307 9.67796 15.9212 7 11.9999 7C8.07681 7 4.68997 9.68026 3.75273 13.4332C3.65237 13.835 3.24523 14.0794 2.84336 13.9791C2.44149 13.8787 2.19707 13.4716 2.29743 13.0697C3.40052 8.65272 7.38436 5.5 11.9999 5.5Z"
      fill="#1D1D1F"
      fillOpacity="0.45"
    />
  </svg>
);

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

const countryOptions = [
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

export default function LoginForm({ isEmail }: LoginFormProps) {
  const [selectedCountry, setSelectedCountry] = useState('+27');
  const [value, setValue] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string | undefined>();

  // Create debounced function for phone input
  const debouncedSetValue = debounce((val: string | undefined) => {
    setValue(val);
  }, 5110);

  useEffect(() => {
    debouncedSetValue(inputValue);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [inputValue]);

  const handlePhoneChange = (newValue: string | undefined) => {
    setInputValue(newValue);
  };

  return (
    <div className="mt-5 lg:mt-2">
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
        <Form.Item
          name="password"
          label="Password"
          validateStatus="error"
          help="Enter your password"
        >
          <Input.Password
            iconRender={visible => (visible ? hidePassword : showPassword)}
            style={{ height: '48px', borderRadius: '12px' }}
            placeholder="Enter password"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
