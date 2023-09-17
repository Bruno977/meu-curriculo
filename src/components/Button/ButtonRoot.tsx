import React from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: `inline-flex items-center gap-2 rounded-full transition h-11 px-6 uppercase text-sm tracking-wider font-semibold border-2
      `,
  variants: {
    color: {
      primary:
        'bg-emerald-700 text-white border-emerald-700 hover:bg-transparent hover:text-emerald-500',
      outline:
        'bg-transparent border-emerald-700 text-emerald-500 hover:bg-emerald-700 hover:text-white',
    },
    size: {
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type ButtonRootProps = React.ComponentProps<'button'> &
  VariantProps<typeof button>;

export function ButtonRoot({
  children,
  size,
  color,
  disabled,
  ...rest
}: ButtonRootProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={twMerge(
        disabled ? 'opacity-80 pointer-events-none' : '',
        button({ size, color })
      )}
    >
      {children}
    </button>
  );
}
