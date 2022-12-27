import React from "react";
import Button from "@mui/material/Button";

// Creating a Button component with props
const CommonButton = ({ children, variant, color, disable, size, sx }) => {
  return (
    <Button
      variant={variant}
      color={color}
      disable={disable}
      size={size}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
