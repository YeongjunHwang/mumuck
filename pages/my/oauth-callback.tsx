// pages/my/oauth-callback.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const OAuthCallback: NextPage = () => {
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    if (!router.isReady) return

    const tokenValue = Array.isArray(token) ? token[0] : token
    console.log('🔍 token:', tokenValue)
    console.log('🌐 current URL:', window.location.href)

    if (tokenValue) {
      localStorage.setItem('token', tokenValue)
      fetch('https://mumuck-server.onrender.com/api/me', {
        headers: { Authorization: `Bearer ${tokenValue}` },
      })
        .then(res => {
          if (!res.ok) throw new Error('API 응답 오류')
          return res.json()
        })
        .then(data => {
          console.log('✅ 유저 정보:', data)
          localStorage.setItem('user', JSON.stringify(data))
          router.push('/my')
        })
        .catch(err => {
          console.error('❌ 유저 정보 요청 실패:', err)
          alert('유저 정보 요청 실패')
          router.push('/')
        })
      return
    }

    const ua = navigator.userAgent.toLowerCase()
    const isInApp = /kakaotalk|naver|instagram|fbav|line/.test(ua)

    if (isInApp) {
      // Android: 외부 브라우저로 강제 열기
      if (/android/.test(ua)) {
        const scheme = window.location.protocol.replace(':', '')
        const host = window.location.host
        const path = window.location.pathname
        const search = window.location.search
        window.location.href = `intent://${host}${path}${search}#Intent;scheme=${scheme};package=com.android.chrome;end`
        return
      }
      // iOS: 새 창으로 열기
      if (/iphone|ipad|ipod/.test(ua)) {
        window.open(window.location.href, '_blank')
        return
      }
    }

    console.warn('⚠️ URL에 token 파라미터 없음')
    alert('로그인 실패: 토큰 없음')
    router.push('/')
  }, [router.isReady, token])

  return (
    <p style={{ textAlign: 'center', marginTop: '40px' }}>
      로그인 처리 중입니다...
    </p>
  )
}

export default OAuthCallback
