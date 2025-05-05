import React from 'react';
import './Header.css';

interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  return (
    <header className="app-header">
      <span className="logo">Mumuck</span>
    </header>
  );
};

export default Header;
