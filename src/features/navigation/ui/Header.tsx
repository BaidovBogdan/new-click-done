import {
  isForgotPasswordAtom,
  isLoginAtom,
  registerStepAtom,
  forgotPasswordStepAtom,
} from '@/app/store/atoms';
import { svgLogo } from '@/shared/ui';
import { Button } from 'antd';
import { useAtom } from 'jotai';

export default function Header() {
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);
  const [, setRegisterStep] = useAtom(registerStepAtom);
  const [, setIsForgotPassword] = useAtom(isForgotPasswordAtom);
  const [, setForgotPasswordStep] = useAtom(forgotPasswordStepAtom);
  const handleChangeLogin = () => {
    setForgotPasswordStep(1);
    setRegisterStep(1);
    setIsLogin(prev => !prev);
    setIsForgotPassword(false);
  };
  return (
    <header>
      <div className="flex items-center justify-between lg:max-w-[85%] mx-auto">
        <div className="flex items-center gap-1">
          {svgLogo}
          <span className="text-2xl font-medium">ClickDone</span>
        </div>
        <div>
          <Button
            style={{
              borderColor: '#D9D9D9',
              color: '#1D1D1FE5',
              borderRadius: '10px',
              borderWidth: '1px',
              width: 85,
              height: 40,
            }}
            className="active:!bg-gray-200 hover:!bg-gray-100"
            onClick={handleChangeLogin}
          >
            <span className="TextFS font-medium">
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
