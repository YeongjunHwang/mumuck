// components/AdvertiseBanner.tsx
import React from 'react'
import styles from './AdvertiseBanner.module.css'

const AdvertiseBanner: React.FC = () => (
  <div className={styles.advertiseBanner}>
    <a href="https://mumuck.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/images/advertisebanners/adversise.png"
        alt="광고 배너"
        className={styles.advertiseImage}
      />
    </a>
  </div>
)

export default AdvertiseBanner
