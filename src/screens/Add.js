//@ts-check
import React from "react";
import { connect } from "react-redux";

const Add = (props) => {
  return <main>This is add</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);
