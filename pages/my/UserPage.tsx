// pages/my/index.tsx
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SiteInfo from '../../components/SiteInfo/SiteInfo'
import styles from './UserPage.module.css'

interface User {
  id: number
  nickname: string
  provider: string
  provider_id: string
  email?: string
}

const UserPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch (e) {
        console.error('유저 정보 파싱 실패:', e)
      }
    } else {
      // 로그인 안 된 경우 로그인 페이지로
      router.push('/my/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    router.push('/my/login')
  }

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      '정말 탈퇴하시겠습니까? 탈퇴 후 복구는 불가능합니다.'
    )
    if (!confirmDelete) return

    const token = localStorage.getItem('token')
    if (!token) {
      alert('로그인이 필요합니다.')
      return
    }

    try {
      const res = await fetch(
        'https://mumuck-server.onrender.com/api/users/me',
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      if (res.status === 204) {
        alert('회원 탈퇴가 완료되었습니다.')
        localStorage.clear()
        router.push('/')
      } else {
        alert('회원 탈퇴에 실패했습니다.')
      }
    } catch (error) {
      console.error('❌ 회원 탈퇴 요청 실패:', error)
      alert('회원 탈퇴 중 오류가 발생했습니다.')
    }
  }

  if (!user) return null // 로딩 중에는 아무것도 안 보이도록

  return (
    <div className={styles['user-page']}>
      <div className={styles['user-box']}>
        <h2>👋 {user.nickname}님 환영합니다!</h2>
        <button onClick={handleLogout}>로그아웃</button>
        <button
          onClick={handleDeleteAccount}
          className={styles['delete-btn']}
        >
          회원 탈퇴
        </button>
      </div>
      <SiteInfo />
    </div>
  )
}

export default UserPage
