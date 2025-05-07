import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lottie from 'lottie-react';
import catRun from '../assets/cat-run.json';
import './GamePage.css';
import tree from '../data/tree';

interface StepNode {
  options: string[];
  next?: { [key: string]: StepNode };
  finalOptions?: string[];
}

const getHeroLeftByIndex = (index: number, total: number) => {
  const base = 100 / total;
  return base * index + base / 2 + '%';
};

const getRandomFromArray = (arr: string[], count: number, exclude: Set<string> = new Set()) => {
  const filtered = arr.filter((item) => !exclude.has(item));
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GamePage: React.FC = () => {
  const [currentNode, setCurrentNode] = useState<StepNode>(tree);
  const [obstacleY, setObstacleY] = useState(-200);
  const [result, setResult] = useState('');
  const [currentOptions, setCurrentOptions] = useState<string[]>(tree.options);
  const [countdown, setCountdown] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [falling, setFalling] = useState(true);
  const [readyNextStep, setReadyNextStep] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const heroIndexRef = useRef(1);
  const intervalRef = useRef<number | null>(null);
  const finalPoolRef = useRef<string[]>([]);
  const usedOptionsRef = useRef<Set<string>>(new Set());

  const moveHero = useCallback((direction: 'left' | 'right') => {
    heroIndexRef.current = direction === 'left'
      ? Math.max(0, heroIndexRef.current - 1)
      : Math.min(currentOptions.length - 1, heroIndexRef.current + 1);
  }, [currentOptions.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted || !falling) return;
      if (e.key === 'ArrowLeft') moveHero('left');
      if (e.key === 'ArrowRight') moveHero('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveHero, gameStarted, falling]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!gameStarted || !falling) return;
      const touchX = e.touches[0].clientX;
      const centerX = window.innerWidth / 2;
      moveHero(touchX > centerX ? 'right' : 'left');
    };
    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, [moveHero, gameStarted, falling]);

  useEffect(() => {
    if (!gameStarted || result || !falling) return;

    setFadeOut(false);
    intervalRef.current = window.setInterval(() => {
      setObstacleY((prev) => {
        const next = prev + 10;
        if (next >= 355) {
          clearInterval(intervalRef.current!);
          setFadeOut(true);
          setTimeout(() => setReadyNextStep(true), 200);
          return 355;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(intervalRef.current!);
  }, [falling, result, gameStarted]);

  const restartGame = () => {
    setCurrentNode(tree);
    setObstacleY(-200);
    setResult('');
    setCurrentOptions(tree.options);
    setCountdown(3);
    setGameStarted(false);
    setFalling(true);
    setReadyNextStep(false);
    setFadeOut(false);
    heroIndexRef.current = 1;
    finalPoolRef.current = [];
    usedOptionsRef.current.clear();
  };

  useEffect(() => {
    if (!readyNextStep || result || !gameStarted) return;
    setReadyNextStep(false);
    setFalling(false);

    const selected = currentOptions[heroIndexRef.current];

    if (finalPoolRef.current.length > 0 && selected === '안땡김') {
      const exclude = usedOptionsRef.current;
      const remaining = finalPoolRef.current.filter(item => !exclude.has(item));

      if (remaining.length < 2) {
        setResult('GAME OVER');
        return;
      }

      const options = getRandomFromArray(remaining, 2);
      options.push('안땡김');
      const newOptions = getRandomFromArray(options, 3);
      newOptions.forEach(opt => opt !== '안땡김' && usedOptionsRef.current.add(opt));
      setCurrentOptions(newOptions);
      setCurrentNode({ options: newOptions });
      setObstacleY(-200);
      setTimeout(() => setFalling(true), 10);
      return;
    }

    const nextNode = currentNode.next?.[selected];
    if (!nextNode) {
      setResult(selected === '안땡김' ? 'GAME OVER' : `오늘은 ${selected}!`);
      return;
    }

    if (nextNode.finalOptions) {
      finalPoolRef.current = nextNode.finalOptions.filter(item => item !== '안땡김');
      usedOptionsRef.current.clear();

      const exclude = usedOptionsRef.current;
      const remaining = finalPoolRef.current.filter(item => !exclude.has(item));

      if (remaining.length < 2) {
        setResult('GAME OVER');
        return;
      }

      const options = getRandomFromArray(remaining, 2);
      options.push('안땡김');
      const newOptions = getRandomFromArray(options, 3);
      newOptions.forEach(opt => opt !== '안땡김' && usedOptionsRef.current.add(opt));
      setCurrentOptions(newOptions);
      setCurrentNode({ options: newOptions });
    } else {
      setCurrentOptions(nextNode.options);
      setCurrentNode(nextNode);
    }

    setObstacleY(-200);
    setTimeout(() => setFalling(true), 10);
  }, [readyNextStep, gameStarted, result, currentNode, currentOptions]);

  useEffect(() => {
    if (countdown <= 0) {
      setGameStarted(true);
      return;
    }
    const timer = window.setTimeout(() => setCountdown((prev) => prev - 1), 500);
    return () => clearTimeout(timer);
  }, [countdown]);

  const isGameOver = result === 'GAME OVER';

  return (
    <div className="game-container">
      {!gameStarted && (
        <>
          <div className="countdown-overlay">
            <div className="countdown-number">{countdown > 0 ? countdown : '시작!'}</div>
          </div>
          <div className="touch-guide">방향키 또는 화면 좌우를 터치로<br />고양이를 움직여보세요!</div>
        </>
      )}

      {result && (
        <div className={`result-box enhanced${isGameOver ? ' game-over' : ''}`}>
          {result}
          <button className="restart-button" onClick={restartGame}>다시 하기</button>
        </div>
      )}

      {falling && (
        <div
          className={`falling-options-wrapper ${fadeOut ? 'fade-out' : ''}`}
          style={{ transform: `translateY(${obstacleY}px)` }}
        >
          {currentOptions.map((opt, idx) => (
            <div className="falling-option" key={idx}>{opt}</div>
          ))}
        </div>
      )}

      <div className="ground" />

      <div
        className="hero"
        style={{ left: getHeroLeftByIndex(heroIndexRef.current, currentOptions.length) }}
      >
        <Lottie animationData={catRun} loop style={{ width: 150, height: 150 }} />
      </div>
    </div>
  );
};

export default GamePage;
