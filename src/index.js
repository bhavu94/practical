import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Silkaregular from "./fonts/Silka-Regular-&-Italic/silka-regular-webfont.woff2";
import FireBaseContextProvider from "./components/context";
import Router from "./routers";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "@progress/kendo-theme-default/dist/all.css";

const silka = {
  fontFamily: "silkaregular",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
    local('silka'),
    local('silkaregular'),
    url(${Silkaregular}) format('woff2')
  `,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "silkaregular, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [silka],
        backgroundColor: "#000",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <FireBaseContextProvider>
      <Router />
    </FireBaseContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
