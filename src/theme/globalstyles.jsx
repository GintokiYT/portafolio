import { createGlobalStyle } from "styled-components";

const globalstyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
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
  }

  img {
    width: 100%;
  }

  #inicio {
    scroll-margin-top: 70px;
    overflow-x: hidden;
  }

  #sobreMi {
    scroll-margin-top: 70px;
  }

  #proyectos {
    scroll-margin-top: 70px;
  }

  #contacto {
    scroll-margin-top: 70px;
  }
`;

export default globalstyles;