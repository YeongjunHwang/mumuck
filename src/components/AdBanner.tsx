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

      if (width > 0) {
        try {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
          initialized.current = true;
        } catch (e) {
          console.error('AdSense Error:', e);
        }
      }
    };

    const timer = setTimeout(tryLoadAd, 300); // DOM 안정화 후

    return () => {
      clearTimeout(timer);
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
          height: '100px', // 또는 auto
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
