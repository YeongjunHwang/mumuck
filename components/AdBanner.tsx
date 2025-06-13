import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
}

const AdBanner = ({ slot }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const tryLoadAd = () => {
      if (!adRef.current || initialized.current) return;

      const width = adRef.current.offsetWidth;
      if (width === 0) return;

      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
        initialized.current = true;
      } catch (e) {
        console.error('AdSense Error:', e);
      }
    };

    // DOM 안정화 이후 광고 로딩
    const timeout = setTimeout(tryLoadAd, 500);

    // 옵저버도 함께 사용 (재렌더링 대응)
    const observer = new ResizeObserver(() => tryLoadAd());
    if (adRef.current) observer.observe(adRef.current);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

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
        style={{
          display: 'block',
          width: '100%',
          height: '100px',
        }}
        data-ad-client="ca-pub-5460335586767094"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
