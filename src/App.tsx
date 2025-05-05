import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="app-wrap">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer onHomeClick={() => navigate('/')} />
    </div>
  );
};

export default App;
