// MUI theme
import { createTheme } from "@mui/material";

import React from "react";

const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  palette: {
    primary: {
      main: "#bada55",
    },
  },
});

export default dashboardTheme;
