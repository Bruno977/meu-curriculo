'use client';
import React from 'react';
import { Button } from './Button';
import { InboxArrowDownIcon } from '@heroicons/react/20/solid';

export function DownloadCv() {
  function downloadCV() {
    fetch('curriculo.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'curriculo.pdf';
        alink.click();
      });
    });
  }
  return (
    <Button.root onClick={downloadCV}>
      <Button.icon icon={InboxArrowDownIcon} />
      Download CV
    </Button.root>
  );
}
