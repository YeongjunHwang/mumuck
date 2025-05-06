import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import FoodBanner from '../components/FoodBanner';
import AdvertiseBanner from '../components/AdvertiseBanner';

import './IntroPage.css';

const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-page">
      <FoodBanner />
      <div className="intro-content">
        <h1><MdFastfood className="intro-icon" /> 오늘 뭐 먹지?</h1>
        <p className="subtitle">매일 반복되는 고민, 저희가 해결해드릴게요</p>
        <button className="start-btn" onClick={() => navigate('/game')}>
          추천받기 시작
        </button>
      </div>
      <AdvertiseBanner />
    </div>
  );
};

export default IntroPage;
