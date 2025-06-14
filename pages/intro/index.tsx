// pages/intro/index.tsx
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import FoodBanner from '../../components/FoodBanner'
import AdvertiseBanner from '../../components/AdvertiseBanner'
import SiteInfo from '../../components/SiteInfo/SiteInfo'
import introAnim from '../../data/json/Intro.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const IntroPage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="introPage">
      <FoodBanner />

      <div className="introContent">
        <h1 className="introTitle">
          <span className="introIconLottie">
            <Lottie animationData={introAnim} loop />
          </span>
          오늘 뭐 먹지?
        </h1>
        <p className="subtitle">
          매일 반복되는 고민, 저희가 해결해드릴게요
        </p>

        <div className="introDescription">
          <p>
            Mumuck은 '메뉴 고민'을 게임처럼 즐겁게 해결해주는 플랫폼입니다.
          </p>
          <p>
            메뉴 추천 게임을 통해 오늘의 점심이나 저녁을 결정하고,
            치킨, 피자, 햄버거 등 다양한 프랜차이즈 브랜드의 인기 티어표도 확인해보세요.
          </p>
          <p>
            음식 선택이 어려운 순간, Mumuck에서 재미있게 메뉴를 찾아보세요!
          </p>
        </div>

        <button
          className="startBtn"
          onClick={() => router.push('/game')}
        >
          추천게임 시작
        </button>
      </div>

      <AdvertiseBanner />
      <SiteInfo />
    </div>
  )
}

export default IntroPage
