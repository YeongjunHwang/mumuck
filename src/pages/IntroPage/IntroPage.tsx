import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import FoodBanner from '../../components/FoodBanner';
import AdvertiseBanner from '../../components/AdvertiseBanner';
import introAnim from './IntroData/Intro.json';
import SiteInfo from '../../components/SiteInfo/SiteInfo';
import './IntroPage.css';



const IntroPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const ads = document.getElementsByClassName('adsbygoogle');
    const ad = ads[0];
    if (ad && !ad.getAttribute('data-adsbygoogle-status')) {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense Error:', e);
      }
    }
  }, []);
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
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5460335586767094"
          data-ad-slot="5917717645"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <AdvertiseBanner />
      <SiteInfo />
    </div>
  );
};

export default IntroPage;
