import { ButtonHTMLAttributes, FormEvent } from 'react';
import style from '../Button/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inverse?: boolean;
  size?: "large" | "small";
  variant?: "info" | "danger";
  onClick?: (event: FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, inverse, size, variant, ...rest }: ButtonProps) => {
  const buttonClasses = [
    style.button,
    inverse ? style.inverse : '',
    size ? style[size] : '',
    variant ? style[variant] : '',
  ].join(' ').trim();

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
