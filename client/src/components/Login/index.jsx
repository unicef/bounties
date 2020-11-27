import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
  login: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "4em",
  },
  paper: {
    width: "100%",
    padding: 40,
  },
  lock: {
    display: "block",
    margin: "auto",
    fontSize: 84,
    color: "rgba(0,0,0,0.13)",
    marginBottom: "4rem",
  },
  headline: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    color: "#868e9c",
    width: 252,
    marginLeft: "auto",
    marginRight: "auto",
  },
  signInButton: {
    maxWidth: 252,
    marginLeft: "auto",
    marginRight: "auto",
    display: "inherit",
    width: "100%",
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
}));
export default function Explorer(props) {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <Grid container>
        <Grid item sm={1} md={3} lg={4}></Grid>
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Paper className={classes.paper}>
            <FontAwesomeIcon
              icon={faLock}
              color="inherit"
              className={classes.lock}
            />
            <p className={classes.headline}>
              Sign in to use the Bounties Network
            </p>
            <p className={classes.message}>
              In order for you to use certain features of the network like
              creating and fulfilling bounties, commenting, and viewing your
              network stats, please sign in using your secure wallet.
            </p>
            <p className={classes.message}>
              If you don't wish to sign in but want to explore, feel free to
              check out some bounties using the explorer.
            </p>
            <Button className={classes.signInButton}>Sign In</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
