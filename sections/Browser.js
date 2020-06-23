//@ts-check
import React from "react";
import { connect } from "react-redux";
import useStyles from "../components/useStyles";
const arr = [];
arr.length = 1000;
arr.fill("Hello kitty");
const Browser = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.browser}>
      <div>This is the top</div>
      {arr.map((a, idx) => (
        <div key={idx}>{a}</div>
      ))}
      <div>This is browser</div>
    </main>
  );
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
