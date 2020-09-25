import styled from 'styled-components';

export const Component = styled.div`
  padding: 3px;
  border: 2px solid ${({ theme }) => theme.color.red.light};
  /* background: ${({ theme }) => theme.color.red.light}; */
  color: ${({ theme }) => theme.color.red.normal};
  border-radius: 5px;
  height: 30px;
`;
