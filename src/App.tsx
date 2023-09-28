import styled from 'styled-components';
import { PlayIcon } from '@heroicons/react/20/solid';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { minuteState, secondState, timeState } from './atoms';

function App() {
  const setTime = useSetRecoilState(timeState);
  const minute = useRecoilValue(minuteState);
  const second = useRecoilValue(secondState);

  return (
    <main>
      <Container>
        <Title>Pomodoro</Title>
        <TimeContainer>
          <TimeCard>{String(minute).padStart(2, '0')}</TimeCard>
          <span>:</span>
          <TimeCard>{String(second).padStart(2, '0')}</TimeCard>
        </TimeContainer>
        <ButtonArea>
          <Button>
            <PlayIcon />
          </Button>
        </ButtonArea>
        <CountContainer>
          <CountElement>
            <span>1/4</span>
            <span>ROUND</span>
          </CountElement>
          <CountElement>
            <span>0/12</span>
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

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 10px;
`;

const Button = styled.div`
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
