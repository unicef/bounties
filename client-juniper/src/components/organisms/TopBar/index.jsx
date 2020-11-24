import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import icon from "./unicef-logo.png";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0 2px 4px rgba(0,0,0,.075)",
  },
  avatar: {
    border: "solid 3px #ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  },
  toolbar: {
    height: "4rem",
    minHeight: 50,
    paddingLeft: 0,
    paddingRight: "1rem",
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
            <IconButton
              onClick={() => {
                if (props.setMobileOpen) {
                  props.setMobileOpen(!props.mobileOpen);
                }
              }}
            >
              <MenuIcon color="#4d94ff" />
            </IconButton>
          </Hidden>
        </div>
        <FontAwesomeIcon
          icon={faBell}
          color="inherit"
          size="2x"
          className={
            props.pageIndex === 0 ? classes.navIconSelected : classes.navIcon
          }
          style={{
            transform: "rotate(25deg)",
            marginRight: 24,
            color: "#868e9c",
          }}
        />
        <Avatar alt="User Name" src={null} className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
}
