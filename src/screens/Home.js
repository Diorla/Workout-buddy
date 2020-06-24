//@ts-check
import React from "react";
import { connect } from "react-redux";
import { ON_CHANGE_SCREEN } from "./../redux/constant";
import useStyles from "../components/useStyles";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
} from "@material-ui/core";

const Home = (props) => {
  const classes = useStyles();
  const { changeScreen } = props;
  return (
    <main className={classes.browser}>
      <div className={classes.home}>
        <Card onClick={() => changeScreen("workout")} className={classes.card}>
          <CardMedia
            image="./assets/workouts.png"
            className={classes.cardMedia}
          />
          <Typography>Workout</Typography>
        </Card>
        <Card onClick={() => changeScreen("add")} className={classes.card}>
          <CardMedia image="./assets/form.png" className={classes.cardMedia} />
          <Typography>Add</Typography>
        </Card>
        <Card onClick={() => changeScreen("stats")} className={classes.card}>
          <CardMedia image="./assets/stats.png" className={classes.cardMedia} />
          <Typography>Stats</Typography>
        </Card>
        <Card onClick={() => changeScreen("settings")} className={classes.card}>
          <CardMedia
            image="./assets/settings.png"
            className={classes.cardMedia}
          />
          <Typography>Settings</Typography>
        </Card>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
