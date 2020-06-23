//@ts-check
import React from "react";
import { connect } from "react-redux";
import Home from "./../screens/Home";
import Add from "./../screens/Add";
import Settings from "./../screens/Settings";
import Stats from "./../screens/Stats";
import Workout from "./../screens/Workout";

const Browser = (props) => {
  const { screen } = props;
  if (screen === "add") return <Add />;
  if (screen === "settings") return <Settings />;
  if (screen === "stats") return <Stats />;
  if (screen === "workout") return <Workout />;
  else return <Home />;
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
