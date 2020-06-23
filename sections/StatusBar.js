//@ts-check
import React from "react";
import { connect } from "react-redux";

const StatusBar = (props) => {
  return <main>This is status bar</main>;
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
