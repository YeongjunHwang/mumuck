import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import IntroPage from '../pages/IntroPage';
import SelectPage from '../pages/SelectPage';
import ResultPage from '../pages/ResultPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<IntroPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
