import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { AsteroidsProvider } from "./providers/AsteroidsProvider";
import "@zendeskgarden/react-chrome/dist/styles.css";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { css } from "styled-components";

const theme = {
  "chrome.nav": css`
    width: 180px;
    background-color: rgb(39, 39, 41);
  `
};

ReactDOM.render(
  <BrowserRouter basename="/Nasa-Asteroids/">
    <AsteroidsProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AsteroidsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
