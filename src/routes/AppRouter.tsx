import { Routes, Route } from 'react-router-dom';
import App from '../App';
import IntroPage from '../pages/IntroPage/IntroPage';
import GamePage from '../pages/GamePage/GamePage';
import MyPage from '../pages/MyPage/MyPage';
import UserPage from '../pages/MyPage/UserPage';
import PrivacyPage from '../pages/MyPage/PrivacyPage';
import Terms from '../pages/MyPage/TermsPage';
import OAuthCallback from '../pages/MyPage/OAuthCallback';
import TierIntro from '../pages/TierPage/TierIntro';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<IntroPage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="TierIntro" element={<TierIntro />} />
        <Route path="mypage" element={<MyPage />} />
         <Route path="/user" element={<UserPage />} />  
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<Terms />} />

      </Route>
      <Route path="/oauth/callback" element={<OAuthCallback />} />
    </Routes>
  );
};

export default AppRouter;
