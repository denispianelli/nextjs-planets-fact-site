import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import clsx from 'clsx';

import styles from '@/app/ui/home.module.css';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

interface HeaderTabButtonProps {
  tab: string;
  onClick: (tab: string) => void;
  children: React.ReactNode;
  className?: string;
}

const HeaderTabButton: React.FC<HeaderTabButtonProps> = ({
  tab,
  onClick,
  children,
  className,
}) => {
  return (
    <button className={className} onClick={() => onClick(tab)} type="button">
      {children}
    </button>
  );
};

interface TabButtonProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
  planet: string;
  index: number;
}

const TabButton: React.FC<TabButtonProps> = ({
  onClick,
  isActive,
  label,
  planet,
  index,
}) => {
  const planetBg = `${planet}-bg`;
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        'h-[40px] w-[281px] border border-white/20 text-left lg:h-[48px] lg:w-[350px]',
        {
          [styles[planetBg]]: isActive,
          'hover:bg-[#313148]': !isActive,
        },
      )}
    >
      <span className="ml-[20px] mr-[17px] text-white/50">{`0${index}`}</span>{' '}
      {label}
    </button>
  );
};

export { Button, buttonVariants, HeaderTabButton, TabButton };
