import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SidebarNavigation from "./Navigation";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: "#2f2b36",
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <SidebarNavigation
            pageIndex={props.pageIndex}
            setPageIndex={props.setPageIndex}
          />
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={props.mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => {
            if (props.setMobileOpen) {
              props.setMobileOpen(false);
            }
          }}
          anchor="left"
        >
          <SidebarNavigation
            pageIndex={props.pageIndex}
            setPageIndex={props.setPageIndex}
          />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}
