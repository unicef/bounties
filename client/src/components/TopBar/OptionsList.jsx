import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "1.25em",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItemIcon: {
    minWidth: 32,
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/profile" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to="/account" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItem>
        </Link>
        <Link
          onClick={() => {
            window.location.reload();
          }}
          className={classes.link}
        >
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
