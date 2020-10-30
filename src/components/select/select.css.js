import styled from 'styled-components';

export const Component = styled.select`
  width: 100%;
  padding: 5px;
  margin: 10px 0;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.border.normal};
  &:active,
  :focus {
    border: 1px solid ${({ theme }) => theme.border.active};
    box-shadow: inset 0 0 4px ${({ theme }) => theme.activeShadow};
  }
`;

export const Item = styled.option`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
