import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import BountyCard from "./BountyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media (min-width: 600px)": {
      padding: "2rem 1rem",
    },
  },
  header: {
    "@media (max-width: 600px)": {
      paddingTop: "2rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  bountyCount: {
    color: "#5b29c7",
    fontSize: "1.5rem",
  },
  bounties: {
    fontSize: ".875rem",
    color: "#868e9c",
  },
  bountyList: {
    marginTop: "1rem",
  },
}));

export default function ExplorerMain(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.header}>
          <Grid item xs={6}>
            <span className={classes.bountyCount}>
              {props.totalBounties || 0}
            </span>{" "}
            <span className={classes.bounties}>bounties</span>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Hidden smUp implementation="css" className={classes.filters}>
              <Button
                startIcon={<TuneIcon />}
                onClick={() => {
                  if (props.setFilterOpen) {
                    props.setFilterOpen(true);
                  }
                }}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e6e7ea",
                }}
              >
                filter
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.bountyList}>
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
        <BountyCard />
      </Grid>
    </Grid>
  );
}
