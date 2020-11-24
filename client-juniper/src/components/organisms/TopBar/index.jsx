import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
  },
  toolbar: {
    height: "4rem",
    minHeight: 50,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Hidden smUp implementation="css">
            <MenuIcon color="#4d94ff" />
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}
