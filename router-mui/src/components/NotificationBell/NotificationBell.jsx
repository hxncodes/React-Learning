import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/icons-material/IconButton";

const NotificationBell = () => {
  return (
    <IconButton color="primary">
      <Badge badgeContent={4} color="primary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationBell;
