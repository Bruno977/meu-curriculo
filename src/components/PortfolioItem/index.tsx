import React from 'react';
import { Project } from './styles';

interface PortfolioItemProps {
  project: string;
  href: string;
}

function PortfolioItem({ project, href }: PortfolioItemProps) {
  return (
    <Project>
      <a href={href} target="_blank" rel="noreferrer">
        <p>{project}</p>
      </a>
    </Project>
  );
}

export default PortfolioItem;
