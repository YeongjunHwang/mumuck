import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import './MyPage.css';

interface User {
  id: number;
  nickname: string;
  provider: string;
  provider_id: string;
}

const MyPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // ✅ 새로고침 시 로그인 상태 복원
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error('유저 정보 파싱 실패:', e);
      }
    }
  }, []);

  // ✅ 로그인 성공 시 백엔드에 토큰 전송 → 유저 저장
  const handleGoogleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    try {
      const res = await fetch('https://mumuck-server.onrender.com/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken }),
      });

      const data = await res.json();

      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.error('❌ 로그인 실패:', error);
    }
  };

  // ✅ 로그아웃
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="my-page">
      {user ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p>👋 <strong>{user.nickname}</strong>님, 환영합니다!</p>
          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            로그아웃
          </button>
        </div>
      ) : (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || 'GOOGLE_CLIENT_ID'}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('❌ Google Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      )}

      <div className="privacy-word">
        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px' }}>
          <Link to="/privacy" style={{ color: '#ccc', textDecoration: 'underline' }}>
            개인정보처리방침
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
