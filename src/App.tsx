import React, { useEffect } from 'react'; // ✅ useEffect 추가
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    fetch('https://mumuck-server.onrender.com/ping')
      .then(() => console.log('✅ Render 서버 깨우기 완료'))
      .catch((err) => console.warn('❌ Render 서버 깨우기 실패:', err));
  }, []);

  return (
    <div className="app-wrap">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
