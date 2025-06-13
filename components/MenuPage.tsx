// components/MenuPage.tsx
import { useState } from 'react'
import styles from './MenuPage.module.css'

export interface MenuItem {
  brand: string
  name: string
  description: string
  votes: number
  image: string
}

interface MenuPageProps {
  title: string
  items: MenuItem[]
  imageFolder: string
}

const MenuPage: React.FC<MenuPageProps> = ({ title, items, imageFolder }) => {
  const [search, setSearch] = useState('')

  // 검색어 필터링
  const filteredItems = items.filter(
    item =>
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
  )

  // 투표 수 기준 내림차순 정렬
  const sortedItems = [...filteredItems].sort((a, b) => b.votes - a.votes)

  // 공동 순위 로직
  let lastVotes: number | null = null
  let rank = 0
  const rankMap: number[] = []

  sortedItems.forEach((item, i) => {
    if (item.votes !== lastVotes) {
      rank = i + 1
      lastVotes = item.votes
    }
    rankMap[i] = rank
  })

  return (
    <div className={styles.menuPage}>
      <h2 className={styles.pageTitle}>{title}</h2>

      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="브랜드 또는 메뉴명을 검색하세요"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.menuList}>
        {sortedItems.map((item, idx) => (
          <div key={idx} className={styles.menuCard}>
            <div className={styles.menuInfo}>
              <span className={styles.tag}>인기 {rankMap[idx]}위</span>
              <h3 className={styles.menuTitle}>
                {item.brand} | {item.name}
              </h3>
              <p className={styles.menuDesc}>{item.description}</p>
              <div className={styles.menuReview}>
                투표 수: {item.votes}표
              </div>
            </div>
            <img
              src={`${imageFolder}/${item.image}`}
              alt={item.name}
              className={styles.menuImage}
              loading="eager"
            />
          </div>
        ))}
        {sortedItems.length === 0 && (
          <p className={styles.noResult}>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  )
}

export default MenuPage
