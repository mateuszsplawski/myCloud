import React from "react";

import { StyledApp } from "./App.styled";
import { Logo } from "components/Logo/Logo";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import { theme } from "theme/theme";
import { Routes } from "./Routes";
import { GlobalStyle } from "theme/GlobalStyle";

interface AppInterface {}

export const App: React.FC<AppInterface> = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledApp className="main">
          <Logo />
          <Routes />
        </StyledApp>
      </ThemeProvider>
    </Provider>
  );
};
