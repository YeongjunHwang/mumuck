import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuthCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    console.log('🔍 token:', token);
    console.log('🌐 current URL:', window.location.href);

    if (token) {
      localStorage.setItem('token', token);

      fetch('https://mumuck-server.onrender.com/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error('API 응답 오류');
          return res.json();
        })
        .then((data) => {
          console.log('✅ 유저 정보:', data);
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/mypage');
        })
        .catch((err) => {
          console.error('❌ 유저 정보 요청 실패:', err);
          alert('유저 정보 요청 실패');
          navigate('/');
        });

      return; // ✅ 토큰이 있으면 인앱 감지 skip
    }

    const ua = navigator.userAgent.toLowerCase();
    const isInApp = /kakaotalk|naver|instagram|fbav|line/.test(ua);

    if (isInApp) {
      const userAgent = navigator.userAgent.toLowerCase();

      // ✅ Android - intent:// 외부 브라우저 강제 열기
      if (/android/.test(userAgent)) {
        const scheme = window.location.protocol.replace(':', '');
        const host = window.location.host;
        const path = window.location.pathname;
        const search = window.location.search;
        window.location.href = `intent://${host}${path}${search}#Intent;scheme=${scheme};package=com.android.chrome;end`;
        return;
      }

      // ✅ iOS - 새 창으로 열기 (사파리)
      if (/iphone|ipad|ipod/.test(userAgent)) {
        window.open(window.location.href, '_blank');
        return;
      }
    }

    console.warn('⚠️ URL에 token 파라미터 없음');
    alert('로그인 실패: 토큰 없음');
    navigate('/');
  }, []);

  return <p style={{ textAlign: 'center', marginTop: '40px' }}>로그인 처리 중입니다...</p>;
};

export default OAuthCallback;
