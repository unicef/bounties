import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import ExplorerMain from "./ExplorerMain";
import Filter from "./Filter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  item: {
    flexGrow: 1,
  },
  filters: {
    width: 320,
    height: "100%",
  },
}));
export default function Explorer(props) {
  const classes = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Hidden smDown implementation="css">
        <div className={`${classes.filters}`}>
          <Filter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        </div>
      </Hidden>
      <div className={classes.item}>
        <ExplorerMain setFilterOpen={setFilterOpen} />
      </div>
    </div>
  );
}
