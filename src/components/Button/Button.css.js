import styled from 'styled-components';

export const Container = styled.button`
  min-width: 150px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${({ theme }) => theme.color.blue.normal};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.blue.light};
  color: white;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.blue.normal};
  }
  &:active {
    background: ${({ theme }) => theme.color.blue.dark};
  }
`;
