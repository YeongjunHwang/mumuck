import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import './GamePage.css';

interface FallingOption {
  text: string;
  type: 'select' | 'food';
  direction: 'left' | 'right';
  top: number;
}

const categorySteps = [
  { left: '국물', right: '안국물' },
  { left: '밥', right: '면' },
  { left: '탕', right: '찌개' },
];

const foodOptions = [
  { left: '🐖 돼지국밥', right: '🐷 순대국' },
  { left: '🥩 소고기국밥', right: '🍖 갈비탕' },
  { left: '🍗 삼계탕', right: '🍶 설렁탕' },
];

const GamePage: React.FC = () => {
  const [heroPosition, setHeroPosition] = useState<'left' | 'right'>('left');
  const [options, setOptions] = useState<FallingOption[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameClear, setGameClear] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setOptions((prev) =>
        prev
          .map((opt) => ({ ...opt, top: opt.top + 10 }))
          .filter((opt) => opt.top < 600)
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stepIndex < categorySteps.length) {
      const step = categorySteps[stepIndex];
      setOptions((prev) => [
        ...prev,
        { text: step.left, direction: 'left', type: 'select', top: 0 },
        { text: step.right, direction: 'right', type: 'select', top: 0 },
      ]);
    } else if (stepIndex - categorySteps.length < foodOptions.length) {
      const foodStep = foodOptions[stepIndex - categorySteps.length];
      setOptions((prev) => [
        ...prev,
        { text: foodStep.left, direction: 'left', type: 'food', top: 0 },
        { text: foodStep.right, direction: 'right', type: 'food', top: 0 },
      ]);
    }
  }, [stepIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setHeroPosition('left');
      if (e.key === 'ArrowRight') setHeroPosition('right');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const heroY = 520;
    options.forEach((opt) => {
      if (opt.top >= heroY && opt.top < heroY + 30 && opt.direction === heroPosition) {
        if (opt.type === 'select') {
          setSelected((prev) => [...prev, opt.text]);
          setStepIndex((prev) => prev + 1);
        } else if (opt.type === 'food') {
          setGameClear(true);
          setTimeout(() => {
            navigate('/result', {
              state: {
                selections: selected,
                result: opt.text,
              },
            });
          }, 1500);
        }
        setOptions((prev) => prev.filter((o) => o !== opt));
      }

      if (opt.top >= heroY + 30 && opt.direction !== heroPosition && opt.type === 'food') {
        setGameOver(true);
        setTimeout(() => navigate('/'), 1500);
      }
    });
  }, [options, heroPosition]);

  return (
    <div className="game-container">
      <div className="hero">
        <FaReact className="hero-icon" />
      </div>
      {options.map((opt, idx) => (
        <div
          key={idx}
          className={`option ${opt.direction}`}
          style={{ top: `${opt.top}px` }}
        >
          {opt.text}
        </div>
      ))}
      {gameOver && <div className="result-box">게임 오버!</div>}
      {gameClear && <div className="result-box">선택 완료!</div>}
    </div>
  );
};

export default GamePage;
