'use client';

import { Form, Input, Select } from 'antd';
import { LoginFormProps } from '../model/types';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import debounce from 'lodash.debounce';

const countryOptions = [
  {
    value: '+27',
    label: (
      <div
        style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}
        className="TextFSLG font-normal"
      >
        <div style={{ marginRight: -4, marginTop: -3 }}>
          <img src="/images/svgIcons/flag.svg" alt="flag" />
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
            iconRender={visible =>
              visible ? (
                <img
                  src="/images/svgIcons/passwordHide.svg"
                  alt="passwordHide"
                />
              ) : (
                <img
                  src="/images/svgIcons/passwordOpen.svg"
                  alt="passwordOpen"
                />
              )
            }
            style={{ height: '48px', borderRadius: '12px' }}
            placeholder="Enter password"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
