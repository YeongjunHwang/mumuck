// components/AdBanner.tsx
import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const AdBanner: React.FC<{ slot: string }> = ({ slot }) => {
  const adRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const tryLoadAd = () => {
      if (!adRef.current || initialized.current) return

      const width = adRef.current.offsetWidth
      if (width === 0) return

      try {
        ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
        initialized.current = true
      } catch (e) {
        console.error('AdSense Error:', e)
      }
    }

    // DOM 안정화 이후 광고 로딩
    const timeout = window.setTimeout(tryLoadAd, 500)

    // 리사이즈 감지
    let observer: ResizeObserver | null = null
    if ('ResizeObserver' in window && adRef.current) {
      observer = new ResizeObserver(tryLoadAd)
      observer.observe(adRef.current)
    }

    return () => {
      clearTimeout(timeout)
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={adRef}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100px' }}
        data-ad-client="ca-pub-5460335586767094"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Next.js에서 클라이언트 전용으로만 렌더링
export default dynamic(() => Promise.resolve(AdBanner), { ssr: false })
