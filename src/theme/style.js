import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import FiraBold from "../fonts/FiraSans-Bold.ttf";
import FiraSemiBold from "../fonts/FiraSans-SemiBold.ttf";
import FiraMedium from "../fonts/FiraSans-Medium.ttf";
import FiraRegular from "../fonts/FiraSans-Regular.ttf";

export const AppWrapper = styled.div`
  background: #fff;
`;

export const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar { display: none; }
  html,body {
    height: 100%;
    padding: 0;
    margin: 0;
    scrollbar-width: none;
    background: #fff;
  }
  p {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  @font-face {
    font-family: "FiraSans-Bold";
    src: url(${FiraBold}) format("opentype");
  }

  @font-face {
    font-family: "FiraSans-SemiBold";
    src: url(${FiraSemiBold}) format("opentype");
  }

  @font-face {
    font-family: "FiraSans-Medium";
    src: url(${FiraMedium}) format("opentype");
  }

  @font-face {
    font-family: "FiraSans-Regular";
    src: url(${FiraRegular}) format("opentype");
  }
`;
