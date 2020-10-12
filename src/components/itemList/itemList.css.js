import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.shadow};
`;
export const Title = styled.h2`
  margin: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
export const Article = styled.p`
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Picture = styled.img`
  width: 150px;
  height: 100px;
  padding: 10px;
  margin: 5px;
  background: white;
`;
export const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
