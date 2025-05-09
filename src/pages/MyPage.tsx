import { useEffect, useState } from 'react';
import SiteInfo from '../components/SiteInfo/SiteInfo';
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

  // ✅ 로그인 버튼 → 서버 로그인 URL로 리디렉션
  const handleLogin = () => {
    // 프론트는 서버에 로그인 위임
    window.location.href = 'https://mumuck-server.onrender.com/api/auth/google';
  };

  // ✅ 로그아웃
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
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
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={handleLogin}>Google 로그인</button>
        </div>
      )}
      
      <SiteInfo />
    </div>
  );
};

export default MyPage;
