//@ts-check
import React from "react";
import { connect } from "react-redux";

const Stats = (props) => {
  return <main>This is stats</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
