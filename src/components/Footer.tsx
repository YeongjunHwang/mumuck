import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MdHome,
  MdRestaurantMenu,
  MdLeaderboard,
  MdPerson,
} from 'react-icons/md';
import { IconType } from 'react-icons';
import './Footer.css';

interface TabItem {
  label: string;
  icon: IconType;
  path: string;
}

const tabs: TabItem[] = [
  { label: '홈', icon: MdHome, path: '/' },
  { label: '메뉴 추천 게임', icon: MdRestaurantMenu, path: '/game' },
  { label: '브랜드 랭킹', icon: MdLeaderboard, path: '/TierIntro' },
  { label: '마이페이지', icon: MdPerson, path: '/userPage' },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {tabs.map(({ label, icon, path }) => {
        const isActive = location.pathname === path;
        const IconComponent = icon as React.FC<{ size?: number }>;

        return (
          <div
            key={path}
            className={`footer-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(path)}
          >
            <div className="footer-icon">
              <IconComponent size={24} />
            </div>
            <div className="footer-label">{label}</div>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
