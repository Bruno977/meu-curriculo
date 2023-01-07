import React from 'react';
import { DefaultTitle } from './styles';
interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <DefaultTitle>{children}</DefaultTitle>;
}

export default Title;
