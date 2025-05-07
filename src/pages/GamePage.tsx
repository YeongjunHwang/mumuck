import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lottie from 'lottie-react';
import catRun from '../assets/cat-run.json';
import './GamePage.css';

interface StepNode {
  options: string[];
  next?: { [key: string]: StepNode };
  finalOptions?: string[];
}

const tree: StepNode = {
  options: ['국물', '안국물'],
  next: {
    '국물': {
      options: ['밥', '면'],
      next: {
        '밥': {
          options: ['탕', '찌개'],
          next: {
            '탕': {
              options: [],
              finalOptions: [
                '갈비탕', '양평해장국', '돼지국밥', '순대국', '감자탕', '콩나물국밥',
                '소고기국밥', '육개장', '곰탕', '설렁탕', '도가니탕', '추어탕',
                '동태탕', '복국', '삼계탕', '닭곰탕', '만둣국', '버섯전골',
                '얼큰이탕', '닭한마리', '알탕', '매운탕',
                '북어국', '닭개장', '쇠고기미역국', '우거지탕', '감자우거지탕'
              ],
            },
            '찌개': {
              options: [],
              finalOptions: [
                '된장찌개', '청국장', '부대찌개', '순두부찌개',
                '짜글이', '참치김치찌개', '돼지고기김치찌개', '해물된장찌개',
                '차돌된장찌개', '애호박찌개', '버섯찌개', '콩비지찌개', '고등어김치찌개',
                '감자찌개', '소고기무국', '계란국', '두부김치찌개', '조개찌개',
                '된장수제비', '고추장찌개', '우렁된장찌개'
              ],
            },
          },
        },
        '면': {
          options: ['차가운 면', '따뜻한 면'],
          next: {
            '차가운 면': {
              options: [],
              finalOptions: [
                '물냉면', '물밀면', '동치미국수', '메밀소바', '콩국수',
                '초계국수', '냉짬뽕', '물막국수', '회냉면', '비빔막국수',
                '냉우동', '냉소바', '골뱅이국수', '냉비빔국수', '열무국수',
                '냉쫄면', '동치미메밀', '냉메밀국수', '연겨자냉국수', '참깨냉국수',
                '멸치냉면', '우엉냉면', '바지락냉국수', '냉칼국수', '고추냉이냉국수'
              ],
            },
            '따뜻한 면': {
              options: [],
              finalOptions: [
                '우동', '잔치국수', '칼국수', '짬뽕', '라멘', '돈코츠라멘',
                '쌀국수', '해장 파스타', '차돌우동', '유부우동', '비빔칼국수',
                '얼큰칼국수', '버섯우동', '돼지우동', '멸치국수', '닭칼국수',
                '굴국수', '매운라멘', '해물칼국수', '마라우동', '팟타이', '볶음우동',
                '카레우동', '간장우동', '매운쌀국수', '쇠고기국수', '김치우동',
                '장칼국수', '파우동', '참깨우동'
              ],
            },
          },
        },
      },
    },
    '안국물': {
      options: ['탄수화물', '고기류'],
      next: {
        '탄수화물': {
          options: ['쌀', '밀가루'],
          next: {
            '쌀': {
              options: [],
              finalOptions: [
                '한솥도시락', '카레', '오므라이스', '제육덮밥', '비빔밥',
                '김치볶음밥', '치킨마요덮밥', '규동', '새우볶음밥',
                '스테이크덮밥', '낙지덮밥', '차슈덮밥', '소불고기덮밥',
                '치즈김치볶음밥', '참치마요덮밥', '연어덮밥', '스팸덮밥',
                '멸치볶음밥', '우삼겹덮밥', '버터간장밥', '삼겹살덮밥',
                '훈제오리덮밥', '소고기스튜덮밥', '차돌된장덮밥', '불닭덮밥',
                '닭갈비덮밥', '마라덮밥', '낙지젓갈비빔밥', '계란덮밥', '돼지고기덮밥'
              ],
            },
            '밀가루': {
              options: [],
              finalOptions: [
                '미트파스타', '알리오올리오', '짜장면', '비빔국수', '까르보나라',
                '쫄면', '볶음우동', '야끼우동', '크림파스타', '라자냐',
                '불닭파스타', '스파게티', '소세지파스타', '냄비파스타', '라볶이',
                '불쫄면', '오징어쫄면', '닭강정우동', '김치볶음우동', '마라쫄면',
                '로제파스타', '해물볶음면', '참치쫄면', '치즈스파게티', '초코파스타',
                '가지파스타', '명란크림파스타', '브로콜리파스타', '대패볶음면', '양파볶음면'
              ],
            },
          },
        },
        '고기류': {
          options: ['붉은 고기', '흰 고기'],
          next: {
            '붉은 고기': {
              options: [],
              finalOptions: [
                '삼겹살', '돼지불백', '소고기구이', 'LA갈비', '양꼬치',
                '갈비찜', '차돌박이', '돼지갈비', '등심', '안심',
                '토시살', '채끝살', '목살', '훈제오리', '수육',
                '곱창', '막창', '양대창', '돼지껍데기', '양념갈비',
                '오겹살', '부채살', '티본스테이크', '립아이', '불고기',
                '장조림', '육회', '한우스테이크', '양지수육', '차슈'
              ],
            },
            '흰 고기': {
              options: [],
              finalOptions: [
                '닭갈비', '간장치킨', '양념치킨', '후라이드치킨', '치킨까스',
                '닭도리탕', '삼계탕', '닭한마리', '닭볶음탕', '치킨스테이크',
                '닭강정', '마늘간장치킨', '레몬치킨', '허니버터치킨', '치즈닭갈비',
                '닭꼬치', '닭불고기', '바베큐치킨', '양파닭갈비', '로스트치킨',
                '순살치킨', '마라치킨', '핫윙', '버팔로윙',
                '오븐구이닭', '매운닭날개', '닭죽', '치킨브리또', '치킨덮밥'
              ],
            },
          },
        },
      },
    },
  },
};

