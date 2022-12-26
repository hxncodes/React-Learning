import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import Grid from "@mui/material/Grid";
export default function Mui() {
  return (
    <Grid item xs={8}>
      <Typography variant="h3">React-MUI Crash Course</Typography>
      <Typography>Custom Typography</Typography>
      <Button>Basic Button</Button>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </Grid>
  );
}
