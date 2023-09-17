import React from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const title = tv({
  base: 'text-white uppercase ',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-lg font-bold',
      lg: 'text-3xl font-black',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

type TitleProps = React.PropsWithChildren &
  VariantProps<typeof title> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

export function Title({ children, size, as: Element = 'h1' }: TitleProps) {
  return <Element className={title({ size })}>{children}</Element>;
}
