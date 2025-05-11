import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteInfo from '../../components/SiteInfo/SiteInfo';
import './MyPage.css';

interface User {
  id: number;
  nickname: string;
  provider: string;
  provider_id: string;
  email?: string;
}

const MyPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // ✅ 새로고침 시 로그인 상태 복원
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
        // ✅ 로그인된 경우 /user로 이동
        navigate('/user');
      } catch (e) {
        console.error('유저 정보 파싱 실패:', e);
      }
    }
  }, [navigate]);

  const handleLogin = () => {
    window.location.href = 'https://mumuck-server.onrender.com/api/auth/google';
  };

  return (
    <div className="my-page">
      <div className="user-box">
        <h2>어서오세요 👋</h2>
        <p>Google 로그인을 통해 메뉴 추천을 즐겨보세요!</p>
        <button onClick={handleLogin}>Google 로그인</button>
      </div>
      <SiteInfo />
    </div>
  );
};

export default MyPage;
