import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 10px;
`;

export const TimerButton = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  cursor: pointer;
`;

export const SubButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 30px;
  height: 40px;
`;

export const SubButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  padding: 8px;
  color: whitesmoke;
  border-radius: 50%;
  cursor: pointer;
`;
