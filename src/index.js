import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import Root from "./Root";
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
