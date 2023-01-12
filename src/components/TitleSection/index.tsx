import React from 'react';
import { Title } from './styles';

interface TitleSectionProps {
  children: React.ReactNode;
}

function TitleSection({ children }: TitleSectionProps) {
  return <Title>{children}</Title>;
}

export default TitleSection;
