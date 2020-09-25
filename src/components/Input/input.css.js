import styled from 'styled-components';

export const Component = styled.input`
  padding: 5px;
  margin-top: 5px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.color.blue.light};
  border-radius: 5px;
  transition: border 0.2s ease-in-out;
  &:active,
  :focus {
    border: 2px solid ${({ theme }) => theme.color.blue.dark};
  }
`;
