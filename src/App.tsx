import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import WeatherApp from "./components/WeatherApp";
import theme from "theme/theme";
import GlobalStyle from "theme/GlobalStyle";
import store from "store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <WeatherApp />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
