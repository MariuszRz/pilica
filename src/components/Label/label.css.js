import styled from 'styled-components';

export const Component = styled.label`
  width: min-content;
  padding-left: 5px;
  margin: 5px;
  /* border: 1px solid ${({ theme }) => theme.color.blue.normal}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.color.blue.light};
  color: white;
`;
