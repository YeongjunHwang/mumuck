import React, { useEffect } from 'react'; // ✅ useEffect 추가
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    fetch('https://mumuck-server.onrender.com/ping') // 서버 깨우기
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
