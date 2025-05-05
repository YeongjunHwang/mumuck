import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';
import FoodBanner from '../components/FoodBanner';


const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-box">
      <FoodBanner />
      <h2>🍽️ 오늘 뭐 먹지?</h2>
      <p>당신의 메뉴 선택을 도와드릴게요!</p>
      <button className="start-btn" onClick={() => navigate('/select')}>
        추천받기 시작
      </button>
    </div>
  );
};

export default IntroPage;
