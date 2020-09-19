import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  min-height: 90vh;
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

    h2 {
      margin: 0 5px;
    }

    ul {
      margin: 5px;
      padding: 0px;

      li {
        list-style-type: none;
        padding-left: 5px;

        &::before {
          content: '';
          padding-right: 5px;
          opacity: 0;
          transition: opacity 0.1s ease-in-out;
          border-left: 2px solid ${({ theme }) => theme.color.blue.light};
        }

        &:hover {
          color: ${({ theme }) => theme.color.blue.light};
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
  padding: 20px 10px;
`;
