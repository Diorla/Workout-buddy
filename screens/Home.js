//@ts-check
import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return <main>This is home</main>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
