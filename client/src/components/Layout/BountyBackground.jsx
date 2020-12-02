import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    paddingTop: "4rem",
    overflowY: "auto",
    position: "absolute",
  },
  gradient: {
    background: "linear-gradient(45deg, #754dcb, #4d94ff)",
    height: 400,
    position: "absolute",
    width: "100%",
  },
  content: {
    position: "absolute",
    width: "100%",
    paddingTop: "2.5rem",
  },
}));
export default function Main(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.gradient}></div>
      <div className={classes.content}>{props.children}</div>
    </main>
  );
}
