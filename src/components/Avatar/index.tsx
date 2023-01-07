import React from 'react';
import { ContentImage } from './styles';
import Profile from '../../assets/images/profile2c.png';

function Avatar() {
  return (
    <ContentImage>
      <img src={Profile} alt="Bruno Rodrigues" />
    </ContentImage>
  );
}

export default Avatar;
