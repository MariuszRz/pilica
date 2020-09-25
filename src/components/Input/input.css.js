import styled from 'styled-components';

export const Component = styled.input`
  padding: 5px;
  margin-top: 5px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.color.blue.light};
  &:active,
  :focus {
    border: 2px solid ${({ theme }) => theme.color.blue.dark};
  }
`;
