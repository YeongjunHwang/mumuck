import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  const location = useLocation();
  const isSelectPage = location.pathname === '/select';

  return (
    <header className="app-header">
      <span className="logo">Mumuck</span>
    </header>
  );
};

export default Header;
