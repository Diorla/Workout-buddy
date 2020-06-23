//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minHeight: "100vh",
  },
  titlebar: {
    display: "flex",
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingRight: 8,
    paddingLeft: 8,
  },
  statusbar: {
    display: "flex",
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    paddingRight: 8,
    paddingLeft: 8,
  },
  browser: {
    display: "flex",
    marginBottom: 32,
    flexDirection: "column",
  },
}));
