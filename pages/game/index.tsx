// pages/game/index.tsx
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import dynamic from 'next/dynamic'

import catRun from '../../data/json/cat-run.json'
import checkMark from '../../data/json/check.json'
import xMark from '../../data/json/xmark.json'
import tree from '../../data/ts/tree'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false, // 서버 사이드에서는 로드하지 않음
})

interface StepNode {
  options: string[]
  next?: { [key: string]: StepNode }
  finalOptions?: string[]
}

const OTHER_OPTION_LABEL = '다른 메뉴'
const NO_MENU_RESULT = '오늘은 굶기'

const getNaverMapSearchUrl = (menu: string) =>
  `https://map.naver.com/p/search/${encodeURIComponent(`${menu} 맛집`)}`

const getHeroLeftByIndex = (index: number, total: number) => {
  const base = 100 / total
  const center = base * index + base / 2

  if (index === 0) return `calc(${center}% + 5%)`
  if (index === total - 1) return `calc(${center}% - 5%)`

  return `${center}%`
}

const getRandomFromArray = (
  arr: string[],
  count: number,
  exclude: Set<string> = new Set()
) => {
  const filtered = arr.filter(item => !exclude.has(item))
  const shuffled = [...filtered].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getFreshFinalOptions = (pool: string[], used: Set<string>) => {
  const remaining = pool.filter(item => !used.has(item))
  if (remaining.length <= 2) return []

  const picked = getRandomFromArray(remaining, Math.min(2, remaining.length))
  picked.forEach(item => used.add(item))

  return remaining.length > picked.length
    ? getRandomFromArray([...picked, OTHER_OPTION_LABEL], picked.length + 1)
    : picked
}

const GamePage: React.FC = () => {
  // 서버 사이드 렌더링 시 window 접근 방지
  const [isMobile, setIsMobile] = useState(false)
  const [currentNode, setCurrentNode] = useState<StepNode>(tree)
  const [obstacleY, setObstacleY] = useState(-200)
  const [result, setResult] = useState('')
  const [resultMenu, setResultMenu] = useState('')
  const [currentOptions, setCurrentOptions] = useState<string[]>(tree.options)
  const [countdown, setCountdown] = useState(3)
  const [gameStarted, setGameStarted] = useState(false)
  const [falling, setFalling] = useState(true)
  const [readyNextStep, setReadyNextStep] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [heroIndex, setHeroIndex] = useState(1)
  const [round, setRound] = useState(1)
  const [pickHistory, setPickHistory] = useState<string[]>([])
  const [feedback, setFeedback] = useState('떨어지는 선택지 중 오늘 끌리는 쪽으로 움직여보세요')
  const [impact, setImpact] = useState(false)

  const heroIndexRef = useRef(1)
  const intervalRef = useRef<number | null>(null)
  const finalPoolRef = useRef<string[]>([])
  const usedOptionsRef = useRef<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  /** 기준 높이 480px일 때 장애물 정지 Y = 355 */
  const collisionYRef = useRef(355)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const syncCollision = () => {
      const h = el.clientHeight
      if (h > 0) {
        collisionYRef.current = Math.round((h * 355) / 480)
      }
    }
    syncCollision()
    const ro = new ResizeObserver(syncCollision)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // 클라이언트에서만 window.innerWidth 사용
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const moveHero = useCallback(
    (direction: 'left' | 'right') => {
      const nextIndex =
        direction === 'left'
          ? Math.max(0, heroIndexRef.current - 1)
          : Math.min(currentOptions.length - 1, heroIndexRef.current + 1)
      heroIndexRef.current = nextIndex
      setHeroIndex(nextIndex)
    },
    [currentOptions.length]
  )

  const moveHeroTo = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(currentOptions.length - 1, index))
    heroIndexRef.current = nextIndex
    setHeroIndex(nextIndex)
  }, [currentOptions.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted || !falling) return
      if (e.key === 'ArrowLeft') moveHero('left')
      if (e.key === 'ArrowRight') moveHero('right')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moveHero, gameStarted, falling])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!gameStarted || !falling) return
      const board = containerRef.current
      if (!board) return
      const rect = board.getBoundingClientRect()
      const touchX = e.touches[0].clientX
      const midX = rect.left + rect.width / 2
      moveHero(touchX > midX ? 'right' : 'left')
    }
    window.addEventListener('touchstart', handleTouchStart)
    return () => window.removeEventListener('touchstart', handleTouchStart)
  }, [moveHero, gameStarted, falling])

  useEffect(() => {
    if (!gameStarted || result || !falling) return

    setFadeOut(false)
    intervalRef.current = window.setInterval(() => {
      setObstacleY(prev => {
        const speed = Math.min(18, 8 + Math.floor(round / 2))
        const next = prev + speed
        const hitY = collisionYRef.current
        if (next >= hitY) {
          clearInterval(intervalRef.current!)
          setFadeOut(true)
          setImpact(true)
          setTimeout(() => setImpact(false), 240)
          setTimeout(() => setReadyNextStep(true), 200)
          return hitY
        }
        return next
      })
    }, 60)

    return () => clearInterval(intervalRef.current!)
  }, [falling, result, gameStarted, round])

  const restartGame = () => {
    setCurrentNode(tree)
    setObstacleY(-200)
    setResult('')
    setResultMenu('')
    setCurrentOptions(tree.options)
    setCountdown(3)
    setGameStarted(false)
    setFalling(true)
    setReadyNextStep(false)
    setFadeOut(false)
    setHeroIndex(1)
    setRound(1)
    setPickHistory([])
    setFeedback('떨어지는 선택지 중 오늘 끌리는 쪽으로 움직여보세요')
    setImpact(false)
    heroIndexRef.current = 1
    finalPoolRef.current = []
    usedOptionsRef.current.clear()
  }

  useEffect(() => {
    if (!readyNextStep || result || !gameStarted) return
    setReadyNextStep(false)
    setFalling(false)

    const selected = currentOptions[heroIndexRef.current]
    const isOtherOption = selected === OTHER_OPTION_LABEL

    setRound(prev => prev + 1)
    if (!isOtherOption) {
      setPickHistory(prev => [...prev, selected].slice(-3))
    }
    setFeedback(
      isOtherOption
        ? '후보를 다시 섞습니다. 조금 더 끌리는 메뉴를 찾아볼게요'
        : `${selected} 쪽으로 좁혀볼게요`
    )

    if (
      finalPoolRef.current.length > 0 &&
      isOtherOption
    ) {
      const newOptions = getFreshFinalOptions(
        finalPoolRef.current,
        usedOptionsRef.current
      )

      if (newOptions.length === 0) {
        setResult(NO_MENU_RESULT)
        return
      }

      setCurrentOptions(newOptions)
      setCurrentNode({ options: newOptions })
      moveHeroTo(Math.floor(newOptions.length / 2))
      setObstacleY(-200)
      setTimeout(() => setFalling(true), 10)
      return
    }

    const nextNode = currentNode.next?.[selected]
    if (!nextNode) {
      if (!isOtherOption) {
        setResultMenu(selected)
      }
      setResult(
        isOtherOption
          ? NO_MENU_RESULT
          : `오늘은 ${selected}!`
      )
      return
    }

    if (nextNode.finalOptions) {
      finalPoolRef.current = nextNode.finalOptions.filter(
        item => item !== OTHER_OPTION_LABEL
      )
      usedOptionsRef.current.clear()

      const newOptions = getFreshFinalOptions(
        finalPoolRef.current,
        usedOptionsRef.current
      )

      if (newOptions.length === 0) {
        setResult(NO_MENU_RESULT)
        return
      }

      setCurrentOptions(newOptions)
      setCurrentNode({ options: newOptions })
      moveHeroTo(Math.floor(newOptions.length / 2))
    } else {
      setCurrentOptions(nextNode.options)
      setCurrentNode(nextNode)
      moveHeroTo(Math.floor(nextNode.options.length / 2))
    }

    setObstacleY(-200)
    setTimeout(() => setFalling(true), 10)
  }, [
    readyNextStep,
    gameStarted,
    result,
    currentNode,
    currentOptions,
    moveHeroTo,
  ])

  useEffect(() => {
    if (countdown <= 0) {
      setGameStarted(true)
      return
    }
    const timer = window.setTimeout(
      () => setCountdown(prev => prev - 1),
      500
    )
    return () => clearTimeout(timer)
  }, [countdown])

  const isGameOver = result === NO_MENU_RESULT
  const speedLevel = Math.min(7, 1 + Math.floor(round / 2))
  const historyLabel =
    pickHistory.length > 0 ? pickHistory.join(' > ') : '아직 선택 전'

  return (
    <div className="game-wrap">
      <div className="game-hud" aria-label="게임 현황">
        <span>선택 {round}</span>
        <span>속도 {speedLevel}</span>
        <span>{historyLabel}</span>
      </div>
      <div className="game-feedback">{feedback}</div>
      <div ref={containerRef} className="game-container">
      {!gameStarted && (
        <>
          <div className="countdown-overlay">
            <div className="countdown-number">
              {countdown > 0 ? countdown : '시작!'}
            </div>
          </div>
          <div className="touch-guide">
            <span className="highlight">방향키</span> 또는{' '}
            <span className="highlight">터치</span>로 고양이를 좌우로
            움직여보세요!
          </div>
        </>
      )}

      {result && (
        <div
          className={`result-box enhanced${
            isGameOver ? ' game-over' : ''
          }`}
        >
          {result}
          {resultMenu && (
            <a
              className="map-link-button"
              href={getNaverMapSearchUrl(resultMenu)}
              target="_blank"
              rel="noreferrer"
            >
              네이버지도에서 근처 보기
            </a>
          )}
          <button
            className="restart-button"
            onClick={restartGame}
          >
            다시 하기
          </button>
        </div>
      )}

      {falling && (
        <div
          className={`falling-options-wrapper ${
            fadeOut ? 'fade-out' : ''
          }`}
          style={{ transform: `translateY(${obstacleY}px)` }}
        >
          {currentOptions.map((opt, idx) => (
            <div
              key={idx}
              className={`falling-option${
                opt === OTHER_OPTION_LABEL
                  ? ' option-dimmed'
                  : ''
              }${impact && idx === heroIndex ? ' option-selected' : ''
              }`}
              style={{ flex: 1 }}
            >
              <div className="falling-content">
                <span
                  className="option-label"
                  style={{
                    fontSize: isMobile
                      ? opt.length >= 6
                        ? '11px'
                        : opt.length >= 5
                        ? '14px'
                        : '16px'
                      : opt.length >= 6
                      ? '15px'
                      : opt.length >= 5
                      ? '17px'
                      : '20px',
                  }}
                >
                  {opt}
                </span>
                <div
                  className={
                    opt === OTHER_OPTION_LABEL
                      ? 'option-icon-x'
                      : 'option-icon-check'
                  }
                >
                  <Lottie
                    animationData={
                      opt === OTHER_OPTION_LABEL ? xMark : checkMark
                    }
                    loop
                    autoplay
                    style={
                      opt === OTHER_OPTION_LABEL
                        ? {
                            width: isMobile ? '20px' : '25px',
                            height: isMobile ? '20px' : '25px',
                          }
                        : {
                            width: isMobile ? '40px' : '60px',
                            height: isMobile ? '40px' : '60px',
                          }
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {impact && (
        <div
          className="selection-burst"
          style={{
            left: getHeroLeftByIndex(heroIndex, currentOptions.length),
          }}
        >
          <span />
          <span />
          <span />
        </div>
      )}

      <div className="ground" />
      <div
        className={`hero${impact ? ' hero-picked' : ''}`}
        style={{
          left: getHeroLeftByIndex(
            heroIndex,
            currentOptions.length
          ),
        }}
      >
        <Lottie
          animationData={catRun}
          loop
          style={{ width: isMobile ? 100 : 145, height: isMobile ? 100 : 145 }}
        />
      </div>

      </div>
    </div>
  )
}

export default GamePage
