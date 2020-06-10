import { createGlobalStyle } from "styled-components"
import { defaultTheme } from "./themes"
import { normalize } from "polished"
import { typescale, thin } from "./typography"

export const GlobalStyle = createGlobalStyle`
${normalize()}

html {
  font-size: 25px;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: ${defaultTheme.white}
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  font-family: ${defaultTheme.serif};
}

h1 {
  font-family: ${defaultTheme.sansSerif};
  font-size: ${typescale.scaleH1};
  font-weight: ${thin};
  line-height: 1.1;
}
h2 {
  font-family: ${defaultTheme.sansSerif};
  font-size: ${typescale.scaleH2};
  font-weight: ${thin};
  line-height: 1.1;
}
h3 {
  font-family: ${defaultTheme.sansSerif};
  font-size: ${typescale.scaleH3};
  font-weight: ${thin};
  line-height: 1.1;
}
h4 {
  font-family: ${defaultTheme.sansSerif};
  font-size: ${typescale.scaleH4};
  font-weight: ${thin};
  line-height: 1.1;
}
h5 {
  font-family: ${defaultTheme.sansSerif};
  font-size: ${typescale.scaleH5};
  font-weight: ${thin};
  line-height: 1.1;
}

p {
  font-size: ${typescale.scaleP};
  line-height: 1.45;
  margin-bottom: 1.5rem;
  a {
    color: ${defaultTheme.black};
    font-size: 0.85rem;
    font-weight: bold;
    text-decoration-color: ${defaultTheme.blue};
    transition: 300ms;
    &:hover {
      color: ${defaultTheme.blue};
      text-decoration-color: ${defaultTheme.black};
    }
  }
}

button {
  font-family: ${defaultTheme.sansSerif};
  text-decoration: none;
  background-color: transparent;
  font-weight: 300;
  flex: 1 1 auto;
  padding: 5px 15px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 300ms;
  z-index: 1;
  color: initial;
  border: 2px solid initial;
  &:after {
    position: absolute;
    transition: 300ms;
    content: "";
    width: 0;
    bottom: -2px;
    height: 105%;
    left: -13%;
    transform: skewX(12deg);
    z-index: -1;
    background-color: transparent;
  }
  &:hover {
    cursor: pointer;
    color: ini;
    &:after {
      left: -10%;
      width: 120%;
    }
  }
}
`
