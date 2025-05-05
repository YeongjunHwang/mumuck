import React from 'react';
import './Footer.css';

interface FooterProps {
  onHomeClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
  return (
    <footer className="footer">
      <div className="footer-item" onClick={onHomeClick}>
        <span role="img" aria-label="홈">🏠</span>
        <div className="footer-label">홈</div>
      </div>
      <div className="footer-item">
        <span role="img" aria-label="추천">🍽️</span>
        <div className="footer-label">추천받기</div>
      </div>
      <div className="footer-item">
        <span role="img" aria-label="주변 맛집">📜</span>
        <div className="footer-label">주변 맛집</div>
      </div>
      <div className="footer-item">
        <span role="img" aria-label="설정">⚙️</span>
        <div className="footer-label">설정</div>
      </div>
    </footer>
  );
};

export default Footer;
