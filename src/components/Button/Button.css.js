import styled from 'styled-components';

export const Container = styled.button`
  padding: 5px;
  margin: 5px 0;
  border: 1px solid ${({ theme }) => theme.color.blue.normal};
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
