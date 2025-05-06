import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import IntroPage from '../pages/IntroPage';
import SelectPage from '../pages/SelectPage';
import GamePage from '../pages/GamePage';
import ResultPage from '../pages/ResultPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<IntroPage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="select" element={<SelectPage />} />
        <Route path="result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
