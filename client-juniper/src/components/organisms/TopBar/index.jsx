import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import icon from "./unicef-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0 2px 4px rgba(0,0,0,.075)",
  },
  toolbar: {
    height: "4rem",
    minHeight: 50,
    paddingLeft: 0,
  },
  icon: {
    width: 64,
    height: "100%",
    backgroundColor: "#2f2b36",
    textAlign: "center",
  },
  iconImage: {
    width: 48,
    paddingTop: 12,
  },
  title: {
    width: 64,
    flexGrow: 1,
  },
  hidden: {
    height: "100%",
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Hidden xsDown implementation="css" className={classes.hidden}>
          <div className={classes.icon}>
            <img src={icon} className={classes.iconImage} />
          </div>
        </Hidden>
        <div className={classes.title}>
          <Hidden smUp implementation="css">
            <IconButton>
              <MenuIcon color="#4d94ff" />
            </IconButton>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}
