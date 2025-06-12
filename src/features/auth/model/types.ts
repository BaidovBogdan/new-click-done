export interface LoginFormProps {
  isEmail: boolean;
}

export interface RegisterFormProps {
  isEmail: boolean;
  registerStep: number;
  setRegisterStep: (registerStep: number) => void;
}

export interface ForgotPasswordFormProps {
  isEmail: boolean;
  forgotPasswordStep: number;
  setForgotPasswordStep: (forgotPasswordStep: number) => void;
}
