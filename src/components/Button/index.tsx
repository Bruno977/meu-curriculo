import React from 'react';
import { ButtonDefault, Router } from './styles';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'outline' | 'solid';
  children: React.ReactNode;
}

export function Button({ variant = 'solid', children, ...props }: ButtonProps) {
  return (
    <ButtonDefault variant={variant} {...props}>
      {children}
    </ButtonDefault>
  );
}

interface LinkProps {
  variant?: 'outline' | 'solid';
  path: string;
  children: React.ReactNode;
}
export function ButtonLink({
  variant = 'solid',
  children,
  path,
  ...props
}: LinkProps) {
  return (
    <Router to={path} variant={variant} {...props}>
      {children}
    </Router>
  );
}
