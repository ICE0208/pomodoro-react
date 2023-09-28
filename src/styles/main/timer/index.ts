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
    font-size: 60px;
    font-weight: bolder;
  }
`;

export const CardContainer = styled.div`
  width: 180px;
  height: 240px;
  position: relative;
  margin-top: 10px;
`;

export const TimeCard = styled(motion.div)`
  background-color: white;
  color: tomato;
  padding: 80px 0;
  font-size: 80px;
  font-weight: bolder;
  border-radius: 20px;
  width: 180px;
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
`;
