//@ts-check

import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#7f97a2",
      main: "#607d8b", //cadet blue
      dark: "#435761",
      contrastText: "white",
    },
    secondary: {
      light: "#ffa733",
      main: "#ff9100", // amber
      dark: "#b26500",
      contrastText: "black",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      light: "#7f97a2",
      main: "#607d8b", //cadet blue
      dark: "#435761",
      contrastText: "white",
    },
    primary: {
      light: "#ffa733",
      main: "#ff9100", // amber
      dark: "#b26500",
      contrastText: "black",
    },
  },
});
