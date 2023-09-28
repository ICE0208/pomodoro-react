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
  Container,
  CountContainer,
  CountElement,
  SubButtonArea,
  SubButtonContainer,
  TimeCard,
  TimeContainer,
  TimerButton,
  Title,
} from './styles/main';

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

  // 타이머 다 됐을 때
  useEffect(() => {
    if (time < 0 && isPlay) {
      // 타이머 초기화
      clearInterval(timer!);
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
          <TimeCard>{String(minute).padStart(2, '0')}</TimeCard>
          <span>:</span>
          <TimeCard>{String(second).padStart(2, '0')}</TimeCard>
        </TimeContainer>
        <ButtonContainer>
          <TimerButton onClick={onClick}>
            {isPlay ? <PauseIcon /> : <PlayIcon />}
          </TimerButton>
          <SubButtonContainer>
            {!isPlay && (
              <>
                <SubButtonArea>
                  <ArrowPathIcon />
                </SubButtonArea>
                <SubButtonArea>
                  <TrashIcon />
                </SubButtonArea>
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
