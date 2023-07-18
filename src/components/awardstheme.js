"use client";
import { createTheme } from "@mui/material";

const awwwardsTheme = createTheme({
  palette: {
    primary: {
      main: "#4b4bff", // Awwwards primary color
    },
    secondary: {
      main: "#ff5a5a", // Awwwards secondary color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    // Define your typography styles here
    // You can use typography variants like h1, h2, h3, etc.
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none", // Disable button text uppercase transformation
      },
      containedPrimary: {
        color: "#ffffff", // Text color for primary contained buttons
      },
      outlined: {
        borderColor: "#4b4bff", // Border color for outlined buttons
      },
    },
    // Add more overrides for other Material-UI components to match the Awwwards style
  },
});

export default awwwardsTheme;
