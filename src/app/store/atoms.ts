import { atomWithStorage } from 'jotai/utils';

export const isLoginAtom = atomWithStorage('isLogin', true);

export const isEmailAtom = atomWithStorage('isEmail', true);

export const isForgotPasswordAtom = atomWithStorage('isForgotPassword', false);

export const registerStepAtom = atomWithStorage('registerStep', 1);

export const forgotPasswordStepAtom = atomWithStorage('forgotPasswordStep', 1);
