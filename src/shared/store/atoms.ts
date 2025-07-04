import { atom } from 'jotai';

export const isLoginAtom = atom<boolean>(true);

export const isEmailAtom = atom<boolean>(true);

export const isForgotPasswordAtom = atom<boolean>(false);

export const registerStepAtom = atom<number>(1);

export const forgotPasswordStepAtom = atom<number>(1);

export const isOverlayMobileHeaderAtom = atom<boolean>(false);
