import SiteInfo from '../../components/SiteInfo/SiteInfo';
import './LoginPage.css';

const MyPage: React.FC = () => {
  const handleLogin = () => {
    window.location.href = 'https://mumuck-server.onrender.com/api/auth/google';
  };

  return (
    <div className="login-page">
      <div className="google-login-wrapper">
        <button onClick={handleLogin} className="google-login-button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          <span>Google로 로그인</span>
        </button>
      </div>
      <SiteInfo />
    </div>
  );
};

export default MyPage;
