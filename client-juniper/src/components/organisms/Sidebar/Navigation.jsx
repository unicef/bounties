import React, { useState, Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: "4rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    height: "1.6em",
    minWidth: 40,
  },
  navIcon: {
    fontSize: 21,
    width: "1.5em",
    color: "#888888",
  },
  navIconSelected: {
    fontSize: 21,
    width: "1.5em",
    color: "#ffffff",
  },
  navText: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  navTextSelected: {
    color: "#ffffff",
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  tosText: {
    color: "#888888",
    paddingLeft: 16,
    fontSize: 14,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0,
    textAlign: "left",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  navLink: {
    height: 55,
    paddingLeft: 20,

    borderLeft: "solid 4px #2f2b36",
  },
  navLinkSelected: {
    height: 55,
    paddingLeft: 20,
    color: "#ffffff",
    borderLeft: "solid 4px #fbab32",
  },
  priceArea: {
    color: "#ffffff",
  },
  link: {
    textDecoration: "none",
    color: "#888888",
    "&:first-child": {
      marginTop: 16,
    },
  },
  linkBottom: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  priceHeader: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.6,
    color: "#ffffff",
  },
  price: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 15,
    lineHeight: 1.6,
    color: "#ffffff",
  },
}));

const BountiesListItem = withStyles((theme) => ({
  root: {
    marginTop: 8,
    marginBottom: 8,
    height: 36,
    transition: ".3s",
    "&:hover": {
      color: "#ffffff",
      "& svg": {
        color: "#ffffff",
      },
    },
  },
  selected: {},
}))(ListItem);

export default function SidebarNavigation(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleListItemClick = (event, index) => {
    props.setPageIndex(index);
  };

  return (
    <List
      component="nav"
      aria-label="Sidebar Navigation"
      className={classes.list}
    >
      <Link to={"/admin/wallets"} className={classes.link}>
        <BountiesListItem
          button
          selected={props.pageIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          className={
            props.pageIndex === 0 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <FontAwesomeIcon
              icon={faListAlt}
              color="inherit"
              className={
                props.pageIndex === 0
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                className={
                  props.pageIndex === 0
                    ? classes.navTextSelected
                    : classes.navText
                }
              >
                Explorer
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>
      <Link to={"/admin/accounts"} className={classes.link}>
        <BountiesListItem
          button
          selected={props.pageIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          className={
            props.pageIndex === 1 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              className={
                props.pageIndex === 1
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                className={
                  props.pageIndex === 1
                    ? classes.navTextSelected
                    : classes.navText
                }
              >
                Dashboard
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>
      <Link to={"/admin/tracker"} className={classes.link}>
        <BountiesListItem
          button
          selected={props.pageIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          className={
            props.pageIndex === 2 ? classes.navLinkSelected : classes.navLink
          }
          disableRipple={true}
        >
          <ListItemIcon className={classes.listItem}>
            <FontAwesomeIcon
              icon={faTrophy}
              className={
                props.pageIndex === 2
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                className={
                  props.pageIndex === 2
                    ? classes.navTextSelected
                    : classes.navText
                }
              >
                Leaderboard
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>
      <Link
        to={"/admin/transactions"}
        className={classes.link}
        style={{ flex: 2 }}
      >
        <BountiesListItem
          button
          selected={props.pageIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          className={
            props.pageIndex === 3 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <FontAwesomeIcon
              icon={faUser}
              className={
                props.pageIndex === 3
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                className={
                  props.pageIndex === 3
                    ? classes.navTextSelected
                    : classes.navText
                }
              >
                Profile
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>

      <Divider style={{ backgroundColor: "#888888", marginBottom: "1.6em" }} />
      <Link to={"/privacy"} className={classes.linkBottom}>
        <BountiesListItem
          className={classes.priceArea}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText
            primary={
              <Typography className={classes.tosText}>
                Privacy Policy
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>
      <Link to={"/tos"} className={classes.linkBottom}>
        <BountiesListItem
          className={classes.priceArea}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText
            primary={
              <Typography className={classes.tosText}>
                Terms of Service
              </Typography>
            }
          />
        </BountiesListItem>
      </Link>
    </List>
  );
}
