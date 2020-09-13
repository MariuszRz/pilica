import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 3px 6px ${({ theme }) => theme.shadow};
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 47px;
    margin: 10px 15px;
  }
  h1 {
    font-size: 38px;
    margin: 0 5px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 10px 10px;
  height: 100%;
  min-width: 150px;
  color: ${({ theme }) => theme.color.gray.normal};
  text-decoration: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-bottom: 5px solid ${({ theme }) => theme.color.blue.normal};
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }
  &:last-child {
    border-right: 0px solid ${({ theme }) => theme.color.gray.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.color.blue.normal};
  }
  &:hover::before {
    opacity: 1;
  }
  &.active {
    color: ${({ theme }) => theme.color.blue.light};
  }
  &.active::before {
    opacity: 1;
  }
`;
