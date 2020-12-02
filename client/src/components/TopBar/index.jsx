import React, { Fragment, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import icon from "./unicef-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EthereumContext from "../../context/EthereumContext";

const networkNames = {
  null: "Disconnected",
  1: "Main Ethereum Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
};

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
  network: {
    marginLeft: 24,
    borderColor: "#e6e7ea",
    color: "#111318",
  },
  signInButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
  createBountyButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    marginRight: 22,
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
}));

export default function TopBar(props) {
  const classes = useStyles();
  const { networkId, loggedIn, initWeb3 } = useContext(EthereumContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Hidden smDown implementation="css" className={classes.hidden}>
          <div className={classes.icon}>
            <img src={icon} className={classes.iconImage} />
          </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <Chip
            className={classes.network}
            variant="outlined"
            size="small"
            icon={
              <FiberManualRecordIcon
                style={{ color: loggedIn ? "#88ff88" : "ff8888" }}
              />
            }
            label={networkNames[networkId] || "Unknown Network"}
          />
        </Hidden>
        <div className={classes.title}>
          <Hidden mdUp implementation="css">
            <IconButton
              onClick={() => {
                if (props.setMobileOpen) {
                  props.setMobileOpen(!props.mobileOpen);
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
        {!loggedIn ? (
          <Button className={classes.signInButton} onClick={initWeb3}>
            Sign In
          </Button>
        ) : (
          <Fragment>
            <Link to="/createBounty" style={{ textDecoration: "none" }}>
              <Button className={classes.createBountyButton}>
                Create Bounty
              </Button>
            </Link>

            <FontAwesomeIcon
              icon={faBell}
              color="inherit"
              className={
                props.pageIndex === 0
                  ? classes.navIconSelected
                  : classes.navIcon
              }
              style={{
                transform: "rotate(25deg)",
                marginRight: 24,
                fontSize: 20,
                color: "#868e9c",
              }}
            />
            <Link to="/profile">
              <Avatar alt="User Name" src={null} className={classes.avatar} />
            </Link>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}
