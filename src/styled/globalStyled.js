import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body,* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:  'Roboto','Segoe UI', sans-serif;
  
  }
  body{ 
    font-size: 16px;
  }
  html {
    scroll-behavior: smooth;
  }
  ul , ol, li {
    margin-left:20px;
  }
  a{
    text-decoration: none;
  }
  .container{
    max-width: 1024px;
    margin: 0 auto;;
  }
  .hide
  {
    display:none;
  }
 
`;
export default GlobalStyle;
