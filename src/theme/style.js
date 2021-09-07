import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
`;
