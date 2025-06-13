// pages/tier/index.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import ChickenAnim from './tierData/chicken.json'
import PizzaAnim from './tierData/pizza.json'
import BurgerAnim from './tierData/burger.json'
import SiteInfo from '../../components/SiteInfo/SiteInfo'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,  // 서버에서는 무시
})
interface Category {
  label: string
  value: string
  lottie: any
  description: string
}

const categories: Category[] = [
  {
    label: '치킨',
    value: 'Chicken',
    lottie: ChickenAnim,
    description: '지금 가장 인기 있는 치킨은?'
  },
  {
    label: '피자',
    value: 'Pizza',
    lottie: PizzaAnim,
    description: '피자 브랜드 베스트 순위'
  },
  {
    label: '햄버거',
    value: 'Burger',
    lottie: BurgerAnim,
    description: '햄버거 브랜드 랭킹 확인'
  }
]

const TierIntro: NextPage = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSelect = (value: string) => {
    router.push(`/tier/menu/${value}`)
  }

  const filteredCategories = categories.filter(cat =>
    cat.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="tier-intro">
      <div className="intro-header">
        <h1>
          <span className="gold-title">브랜드 인기 랭킹</span>
        </h1>
      </div>

      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="카테고리를 선택해 브랜드 순위를 살펴보세요."
          className="category-search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="category-list">
        {filteredCategories.map(cat => (
          <div
            key={cat.value}
            className="category-card"
            onClick={() => handleSelect(cat.value)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className="card-content">
              <div className="category-label">{cat.label}</div>
              <div className="category-sub">{cat.description}</div>
            </div>
            {cat.lottie && (
              <div className={`category-lottie lottie-${cat.value}`}>
                <Lottie animationData={cat.lottie} loop />
              </div>
            )}
          </div>
        ))}
        {filteredCategories.length === 0 && (
          <p className="no-result">검색 결과가 없습니다.</p>
        )}
      </div>

      <SiteInfo />
    </div>
  )
}

export default TierIntro
