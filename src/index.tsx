import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter'; // ✅ 라우터를 가져옴
import './index.css';

// 앱을 렌더링할 DOM 요소를 찾고, React.StrictMode로 감싸서 앱을 렌더링
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // createRoot 사용

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
