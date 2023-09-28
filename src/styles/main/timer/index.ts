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

export const CardContainer = styled.div<{ $big?: boolean }>`
  width: ${(props) => (props.$big ? '36vw' : '180px')};
  height: ${(props) => (props.$big ? '48vw' : '240px')};
  margin: ${(props) => (props.$big ? '1vw' : 0)};
  font-size: ${(props) => (props.$big ? '24vw' : '80px')};
  position: relative;
  margin-top: 10px;
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
