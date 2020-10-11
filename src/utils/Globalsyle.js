import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing:border-box;
    font-weight: 200;

  }

  body{
    padding:0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${({ theme }) => theme.color.gray.normal};
    margin: 0 0 0 0;
  }

  article{
    max-width: 1024px; 
    margin: 0 auto;
  }
  strong{
    font-weight: 700;
  }
  h1{
    font-size: 32px;
  }
  /* .ck-content{
    height: 300px;
  }  */
`;
