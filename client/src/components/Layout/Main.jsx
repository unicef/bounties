import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    marginTop: "4rem",
  },
}));
export default function Main(props) {
  const classes = useStyles();

  return <main className={classes.root}>{props.children}</main>;
}
