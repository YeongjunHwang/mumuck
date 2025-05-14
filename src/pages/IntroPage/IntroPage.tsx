import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import FoodBanner from '../../components/FoodBanner';
import introAnim from './IntroData/Intro.json';
import SiteInfo from '../../components/SiteInfo/SiteInfo';
import './IntroPage.css';
import AdBanner from '../../components/AdBanner';

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
        <button className="start-btn" onClick={() => navigate('/game')}>
          추천받기 시작
        </button>
      </div>
      <div className="intro-ad-wrapper">
       <AdBanner slot="5917717645" />
      </div>
      <SiteInfo />
    </div>
  );
};

export default IntroPage;
