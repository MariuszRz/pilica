import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.aside`
  min-width: 224px;
  padding: 5px 0;

  nav {
    padding: 5px 10px;
    margin: 15px 0;
    border-radius: 15px;
    box-shadow: 1px 3px 4px ${({ theme }) => theme.shadow};
    border: 1px solid ${({ theme }) => theme.color.blue.light};
    h2 {
      margin: 0 5px;
    }

    ul {
      margin: 5px;
      padding: 0px;

      li {
        list-style-type: none;
        padding: 5px 5px 5px 10px;
        /* background: transparent; */
        position: relative;
        z-index: 1;
        &::before {
          content: '';
          /* padding-right: 5px; */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          border-left: 3px solid ${({ theme }) => theme.color.blue.light};
          /* background: linear-gradient(+90deg, #ebebeb 75%, white 25%); */
          z-index: -1;
        }

        &:hover {
          color: ${({ theme }) => theme.color.blue.dark};
          background: linear-gradient(-90deg, white, #ebebeb);
          cursor: pointer;
        }

        &:hover::before {
          opacity: 1;
        }
      }
    }
  }
`;

export const Main = styled.main`
  min-width: 800px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.blue.light};
  margin: 20px;
  border-radius: 15px;
  box-shadow: 1px 3px 4px ${({ theme }) => theme.shadow};
`;
