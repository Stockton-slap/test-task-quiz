import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
