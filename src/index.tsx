import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/list.css";
import "./styles/loader.css";
import App from "./App";
import store from "./common/store/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
