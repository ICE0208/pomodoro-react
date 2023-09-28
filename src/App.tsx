import styled from 'styled-components';
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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: tomato;
`;

const Title = styled.h1`
  font-size: 52px;
  color: white;
  font-weight: bold;
  margin-top: 60px;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  span {
    color: white;
    padding: 0 8px;
    font-size: 60px;
    font-weight: bolder;
  }
`;

const TimeCard = styled.div`
  background-color: white;
  color: tomato;
  padding: 80px 0;
  font-size: 80px;
  font-weight: bolder;
  border-radius: 18px;
  width: 180px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 10px;
`;

const TimerButton = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
`;

const SubButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 30px;
  height: 40px;
`;

const SubButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  padding: 8px;
  color: whitesmoke;
  border-radius: 50%;
`;

const CountContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 90px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 60px;
`;

const CountElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span:nth-child(1) {
    font-size: 28px;
    opacity: 0.8;
  }
  span:nth-child(2) {
    font-size: 24px;
  }
`;

export default App;
