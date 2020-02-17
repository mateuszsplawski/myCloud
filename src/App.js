import React from "react";
import WeatherApp from "./Components/WeatherApp";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

const App = () => {
  return (
    <>
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    </>
  );
};

export default App;
