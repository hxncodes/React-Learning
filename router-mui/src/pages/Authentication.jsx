import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../components/Common/CommonButton";
import NotificationBell from "../components/NotificationBell/NotificationBell";

export default function Authentication() {
  const buttonStyles = {
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&.hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Grid item xs={8} styles={{ backgroundColor: "009be5" }}>
      Authentication
      <NotificationBell />
      <CommonButton variant="contained" size="large" sx={buttonStyles}>
        Add use
      </CommonButton>
      <CommonButton variant="outlined" sx={buttonStyles}>
        Web setup
      </CommonButton>
      <CommonButton variant="contained" color="secondary">
        Button
      </CommonButton>
    </Grid>
  );
}
