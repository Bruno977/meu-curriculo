import React from 'react';

interface ButtonIconProps {
  icon: React.ElementType;
}

export function ButtonIcon({ icon: Element }: ButtonIconProps) {
  return <Element className="h-6 w-6" />;
}
