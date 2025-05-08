import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectPage.css';


interface Step {
  question: string;
  options: string[];
}

const getSteps = (selections: string[]): Step[] => {
  const steps: Step[] = [];

  const first = selections[0];
  const second = selections[1];
  const third = selections[2];

  steps.push({
    question: '뜨끈한 국물 vs 국물은 별로',
    options: ['국물', '안국물'],
  });

  if (first === '국물') {
    steps.push({
      question: '국물 있는 밥 vs 국물 있는 면',
      options: ['밥', '면'],
    });

    if (second === '밥') {
      steps.push({
        question: '탕 / 찌개 중 어떤 게 더 끌리세요?',
        options: ['탕', '찌개'],
      });

      if (third === '탕') {
        steps.push({
          question: '탕 종류를 골라보세요',
          options: [
            '🐖 돼지국밥', '🐷 순대국', '🧠 양평해장국', '🦴 뼈해장국',
            '🥔 감자탕', '🌱 콩나물국밥', '🥩 소고기국밥', '🌶️ 육개장',
            '🍖 갈비탕', '🐂 곰탕', '🍶 설렁탕', '🦵 도가니탕',
            '🐟 추어탕', '❄️🐟 동태탕', '🎣 복국', '🍗 삼계탕'
          ],
        });
      }

      if (third === '찌개') {
        steps.push({
          question: '찌개 종류를 골라보세요',
          options: [
            '🫘 된장찌개', '🥬 김치찌개', '🧄 청국장', '🥓 부대찌개',
            '🍲 순두부찌개','🥩 짜글이', 
        ]
        });
      }
    }

    if (second === '면') {
      steps.push({
        question: '차가운 면 vs 뜨거운 면',
        options: [
         '차가운 면', '따뜻한면',
          ],
      });
      if (third === '차가운 면') {
        steps.push({
          question: '차가운 면 종류를 골라보세요',
          options: [
          '❄️ 물냉면', '🍜물밀면', '❄️🥬 동치미국수', '🥢 메밀소바', 
          '🫘🥛 콩국수', '🐔 초계국수', '❄️🌶️🍜 냉짬뽕', '❄️🥢 물막국수'
          ],
        });
      }

      if (third === '따뜻한 면') {
        steps.push({
          question: '따뜻한 면 종류를 골라보세요',
          options: [
            '🍜 우동', '🍜 잔치국수', '🍜 칼국수', '🌶️🍜 짬뽕', 
            '🍥 라멘', '🐖🍜 돈코츠라멘', '🥢🍲 쌀국수', '🥢🍜 해장 파스타'
        ]
        });
      }
    }
  }

  if (first === '안국물') {
    steps.push({
      question: '어떤 식사 종류가 좋으세요?',
      options: ['밥', '면', '빵', '고기'],
    });

    if (second === '밥') {
      steps.push({
        question: '밥 종류를 골라보세요',
        options: [
          '🍱 도시락', '🍛 카레', '🍳 오므라이스', '🥢 제육덮밥',
          '🍚 비빔밥', '🥬 김치볶음밥', '🍗 치킨마요덮밥', '🍖 규동',
          '🍤 새우볶음밥', '🥩 스테이크덮밥', '🌶️ 낙지덮밥', '🍖 차슈덮밥',
        ]
      });
    }

    if (second === '면') {
      steps.push({
        question: '자작한 면 종류를 골라보세요',
        options: [
          '🍝 미트파스타', '🧄 알리오올리오', '🦐 팟타이', '🍜 짜장면',
          '🌶️ 비빔국수', '🥓 까르보나라', '🥬 쫄면', '🍳 볶음우동',
          '🥡 야끼우동', '🧀 크림파스타',]
      });
    }

    if (second === '빵') {
      steps.push({
        question: '빵 종류를 골라보세요',
        options: [
          '🍔 맥도날드', '👑 버거킹', '🐔 맘스터치', '🍟 롯데리아',
          '🥪 서브웨이', '🍞 이삭토스트', '🍳 에그드랍','🥐 파리바게뜨',
          '🍕 도미노피자', '🍕 피자헛', '🧀 미스터피자', '🧄 파파존스',
        ]
      });
    }

    if (second === '고기') {
      steps.push({
        question: '고기 종류를 골라보세요',
        options: ['돼지', '소고기', '닭'],
      });
    }
  }

  return steps;
};

const SelectPage: React.FC = () => {
  const [selections, setSelections] = useState<string[]>([]);
  const navigate = useNavigate();

  const steps = getSteps(selections);
  const step = selections.length;
  const currentStep = steps[step];

  const handleSelect = (option: string) => {
    const newSelections = [...selections, option];
    const nextSteps = getSteps(newSelections);
    setSelections(newSelections);

    if (newSelections.length >= nextSteps.length) {
      const finalAnswer = option;
      navigate('/result', {
        state: {
          selections: newSelections,
          result: finalAnswer,
        },
      });
    }
  };

  if (!currentStep) return null;

  return (
    <div className="select-page">
      <h2>{currentStep.question}</h2>
      <div className="option-grid">
        {currentStep.options.map((opt) => (
          <div
            key={opt}
            className="option-card"
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
