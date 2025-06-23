'use client';

import { Form, Input, Select } from 'antd';
import { ForgotPasswordFormProps } from '../';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import {
  countryOptions,
  PasswordConditions,
  PasswordConditionsCard,
} from './RegisterForm';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

export default function ForgotPasswordForm({
  isEmail,
  setForgotPasswordStep,
  forgotPasswordStep,
}: ForgotPasswordFormProps) {
  const [selectedCountry, setSelectedCountry] = useState('+27');
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [otpValue, setOtpValue] = useState<string | undefined>();
  const [passwordConditions, setPasswordConditions] =
    useState<PasswordConditions>({
      length: false,
      hasUpperLower: false,
      hasNumberOrSymbol: false,
      noEmail: false,
      isNotCommon: false,
    });

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
      setForgotPasswordStep(3);
    }
  }, [otpValue, setForgotPasswordStep]);

  return (
    <div className="mt-5 lg:mt-2">
      <Form layout="vertical">
        {forgotPasswordStep === 1 &&
          (isEmail ? (
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
          ))}

        {forgotPasswordStep === 2 && (
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
        )}

        {forgotPasswordStep === 3 && (
          <>
            <Form.Item
              name="password"
              label="Enter a new password"
              validateStatus="error"
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
                placeholder="New password"
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              label="Confirm your new password"
              validateStatus="error"
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
                placeholder="Confirm password"
              />
            </Form.Item>
            <PasswordConditionsCard conditions={passwordConditions} />
          </>
        )}
      </Form>
    </div>
  );
}
