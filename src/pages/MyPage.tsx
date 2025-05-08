import { Link } from 'react-router-dom';
import './MyPage.css';


const MyPage: React.FC = () => {
  return (
    <div className="my-page">
      {/* 마이페이지 기능들 */}
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
