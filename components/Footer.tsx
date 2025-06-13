// components/Footer.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  MdHome,
  MdRestaurantMenu,
  MdLeaderboard,
  MdPerson,
} from 'react-icons/md'
import type { IconType } from 'react-icons'
import styles from './Footer.module.css'

interface TabItem {
  label: string
  icon: IconType
  path: string
}

const tabs: TabItem[] = [
  { label: '홈', icon: MdHome, path: '/' },
  { label: '메뉴 추천 게임', icon: MdRestaurantMenu, path: '/game' },
  { label: '브랜드 랭킹', icon: MdLeaderboard, path: '/tier' },
  { label: '마이페이지', icon: MdPerson, path: '/my' },
]

const Footer: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <footer className={styles.footer}>
      {tabs.map(({ label, icon: Icon, path }) => {
        const isActive = pathname === path
        return (
          <Link
            key={path}
            href={path}
            className={`${styles['footer-item']} ${isActive ? styles.active : ''}`}
          >
            <Icon size={24} />
            <span className={styles['footer-label']}>{label}</span>
          </Link>
        )
      })}
    </footer>
  )
}

export default Footer
