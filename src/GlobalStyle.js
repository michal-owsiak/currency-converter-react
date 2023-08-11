import { createGlobalStyle } from "styled-components";
import background from "./assets/background.png";

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
  background-image: url(${background});
  background-size: cover;
}`