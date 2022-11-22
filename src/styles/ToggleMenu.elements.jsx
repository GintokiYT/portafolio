import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerToggle = styled.div`
  width: 26px;
  height: 55px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #161B22;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
`;

export const ContenedorButton = styled(motion.div)`
  position: absolute;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
`;

export const ButtonToggle= styled(motion.button)`
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transform: translateY(-5px);
`;