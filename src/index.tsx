/**
 * Import fonts for material UI
 */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import NoSsr from "@material-ui/core/NoSsr";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import defaultTheme from "./lib/theme/defaultTheme";
import "./locale";

ReactDOM.render(
  <React.StrictMode>
    <NoSsr>
      <ReduxProvider store={store}>
        <MuiThemeProvider theme={defaultTheme}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </ReduxProvider>
    </NoSsr>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
