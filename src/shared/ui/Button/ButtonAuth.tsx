import { FC } from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

interface ButtonProps extends AntButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ButtonAuth: FC<ButtonProps> = ({
  children,
  className,
  icon,
  ...props
}) => (
  <AntButton
    icon={icon || null}
    className={`w-full ${className || ''}`}
    style={{
      height: '48px',
      borderRadius: '12px',
    }}
    {...props}
  >
    <span className="TextFSLG font-medium">{children}</span>
  </AntButton>
);

export default ButtonAuth;
