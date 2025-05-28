import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import FoodBanner from '../../components/FoodBanner';
import introAnim from './IntroData/Intro.json';
import SiteInfo from '../../components/SiteInfo/SiteInfo';
import AdvertiseBanner from '../../components/AdvertiseBanner';
import './IntroPage.css';

const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-page">
      <FoodBanner />

      <div className="intro-content">
        <h1>
          <span className="intro-icon-lottie">
            <Lottie animationData={introAnim} loop={true} />
          </span>
          오늘 뭐 먹지?
        </h1>
        <p className="subtitle">매일 반복되는 고민, 저희가 해결해드릴게요</p>

        <div className="intro-description">
          <p>
            Mumuck은 당신이 매일 겪는 '메뉴 고민'을 게임처럼 즐겁게 해결해주는 플랫폼입니다.
          </p>
          <p>
            메뉴 추천 게임을 통해 오늘의 점심이나 저녁을 쉽게 결정하고,
            치킨, 피자, 햄버거 등 다양한 프랜차이즈 브랜드의 인기 티어표도 확인해보세요.
          </p>
          <p>
            음식 선택이 어려운 순간, Mumuck에서 쉽고 재미있게 메뉴를 찾아보세요!
          </p>
        </div>

        <button className="start-btn" onClick={() => navigate('/game')}>
          추천게임 시작
        </button>
      </div>

      <AdvertiseBanner />

      <SiteInfo />
    </div>
  );
};

export default IntroPage;
