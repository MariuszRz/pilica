import styled, { keyframes } from 'styled-components';
import { BiLoader } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  } 
  100% {
    opacity: 0;
  }
`;
export const Container = styled.button`
  min-width: 150px;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid ${({ theme }) => theme.color.blue.normal};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.blue.light};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.blue.normal};
  }
  &:active {
    background: ${({ theme }) => theme.color.blue.dark};
  }
`;

export const Loader = styled(BiLoader)`
  width: 18px;
  height: 18px;
  animation: ${rotate} 2s linear infinite;
`;

export const Save = styled(AiOutlineSave)`
  width: 18px;
  height: 18px;
`;

export const SaveLoad = styled(AiOutlineSave)`
  width: 18px;
  height: 18px;
  animation: ${opacity} 1.5s linear infinite;
`;
