// components/FoodBanner.tsx
import { useState } from 'react'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'

import 'swiper/css'
import styles from './FoodBanner.module.css'

const FoodBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    { img: '/images/foodbanners/kyochon.png' },
    { img: '/images/foodbanners/domino.png' },
    { img: '/images/foodbanners/huwon.png' },
  ]

  return (
    <div className={styles.bannerWrapper}>
      <SwiperComponent
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper: SwiperClass) => {
          setActiveIndex(swiper.realIndex)
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            <div className={styles.bannerSlide}>
              <img
                src={slide.img}
                alt={`배너 ${i + 1}`}
                className={styles.bannerImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className={styles.customIndicator}>
        {activeIndex + 1} / {slides.length}
      </div>
    </div>
  )
}

export default FoodBanner
