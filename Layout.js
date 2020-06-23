//@ts-check
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "./sections/TitleBar";
import Browser from "./sections/Browser";
import StatusBar from "./sections/StatusBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./themeMode";
import { connect } from "react-redux";

const Layout = (props) => {
  const isDark = Math.random() > 0.5;
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <main>
        <CssBaseline />
        <TitleBar />
        <Browser />
        <StatusBar />
      </main>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  // state
});

const mapDispatchToProps = (dispatch) => ({
  //props
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
