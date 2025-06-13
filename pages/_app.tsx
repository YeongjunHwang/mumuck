import '../styles/globals.css'
import '../styles/intro.css'
import '../styles/game.css'
import '../styles/login.css'
import '../styles/user.css'
import '../styles/tier.css'
import '../styles/info.css'
import '../styles/privacy.css'
import '../styles/terms.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // 서버 깨우기 로직 그대로
    fetch('https://mumuck-server.onrender.com/ping')
  }, [])

  return (
    <div className="app-wrap">
      <Header />
      <main className="app-main">
        {/* React Router의 <Outlet /> 대신 Next.js 페이지 컴포넌트 */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
