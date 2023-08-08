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
  background-image: url("/background.png")
  transform: scale(0.88); 
}`