const getHeroLeftByIndex = (index: number, total: number) => {
  const base = 100 / total;
  return base * index + base / 2 + '%';
};

const getRandomFromArray = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GamePage: React.FC = () => {
  const [currentNode, setCurrentNode] = useState<StepNode>(tree);
  const [heroIndex, setHeroIndex] = useState(1);
  const [obstacleY, setObstacleY] = useState(0);
  const [result, setResult] = useState('');
  const intervalRef = useRef<number | null>(null);
  const [currentOptions, setCurrentOptions] = useState<string[]>(tree.options);
  const finalPoolRef = useRef<string[]>([]);

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

    if (currentNode.finalOptions) {
      finalPoolRef.current = currentNode.finalOptions.filter((item) => item !== '안땡김');
      const options = getRandomFromArray(finalPoolRef.current, 2);
      options.push('안땡김');
      setCurrentOptions(getRandomFromArray(options, 3));
      setCurrentNode({ options });
      setHeroIndex(1);
      setObstacleY(0);
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setObstacleY((prev) => {
        const next = prev + 15;
        if (next >= 420) {
          const selected = currentOptions[heroIndex];

          if (finalPoolRef.current.length > 0 && selected === '안땡김') {
            if (finalPoolRef.current.length < 2) {
              setResult('게임 오버!');
              clearInterval(intervalRef.current!);
              return 0;
            }
            const options = getRandomFromArray(finalPoolRef.current, 2);
            options.push('안땡김');
            setCurrentOptions(getRandomFromArray(options, 3));
            setCurrentNode({ options });
            setHeroIndex(1);
            setObstacleY(0);
            return 0;
          }

          const nextNode = currentNode.next?.[selected];
          if (!nextNode) {
            setResult(selected === '안땡김' ? '게임 오버!' : `오늘은 ${selected}!`);
            clearInterval(intervalRef.current!);
            return 0;
          }

          setCurrentNode(nextNode);
          setCurrentOptions(nextNode.options);
          setHeroIndex(1);
          setObstacleY(0);
          return 0;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(intervalRef.current!);
  }, [currentNode, currentOptions, heroIndex, result]);

  return (
    <div className="game-container">
      {result && <div className="result-box">{result}</div>}

      <div
        className="falling-options-wrapper"
        style={{ transform: `translateY(${obstacleY}px)` }}
      >
        {currentOptions.map((opt, idx) => (
          <div className="falling-option" key={idx}>{opt}</div>
        ))}
      </div>

      <div
        className="hero"
        style={{ left: getHeroLeftByIndex(heroIndex, currentOptions.length) }}
      >
        <Lottie animationData={catRun} loop style={{ width: 150, height: 150 }} />
      </div>
    </div>
  );
};

export default GamePage;
