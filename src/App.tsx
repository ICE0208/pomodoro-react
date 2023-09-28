import {
  ArrowPathIcon,
  PauseIcon,
  PlayIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  DEFAULT_TIME,
  countState,
  goalState,
  minuteState,
  roundState,
  secondState,
  timeState,
} from './atoms';
import { useEffect, useState } from 'react';
import {
  ButtonContainer,
  CardContainer,
  Container,
  CountContainer,
  CountElement,
  SubButton,
  SubButtonContainer,
  TimeCard,
  TimeContainer,
  TimerButton,
  Title,
} from './styles/main';
import { AnimatePresence, Variants } from 'framer-motion';

const timeCardVariant: Variants = {
  initial: { rotateY: 180, opacity: 0 },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    rotateY: -180,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function App() {
  const [time, setTime] = useRecoilState(timeState);
  const minute = useRecoilValue(minuteState);
  const second = useRecoilValue(secondState);

  const setCount = useSetRecoilState(countState);
  const round = useRecoilValue(roundState);
  const goal = useRecoilValue(goalState);

  const [isPlay, setIsPlay] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const onClick = () => {
    clearInterval(timer);
    if (!isPlay) {
      const newTimer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      setTimer(newTimer);
    }
    setIsPlay((prev) => !prev);
  };

  const onRefresh = () => {
    // 타이머 초기화
    clearInterval(timer);
    setIsPlay(false);
    setTime(DEFAULT_TIME);
  };
  const onReset = () => {
    // 타이머 초기화
    clearInterval(timer);
    setIsPlay(false);
    setTime(DEFAULT_TIME);

    // 카운트 초기화
    setCount(0);
  };

  // 타이머 다 됐을 때
  useEffect(() => {
    if (time < 0 && isPlay) {
      // 타이머 초기화
      clearInterval(timer);
      setIsPlay(false);
      setTime(DEFAULT_TIME);

      // 카운트 1 증가
      setCount((prev) => prev + 1);
    }
  }, [time, isPlay, timer, setTime, setCount]);

  return (
    <main>
      <Container>
        <Title>Pomodoro</Title>
        <TimeContainer>
          <CardContainer>
            <AnimatePresence>
              <TimeCard
                key={minute}
                variants={timeCardVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {String(minute).padStart(2, '0')}
              </TimeCard>
            </AnimatePresence>
          </CardContainer>
          <span>:</span>

          <CardContainer>
            <AnimatePresence>
              <TimeCard
                key={second}
                variants={timeCardVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {String(second).padStart(2, '0')}
              </TimeCard>
            </AnimatePresence>
          </CardContainer>
        </TimeContainer>
        <ButtonContainer>
          <TimerButton
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            {isPlay ? <PauseIcon /> : <PlayIcon />}
          </TimerButton>
          <SubButtonContainer>
            {!isPlay && (
              <>
                <SubButton
                  onClick={onRefresh}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowPathIcon />
                </SubButton>
                <SubButton
                  onClick={onReset}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TrashIcon />
                </SubButton>
              </>
            )}
          </SubButtonContainer>
        </ButtonContainer>
        <CountContainer>
          <CountElement>
            <span>{round}/4</span>
            <span>ROUND</span>
          </CountElement>
          <CountElement>
            <span>{goal}/∞</span>
            <span>GOAL</span>
          </CountElement>
        </CountContainer>
      </Container>
    </main>
  );
}

export default App;
