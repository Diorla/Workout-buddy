//@ts-check
import React from "react";
import { connect } from "react-redux";

const Browser = (props) => {
  return <main>This is browser</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Browser);