//@ts-check
import React from "react";
import { connect } from "react-redux";
import useStyles from "../components/useStyles";

const StatusBar = (props) => {
  const classes = useStyles();
  return <main className={classes.statusbar}>This is status bar</main>;
};

const mapStateToProps = (state) => ({
  // state
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
