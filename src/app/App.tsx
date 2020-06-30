import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { StyledApp } from "./App.styled";
import { theme } from "theme/theme";
import { Routes } from "./Routes";
import { GlobalStyle } from "theme/GlobalStyle";
import { darkTheme } from "theme/darkTheme";
import Modal from "features/modal/Modal";

interface AppInterface {
  darkMode: boolean;
  error: boolean;
}

const App: React.FC<AppInterface> = ({ darkMode, error }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <StyledApp className="main">
          {error && <Modal />}
          <Routes />
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.navigation.darkMode,
  error: state.modal.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
