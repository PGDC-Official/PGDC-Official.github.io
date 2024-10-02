import React from "react";
import { Box, Button } from "@mui/joy";

function PushButton({ children, onClick }) {
  return (
    <Button
      className="button-54"
      role="button"
      onClick={onClick}
      sx={{
        fontSize: "16px",
        letterSpacing: "2px",
        fontWeight: 700,
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#000",
        backgroundColor: "transparent",
        cursor: "pointer",
        border: "2px solid",
        borderRadius: 0,
        padding: "0.25em 0.5em",
        boxShadow:
          "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
        position: "relative",
        userSelect: "none",
        "-webkit-user-select": "none",
        touchAction: "manipulation",

        "&:hover": {
          "& > a": {
            textDecoration: "underline",
          },
          backgroundColor: "transparent",
        },

        "&:active": {
          boxShadow: "0px 0px 0px 0px",
          top: "5px",
          left: "5px",
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default PushButton;
