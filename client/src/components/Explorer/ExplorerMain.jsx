import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import BountyCard from "./BountyCard";
import EthereumContext from "../../context/EthereumContext";
import { Link } from "react-router-dom";

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
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function ExplorerMain(props) {
  const classes = useStyles();
  let { bounties, filters } = useContext(EthereumContext);

  bounties.forEach((bounty) => {
    bounty.timestamp = parseInt(bounty._id.toString().substring(0, 8), 16);
    bounty.timeLeft = bounty.deadline - new Date().getTime();
  });

  let displayBounties = [];

  if (filters.difficulty.beginner) {
    displayBounties = displayBounties.concat(
      bounties.filter((bounty) => {
        return bounty.difficulty === "beginner";
      })
    );
  }

  if (filters.difficulty.intermediate) {
    displayBounties = displayBounties.concat(
      bounties.filter((bounty) => {
        return bounty.difficulty === "intermediate";
      })
    );
  }

  if (filters.difficulty.expert) {
    displayBounties = displayBounties.concat(
      bounties.filter((bounty) => {
        return bounty.difficulty === "expert";
      })
    );
  }

  switch (filters.sort) {
    case "recent":
      displayBounties = displayBounties.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      break;
    case "value":
      displayBounties = displayBounties.sort((a, b) => {
        return b.payAmount - a.payAmount;
      });
      break;
    case "expiry":
      displayBounties = displayBounties.sort((a, b) => {
        return a.timeLeft - b.timeLeft;
      });
      break;
    case "viewed":
      break;
    default:
      break;
  }

  if (filters.search) {
    displayBounties = displayBounties.filter((bounty) => {
      return bounty.title.indexOf(filters.search) >= 0;
    });
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={classes.header}>
          <Grid item xs={6}>
            <span className={classes.bountyCount}>
              {displayBounties.length || 0}
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
        {displayBounties.map((bounty, index) => {
          return (
            <Link to={`/bounty/${bounty.bountyId}`} className={classes.link}>
              <BountyCard key={index} {...bounty} />
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
}
