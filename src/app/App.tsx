import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { StyledApp } from "./App.styled";
import { theme } from "theme/theme";
import { Routes } from "./Routes";
import { GlobalStyle } from "theme/GlobalStyle";
import Navigation from "features/navigation/Navigation";
import { darkTheme } from "theme/darkTheme";

interface AppInterface {
  darkMode: boolean;
}

const App: React.FC<AppInterface> = ({ darkMode }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <StyledApp className="main">
          <Navigation />
          <Routes />
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({ darkMode: state.navigation.darkMode });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
