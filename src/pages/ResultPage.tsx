import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selections = (location.state as { selections: string[] })?.selections || [];

  const reset = () => {
    navigate('/');
  };

  return (
    <div className="result-box">
      <h3>✨ 선택 결과</h3>
      <p>{selections.join(' → ')}</p>
      <button className="reset-btn" onClick={reset}>
        다시 선택하기
      </button>
    </div>
  );
};

export default ResultPage;
