import React from 'react';
import { Container, Bar } from './styles';

interface ProgressBarProps {
  skill: string;
  progress: string;
}

function ProgressBar({ skill, progress }: ProgressBarProps) {
  return (
    <Container>
      <p>{skill}</p>
      <Bar progress={progress}>
        <span>{progress}</span>
      </Bar>
    </Container>
  );
}

export default ProgressBar;
