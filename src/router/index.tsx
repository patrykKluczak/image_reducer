import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "../pages/home";
import { AppWrapper, GlobalStyle } from "../theme/style";
import { variables } from "../theme/variables";

const RouterApp = () => {
  return (
    <ThemeProvider theme={variables}>
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default RouterApp;
