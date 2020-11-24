import React, { useState, Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import WalletsIcon from "../../atoms/Icons/WalletsIcon";
import AccountsIcon from "../../atoms/Icons/AccountsIcon";
import PriceTrackerIcon from "../../atoms/Icons/PriceTrackerIcon";
import TransactionsIcon from "../../atoms/Icons/TransactionsIcon";
import USDIcon from "../../atoms/Icons/USDIcon";
import SettingsIcon from "@material-ui/icons/Settings";
import { usdFormatter } from "../../../util";
import TextButton from "../../atoms/Button/TextIcon";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PriceModal from "../../organisms/PriceModal";
import Divider from "@material-ui/core/Divider";

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
    width: "1.5em",
    color: "#888888",
  },
  navIconSelected: {
    width: "1.5em",
    color: "#ffffff",
  },
  navText: {
    color: "#888888",
    paddingLeft: 16,
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
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: 400,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  navLink: {
    height: 55,
    paddingLeft: 20,
    color: "#ffffff",
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

    "&:first-child": {
      marginTop: 16,
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

const JuniperListItem = withStyles((theme) => ({
  root: {
    "&$selected": {
      color: theme.palette.primary.main,

      "&:hover": {
        color: "#ffffff",
      },
    },
    "&:hover": {
      color: "#ffffff",
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
        <JuniperListItem
          button
          selected={props.pageIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          className={
            props.pageIndex === 0 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <WalletsIcon
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
        </JuniperListItem>
      </Link>
      <Link to={"/admin/accounts"} className={classes.link}>
        <JuniperListItem
          button
          selected={props.pageIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          className={
            props.pageIndex === 1 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <AccountsIcon
              className={
                props.pageIndex === 1
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.navText}>Dashboard</Typography>
            }
          />
        </JuniperListItem>
      </Link>
      <Link to={"/admin/tracker"} className={classes.link}>
        <JuniperListItem
          button
          selected={props.pageIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          className={
            props.pageIndex === 2 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <PriceTrackerIcon
              className={
                props.pageIndex === 2
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.navText}>Leaderboard</Typography>
            }
          />
        </JuniperListItem>
      </Link>
      <Link
        to={"/admin/transactions"}
        className={classes.link}
        style={{ flex: 2 }}
      >
        <JuniperListItem
          button
          selected={props.pageIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          className={
            props.pageIndex === 3 ? classes.navLinkSelected : classes.navLink
          }
        >
          <ListItemIcon className={classes.listItem}>
            <TransactionsIcon
              className={
                props.pageIndex === 3
                  ? classes.navIconSelected
                  : classes.navIcon
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.navText}>Profile</Typography>
            }
          />
        </JuniperListItem>
      </Link>

      <Divider style={{ backgroundColor: "#888888" }} />
      <JuniperListItem className={classes.priceArea}>
        <ListItemText
          primary={
            <Typography className={classes.navText}>Privacy Policy</Typography>
          }
        />
      </JuniperListItem>
      <JuniperListItem className={classes.priceArea}>
        <ListItemText
          primary={
            <Typography className={classes.navText}>
              Terms of Service
            </Typography>
          }
        />
      </JuniperListItem>
    </List>
  );
}
