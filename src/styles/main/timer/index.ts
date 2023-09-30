import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  span {
    color: white;
    padding: 0 8px;
    font-weight: bolder;
  }
`;

export const CardContainer = styled(motion.div)<{ $big?: boolean }>`
  width: ${(props) => (props.$big ? '38vw' : '180px')};
  height: ${(props) => (props.$big ? '84vh' : '240px')};
  margin: 0 ${(props) => (props.$big ? '1vw' : 0)};
  font-size: ${(props) => (props.$big ? '20vw' : '80px')};
  position: relative;
  & + span {
    font-size: ${(props) => (props.$big ? '10vw' : '60px')};
  }
`;

export const TimeCard = styled(motion.div)`
  background-color: white;
  color: tomato;
  font-size: inherit;
  font-weight: bolder;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
