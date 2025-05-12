import SiteInfo from '../../components/SiteInfo/SiteInfo';
import './LoginPage.css';


const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'https://mumuck-server.onrender.com/api/auth/google';
  };

  return (
    <div className="login-page">
      <h1 className="login-title">로그인</h1>

      <div className="login-buttons">
        <button className="social-button google" onClick={handleGoogleLogin}>
          <img src="/images/g-logo/g-logo.png" alt="Google" loading="eager" />
          구글 계정으로 로그인
        </button>
      </div>

      <p className="login-disclaimer">
        회원가입 없이 이용 가능하며, 첫 로그인 시<br />
        <a href="/terms" target="_blank" rel="noopener noreferrer">이용약관</a> 및
        <a href="/privacy" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>에 동의한 것으로 간주됩니다.
      </p>

      <SiteInfo />
    </div>
  );
};

export default LoginPage;
