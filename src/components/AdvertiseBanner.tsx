import React from 'react';
import './AdvertiseBanner.css';

const AdvertiseBanner: React.FC = () => {
  return (
    <div className="advertise-banner">
      <a href="mumuck.com" target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/images/advertisebanners/adversise.png`}
          alt="광고 배너"
          className="advertise-image"
        />
      </a>
    </div>
  );
};

export default AdvertiseBanner;
