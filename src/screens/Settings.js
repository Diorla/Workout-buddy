//@ts-check
import React from "react";
import { connect } from "react-redux";

const Settings = (props) => {
  return <main>This is settings</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
