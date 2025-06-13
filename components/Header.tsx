// components/Header.tsx
import React from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  onBack?: () => void
}

const Header: React.FC<HeaderProps> = ({ onBack }) => (
  <header className={styles.appHeader}>
    {onBack && (
      <button onClick={onBack} className={styles.backButton}>
        ←
      </button>
    )}
    <span className={styles.logo}>Mumuck</span>
  </header>
)

export default Header
