'use client';

import { ForgotPasswordForm, LoginForm, RegisterForm } from '@/features/auth';
import { Button, Divider, message } from 'antd';
import {
  ButtonAuth,
  phoneIcon,
  facebookIcon,
  googleIcon,
  backArrowIcon,
} from '@/shared/ui';
import { MailOutlined } from '@ant-design/icons';
import { useAtom } from 'jotai';
import {
  isEmailAtom,
  isForgotPasswordAtom,
  isLoginAtom,
  registerStepAtom,
  forgotPasswordStepAtom,
} from '@/app/store/atoms';
import Image from 'next/image';

export default function AuthPage() {
  const [isLogin] = useAtom(isLoginAtom);
  const [isEmail, setIsEmail] = useAtom(isEmailAtom);
  const [isForgotPassword, setIsForgotPassword] = useAtom(isForgotPasswordAtom);
  const [registerStep, setRegisterStep] = useAtom(registerStepAtom);
  const [forgotPasswordStep, setForgotPasswordStep] = useAtom(
    forgotPasswordStepAtom
  );
  const handleContinue = () => {
    if (isLogin && !isForgotPassword) {
      message.success('Success login');
    } else if (!isLogin && !isForgotPassword && registerStep === 1) {
      setRegisterStep(2);
    } else if (!isLogin && !isForgotPassword && registerStep === 2) {
      setRegisterStep(3);
    } else if (!isLogin && !isForgotPassword && registerStep === 3) {
      setRegisterStep(4);
    } else if (!isLogin && !isForgotPassword && registerStep === 4) {
      setRegisterStep(5);
    } else if (!isLogin && !isForgotPassword && registerStep === 5) {
      message.success('Success register');
    } else if (isForgotPassword && forgotPasswordStep === 1) {
      setForgotPasswordStep(2);
    } else if (isForgotPassword && forgotPasswordStep === 2) {
      setForgotPasswordStep(3);
    } else if (isForgotPassword && forgotPasswordStep === 3) {
      message.success('Success change password');
    }
  };

  return (
    <div className="mt-10 p-2 flex justify-center">
      <div className="lg:flex lg:justify-between lg:max-w-[85%] w-full">
        <div className="lg:w-[37.2%] lg:flex lg:flex-col lg:justify-center">
          <div>
            {(registerStep === 1 || isLogin) && !isForgotPassword && (
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="HeadingFS2 font-medium text-[#1D1D1FE5]">
                  {isLogin ? 'Sign in to ' : 'Sigh up in '}
                  <span className="text-[#FF7701]">ClickDone</span>
                </span>
                <span className="HeadingFS4 font-medium text-[#1D1D1F73] tracking-[-0.03em]">
                  Here all people will help you
                </span>
              </div>
            )}
            {registerStep === 2 && !isLogin && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-start">
                  <Button
                    style={{ width: 40, height: 40 }}
                    onClick={() => setRegisterStep(1)}
                  >
                    <div style={{ width: 24, height: 24 }}>{backArrowIcon}</div>
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                    Enter the confirmation code
                  </span>
                  <span className="TextFS text-[#1D1D1FA6] font-normal">
                    We’ve sent an SMS with a code to your number. Enter it below
                    to continue
                  </span>
                </div>
              </div>
            )}
            {registerStep === 3 && !isLogin && (
              <div className="flex flex-col gap-2">
                <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                  Let’s get to <span className="text-[#FF564F]">know you</span>
                </span>
                <span className="TextFS text-[#1D1D1FA6] font-normal tracking-[-0.06em]">
                  Add your name and password to create your account
                </span>
              </div>
            )}
            {registerStep === 4 && !isLogin && (
              <div className="flex flex-col gap-2">
                <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                  And last info...
                </span>
                <span className="TextFS text-[#1D1D1FA6] font-normal">
                  Add your birthday and location where you live{' '}
                </span>
              </div>
            )}
            {registerStep === 5 && !isLogin && (
              <div className="flex flex-col items-center justify-center gap-2 lg:hidden">
                <Image
                  src="/images/Frame2131328412.webp"
                  alt="auth-pic"
                  width={350}
                  height={350}
                  quality={100}
                />
              </div>
            )}

            {forgotPasswordStep === 1 && isForgotPassword && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-start">
                  <Button
                    style={{ width: 40, height: 40 }}
                    onClick={() => {
                      setForgotPasswordStep(1);
                      setIsForgotPassword(false);
                    }}
                  >
                    <div style={{ width: 24, height: 24 }}>{backArrowIcon}</div>
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                    Password recovery
                  </span>
                  <span className="TextFS text-[#1D1D1FA6] font-normal">
                    Enter your phone number{' '}
                  </span>
                </div>
              </div>
            )}

            {forgotPasswordStep === 2 && isForgotPassword && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-start">
                  <Button
                    style={{ width: 40, height: 40 }}
                    onClick={() => setForgotPasswordStep(1)}
                  >
                    <div style={{ width: 24, height: 24 }}>{backArrowIcon}</div>
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                    Enter the confirmation code
                  </span>
                  <span className="TextFS text-[#1D1D1FA6] font-normal">
                    We’ve sent an SMS with a code to your number. Enter it below
                    to continue
                  </span>
                </div>
              </div>
            )}

            {forgotPasswordStep === 3 && isForgotPassword && (
              <div className="flex flex-col gap-2">
                <span className="HeadingFS3 font-medium text-[#1D1D1FE5]">
                  Set a password
                </span>
                <span className="TextFS text-[#1D1D1FA6] font-normal">
                  Use at least 8 characters. Include numbers and special
                  characters
                </span>
              </div>
            )}
            {isLogin && !isForgotPassword && <LoginForm isEmail={isEmail} />}

            {!isLogin && !isForgotPassword && (
              <RegisterForm
                isEmail={isEmail}
                registerStep={registerStep}
                setRegisterStep={setRegisterStep}
              />
            )}

            {isForgotPassword && (
              <ForgotPasswordForm
                isEmail={isEmail}
                setForgotPasswordStep={setForgotPasswordStep}
                forgotPasswordStep={forgotPasswordStep}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full mt-5 lg:mt-3">
            {(registerStep === 1 ||
              registerStep === 3 ||
              registerStep === 4 ||
              registerStep === 5) &&
              forgotPasswordStep !== 2 && (
                <Button
                  className="w-full"
                  style={{
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FF564F',
                    color: '#fff',
                  }}
                  onClick={handleContinue}
                >
                  <span className="TextFSLG font-medium">Continue</span>
                </Button>
              )}
            {registerStep === 5 && (
              <Button
                className="w-full mt-2 !border-0 !shadow-none"
                variant="text"
              >
                <span className="TextFSLG font-medium text-[#1D1D1FA6] tracking-[-0.03em]">
                  Skip for now
                </span>
              </Button>
            )}
            {isLogin && registerStep === 1 && !isForgotPassword && (
              <div
                className="mt-2"
                onClick={() => setIsForgotPassword(true)}
                style={{ cursor: 'pointer' }}
              >
                <span className="TextFSLG text-[#1D1D1FE5] font-medium hover:text-[#FF7701] active:text-[#FF7701] cursor-pointer active:underline">
                  Forgot password?
                </span>
              </div>
            )}
            {(registerStep === 1 || isLogin) && !isForgotPassword && (
              <>
                <Divider plain>
                  <span className="font-normal TextFS">Or</span>
                </Divider>
                <div className="flex flex-col items-center justify-center gap-3 w-full">
                  {isEmail ? (
                    <ButtonAuth
                      icon={phoneIcon}
                      onClick={() => setIsEmail(false)}
                    >
                      Continue with phone number
                    </ButtonAuth>
                  ) : (
                    <ButtonAuth
                      icon={<MailOutlined />}
                      onClick={() => setIsEmail(true)}
                    >
                      Continue with email
                    </ButtonAuth>
                  )}
                  <ButtonAuth icon={facebookIcon}>
                    Sign up with Facebook
                  </ButtonAuth>
                  <ButtonAuth icon={googleIcon}>
                    Sign up with Google{' '}
                  </ButtonAuth>
                  <span className="TextFSSM text-[#1D1D1FA6] text-center">
                    By signing up, you agree to the{' '}
                    <span className="underline">Terms of Use,</span>{' '}
                    <span className="underline">Privacy Notice,</span> and{' '}
                    <span className="underline">Cookie Notice</span>
                  </span>
                </div>{' '}
              </>
            )}
          </div>
        </div>
        <div className="w-[52.6%] h-[calc(100%+33px)] hidden lg:block">
          {(registerStep === 1 || registerStep === 2 || isLogin) && (
            <Image
              src="/images/authPic.webp"
              alt="auth-pic"
              width={600}
              height={680}
              quality={85}
              className="ml-auto"
            />
          )}
          {(registerStep === 3 || registerStep === 4) && (
            <Image
              src="/images/4_reg.webp"
              alt="auth-pic"
              width={600}
              height={680}
              quality={85}
              className="ml-auto"
            />
          )}
          {registerStep === 5 && (
            <Image
              src="/images/7_reg.webp"
              alt="auth-pic"
              width={600}
              height={680}
              quality={85}
              className="ml-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}
