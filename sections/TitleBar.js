//@ts-check
import React from "react";
import { connect } from "react-redux";

const TitleBar = (props) => {
  return <main>This is titlebar</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
