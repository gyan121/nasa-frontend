import { createGlobalStyle } from "styled-components";

import { grayChateau, athensGray } from "./colors";

import "@fontsource/montserrat";
import "./reset.css";
import { getRemUnit } from "./font-styles";

export default createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media only screen and (max-width: 1023px) {
      font-size: 10px;
     }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${athensGray};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${grayChateau};
    border-radius: ${getRemUnit(20)};
  }
`;
