import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./loginpage"
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LoginPage/>
    <App />
  </React.StrictMode>,
  rootElement
);
