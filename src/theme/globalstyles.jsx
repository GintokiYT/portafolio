import { createGlobalStyle } from "styled-components";

const globalstyles = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *,*::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${ ({theme}) => theme.body };
    position: relative;
    min-height: 100vh;
    transition: background .5s ease;
    scroll-margin-top: 50px;
  }
  
`;

export default globalstyles;