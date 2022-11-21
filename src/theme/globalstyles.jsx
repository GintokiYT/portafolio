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
    background-color: ${ props => props.theme.body };
  }
`;

export default globalstyles;