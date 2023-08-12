import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background: linear-gradient(90deg, rgba(0,86,235,1) 0%, rgba(0,138,233,1) 100%);
}`