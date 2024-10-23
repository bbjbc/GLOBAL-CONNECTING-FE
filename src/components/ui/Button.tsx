import { ButtonHTMLAttributes } from 'react';

import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses = cn(
    'px-4 py-2 rounded-md font-semibold transition-all duration-200',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
  );

  const variantClasses = {
    primary:
      'bg-blue-500 text-white hover:bg-blue-600 active:transform active:scale-[0.98] disabled:hover:bg-blue-500',
    secondary:
      'bg-gray-300 text-gray-800 hover:bg-gray-400 active:transform active:scale-[0.98] disabled:hover:bg-gray-300',
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
