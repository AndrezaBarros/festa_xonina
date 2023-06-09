import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./style/global";
import theme from "./style/theme";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Modal } from "./pages/modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
);
