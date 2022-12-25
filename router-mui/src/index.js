import React from "react";
import ReactDOM from "react-dom/client";

// React router
import { BrowserRouter } from "react-router-dom";

// MUI theme
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";

import App from "./App";

// primary color changed to Gold color
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFD700",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
