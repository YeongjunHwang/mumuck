import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MdDirectionsRun } from 'react-icons/md';
import './GamePage.css';

interface StepNode {
  options: string[];
  next?: { [key: string]: StepNode };
}

const stepTree: StepNode = {
  options: ['국물', '안국물'],
  next: {
    '국물': {
      options: ['밥', '면'],
      next: {
        '밥': {
          options: ['탕', '찌개'],
          next: {
            '탕': {
              options: ['🍖 갈비탕', '🧠 양평해장국', '안땡김'],
              next: {
                '안땡김': {
                  options: ['🍲 순대국', '🐖 돼지국밥', '안땡김'],
                },
              },
            },
            '찌개': {
              options: ['🥘 된장찌개', '🍲 순두부찌개', '안땡김'],
            },
          },
        },
        '면': {
          options: ['🍜 우동', '🍜 라멘', '안땡김'],
        },
      },
    },
    '안국물': {
      options: ['🍚 비빔밥', '🍔 햄버거', '안땡김'],
    },
  },
};

const getHeroLeftByIndex = (index: number, total: number) => {
  const base = 100 / total;
  return base * index + base / 2 + '%';
};

const GamePage: React.FC = () => {
  const [path, setPath] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState<StepNode>(stepTree);
  const [heroIndex, setHeroIndex] = useState(1);
  const [obstacleY, setObstacleY] = useState(0);
  const [result, setResult] = useState('');
  const intervalRef = useRef<number | null>(null);

  const currentOptions = currentNode.options;

  const moveHero = useCallback((direction: 'left' | 'right') => {
    setHeroIndex((prev) => {
      if (direction === 'left' && prev > 0) return prev - 1;
      if (direction === 'right' && prev < currentOptions.length - 1) return prev + 1;
      return prev;
    });
  }, [currentOptions.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveHero('left');
      if (e.key === 'ArrowRight') moveHero('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveHero]);
  
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > 30) {
        moveHero(deltaX > 0 ? 'right' : 'left');
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [moveHero]);

  useEffect(() => {
    if (result) return;
    intervalRef.current = window.setInterval(() => {
      setObstacleY((prev) => {
        const next = prev + 5;
        if (next >= 420) {
          const selected = currentOptions[heroIndex];
          if (!currentNode.next || !currentNode.next[selected]) {
            setResult(selected === '안땡김' ? '게임 오버!' : `오늘은 ${selected}!`);
            clearInterval(intervalRef.current!);
            return 0;
          }
          setPath([...path, selected]);
          setCurrentNode(currentNode.next[selected]);
          setHeroIndex(1);
          return 0;
        }
        return next;
      });
    }, 60);
    return () => clearInterval(intervalRef.current!);
  }, [currentNode, currentOptions, heroIndex, path, result]);

  return (
    <div className="game-container">
      {result && <div className="result-box">{result}</div>}

      <div className="falling-options-wrapper" style={{ top: obstacleY }}>
        {currentOptions.map((opt, idx) => (
          <div className="falling-option" key={idx}>{opt}</div>
        ))}
      </div>

      <div
        className="hero"
        style={{ left: getHeroLeftByIndex(heroIndex, currentOptions.length) }}
      >
        <MdDirectionsRun className="hero-icon" />
      </div>
    </div>
  );
};

export default GamePage;
