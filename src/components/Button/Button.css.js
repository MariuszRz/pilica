import styled, { keyframes, css } from 'styled-components';
import { BiLoader } from 'react-icons/bi';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
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
