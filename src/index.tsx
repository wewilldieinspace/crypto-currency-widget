// REACT
import React from "react";
import ReactDOM from "react-dom/client";
// STYLES
import { GlobalStyle } from "./styles/global.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"
// COMPONENTS
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
