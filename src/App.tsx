import React from "react";
import WeatherApp from "./Components/WeatherApp";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalStyle from "./Theme/GlobalStyle";
import store from "./store/store";

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
