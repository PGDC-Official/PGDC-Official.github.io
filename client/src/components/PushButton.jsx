import React from "react";
import { Box, Button } from "@mui/joy";

function PushButton({ children, onClick }) {
  return (
    // <Box
    //   component="button"
    //   sx={{
    //     position: "relative",
    //     background: "transparent",
    //     padding: "0",
    //     border: "none",
    //     cursor: "pointer",
    //     outlineOffset: "4px",
    //     outlineColor: "deeppink",
    //     transition: "filter 250ms",
    //     WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    //     "&:hover": {
    //       filter: "brightness(110%)",
    //     },
    //     "&:focus:not(:focus-visible)": {
    //       outline: "none",
    //     },
    //   }}
    //   className="pushable"
    // >
    //   {/* Shadow */}
    //   <Box
    //     className="shadow"
    //     sx={{
    //       position: "absolute",
    //       top: "0",
    //       left: "0",
    //       height: "100%",
    //       width: "100%",
    //       background: "hsl(226, 25%, 69%)",
    //       borderRadius: "6px",
    //       filter: "blur(1.5px)",
    //       willChange: "transform",
    //       transform: "translateY(1px)",
    //       transition: "transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1)",
    //       "&.pushable:hover": {
    //         transform: "translateY(3px)",
    //         transition: "transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5)",
    //       },
    //       "&.pushable:active": {
    //         transform: "translateY(0.5px)",
    //         transition: "transform 34ms",
    //       },
    //     }}
    //   />
    //   <Box
    //     className="edge"
    //     sx={{
    //       position: "absolute",
    //       top: "0",
    //       left: "0",
    //       height: "100%",
    //       width: "100%",
    //       borderRadius: "6px",
    //       background:
    //         "linear-gradient(to right, hsl(211, 100%, 30%) 0%, hsl(211, 100%, 40%) 8%, hsl(211, 100%, 30%) 92%, hsl(211, 100%, 20%) 100%)",
    //     }}
    //   />

    //   {/* Front */}
    //   <Button
    //     className="front"
    //     sx={{
    //       display: "block",
    //       position: "relative",
    //       borderRadius: "6px",
    //       // background: "hsl(248, 53%, 58%)",
    //       padding: "10px 20px", // Smaller padding
    //       color: "white",
    //       fontWeight: "600",
    //       textTransform: "uppercase",
    //       letterSpacing: "1px", // Reduced spacing
    //       fontSize: "0.75rem", // Smaller font size
    //       transform: "translateY(-3px)",
    //       transition: "transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1)",
    //       "&:hover": {
    //         transform: "translateY(-4px)",
    //         transition: "transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5)",
    //         // hover don't change the color of the button using default MUI primary color
    //         background: "rgb(11, 107, 203)",
    //       },
    //       "&:active": {
    //         transform: "translateY(-1px)",
    //         transition: "transform 34ms",
    //       },
    //     }}
    //   >
    //     {children}
    //   </Button>
    // </Box>
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
