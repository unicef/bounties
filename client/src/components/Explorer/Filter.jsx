import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
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
    backgroundColor: "#ffffff",
  },
  filters: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden smDown implementation="css" className={classes.filters}>
        <div>Filters</div>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={props.filterOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => {
            if (props.setFilterOpen) {
              props.setFilterOpen(false);
            }
          }}
          anchor="right"
        >
          Filters
        </Drawer>
      </Hidden>
    </Fragment>
  );
}
