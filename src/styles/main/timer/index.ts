import styled from 'styled-components';

export const TimeContainer = styled.div`
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

export const TimeCard = styled.div`
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
