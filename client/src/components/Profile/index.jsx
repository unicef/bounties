import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: "4em",
  },
}));
export default function Profile(props) {
  const classes = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);

  return <div className={classes.container}></div>;
}
