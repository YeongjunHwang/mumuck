import { useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper'; // ✅ 타입 지정

import 'swiper/css';
import './FoodBanner.css';

const FoodBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { img: `${process.env.PUBLIC_URL}/images/foodbanners/kyochon.png` },
        { img: `${process.env.PUBLIC_URL}/images/foodbanners/domino.png` },
        { img: `${process.env.PUBLIC_URL}/images/foodbanners/huwon.png` }
        ];

    return (
        <div className="banner-wrapper">
            <SwiperComponent
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                onSlideChange={(swiper: SwiperClass) => {
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="banner-slide">
                            {slide.img && (
                                <img src={slide.img} alt={`배너 ${i + 1}`} className="banner-image" />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
            <div className="custom-indicator">
                {activeIndex + 1} / {slides.length}
            </div>

        </div>
    );
};

export default FoodBanner;
