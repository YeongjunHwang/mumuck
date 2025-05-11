import { useEffect, useState } from 'react';
import SiteInfo from '../../components/SiteInfo/SiteInfo';
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

  // ✅ 로그인 버튼 클릭 시 서버로 위임
  const handleLogin = () => {
    window.location.href = 'https://mumuck-server.onrender.com/api/auth/google';
  };

  // ✅ 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  // ✅ 회원 탈퇴 요청
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('정말 탈퇴하시겠습니까? 탈퇴 후 복구는 불가능합니다.');
    if (!confirmDelete) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const res = await fetch('https://mumuck-server.onrender.com/api/users/me', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 204) {
        alert('회원 탈퇴가 완료되었습니다.');
        localStorage.clear();
        window.location.href = '/';
      } else {
        alert('회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      console.error('❌ 회원 탈퇴 요청 실패:', error);
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="my-page">
      {user ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p>👋 <strong>{user.nickname}</strong>님, 환영합니다!</p>
          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            로그아웃
          </button>
          <br />
          <button onClick={handleDeleteAccount} style={{ marginTop: '20px', color: 'red' }}>
            회원 탈퇴
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
