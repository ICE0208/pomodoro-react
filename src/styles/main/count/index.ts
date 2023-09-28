import styled from 'styled-components';

export const CountContainer = styled.div`
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

export const CountElement = styled.div`
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
