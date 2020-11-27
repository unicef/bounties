import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    paddingTop: "4rem",
    overflowY: "auto",
  },
}));
export default function Main(props) {
  const classes = useStyles();

  return <main className={classes.root}>{props.children}</main>;
}
