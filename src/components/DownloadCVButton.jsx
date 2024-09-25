import React from 'react';
import { Icon } from '@iconify/react'; // Assuming you are using iconify for icons

const DownloadCVButton = ({ btnText, btnUrl }) => {
  return (
    <a
      href={btnUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="px-btn"
    >
      <span>{btnText}</span>{' '}
      <i>
        <Icon icon="bi:arrow-right" />
      </i>
    </a>
  );
};

export default DownloadCVButton;
