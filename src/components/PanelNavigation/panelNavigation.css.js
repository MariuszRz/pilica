import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Component = styled.div`
  margin: 0 10px 10px 10px;
  padding: 5px 15px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 5px -2px ${({ theme }) => theme.shadow};
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 5px;
  height: 25px;
  min-width: 150px;
  margin: 0 5px;
  color: ${({ theme }) => theme.color.gray.normal};
  text-decoration: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.border.normal};
  border-radius: 3px;
  background: linear-gradient(white, #ebebeb);
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(white, #ebebeb);
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    z-index: -1;
  }
  svg {
    height: 14px;
    width: 14px;
    margin: 0 5px;
  }
  &.active,
  &:hover {
    color: ${({ theme }) => theme.color.blue.normal};
    border: 1px solid ${({ theme }) => theme.color.blue.normal};
    svg {
      color: ${({ theme }) => theme.color.blue.normal};
      path {
        stroke: ${({ theme }) => theme.color.blue.light};
      }
    }
  }
`;
