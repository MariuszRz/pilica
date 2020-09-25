import styled from 'styled-components';

export const Component = styled.input`
  padding: 10px;
  margin-left: 5px;
  border: 2px solid ${({ theme }) => theme.color.blue.light};
  &:active,
  :focus {
    border: 2px solid ${({ theme }) => theme.color.blue.dark};
  }
`;
