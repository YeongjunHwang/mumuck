import { Routes, Route } from 'react-router-dom';
import App from '../App';
import IntroPage from '../pages/IntroPage/IntroPage';
import GamePage from '../pages/GamePage/GamePage';
import LoginPage from '../pages/MyPage/LoginPage';
import UserPage from '../pages/MyPage/UserPage';
import PrivacyPage from '../components/SiteInfo/pages/PrivacyPage';
import Terms from '../components/SiteInfo/pages/TermsPage';
import Info from '../components/SiteInfo/pages/Info';
import OAuthCallback from '../pages/MyPage/OAuthCallback';
import TierIntro from '../pages/TierPage/TierIntro';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<IntroPage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="TierIntro" element={<TierIntro />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="UserPage" element={<UserPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<Terms />} />
        <Route path="Info" element={<Info />} />


      </Route>
      <Route path="/oauth/callback" element={<OAuthCallback />} />
    </Routes>
  );
};

export default AppRouter;
