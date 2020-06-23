//@ts-check
import React from "react";
import { connect } from "react-redux";
import useStyles from "../components/useStyles";
import { MdHome } from "react-icons/md";
import { ON_CHANGE_SCREEN } from "../redux/constant";

const TitleBar = (props) => {
  const { changeScreen } = props;
  const classes = useStyles();
  return (
    <main className={classes.titlebar}>
      <MdHome className={classes.icon} onClick={() => changeScreen("home")} />
      This is titlebar
    </main>
  );
};

const mapStateToProps = (state) => ({
  // state
});

const mapDispatchToProps = (dispatch) => ({
  changeScreen: (screen) =>
    dispatch({
      type: ON_CHANGE_SCREEN,
      screen,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
