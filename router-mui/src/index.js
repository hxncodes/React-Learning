import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Database from "./pages/Database";
import Functions from "./pages/Functions";
import Hosting from "./pages/Hosting";
import MachineLearning from "./pages/MachineLearning";
import Storage from "./pages/Storage";
import NotFound from "./pages/NotFound";
import Mui from "./pages/Mui";

// MUI theme
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";

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
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="authentication" element={<Authentication />} />
            <Route path="database" element={<Database />} />
            <Route path="functions" element={<Functions />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="ml" element={<MachineLearning />} />
            <Route path="storage" element={<Storage />} />
            <Route path="/mui" element={<Mui />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
