//@ts-check
import React from "react";
import { connect } from "react-redux";

const Workout = (props) => {
  return <main>This is workout</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
