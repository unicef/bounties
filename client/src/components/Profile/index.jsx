import React, {useContext, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Filter from "../Explorer/Filter";
import ExplorerMain from "../Explorer/ExplorerMain";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import EthereumContext from "../../context/EthereumContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  item: {
    flexGrow: 1,
  },
  filters: {
    width: 320,
    height: "100%",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: "solid 3px #ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,.15)",
  },
  part1:{
    backgroundColor: "white",
    paddingTop: "4em",
  },
  address:{
    lineHeight: "14px",
    fontWeight: 400,
    fontSize: "14px",
    display: "block",
    color: "#5b29c7",
    borderColor: "#5b29c7",
    marginTop: 8
  },
  addressContainer:{
    marginTop: "10px",
    marginBottom: "10px",
    border: "1px solid transparent",
    borderRadius: "8px",
    backgroundColor: "#e6ddf8",
    height: "30px",
    paddingTop: 0,
    padding: ".5rem",
  },
  toggleBar: {
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: 500
  },
  span:{
    marginLeft: "5px",
    borderRadius: "50px",
    backgroundColor: "#f2f4f8",
    padding: ".25rem .5rem",
    textAlign: "center",
    fontWeight:400,
    fontSize: "12px",
  },
  background:{
    backgroundColor:"yellow"
  },
  p:{
    height: "5px",
    cursor: "pointer",
  },
  activeItem:{
    borderBottom: "solid 4px #4d94ff",
  },
  activeSpan:{
    marginLeft: "5px",
    borderRadius: "50px",
    padding: ".25rem .5rem",
    textAlign: "center",
    fontWeight:400,
    fontSize: "12px",
    backgroundColor: "#e6e7ea",
  }
}));
export default function Profile(props) {
  const classes = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);
  const {accounts, bounties} = useContext(EthereumContext);
  const [clicked, setClicked] = useState("created");

  const onClick = (event) => {
    if (event.target.innerText.includes("created")){
      setClicked("created");
    }
    if (event.target.innerText.includes("Submissions")){
      setClicked("submitted");
    }
  }

  console.log("accounts profile", accounts[0])
  let displayBounties = bounties.filter((bounty) => {
    return bounty.owner.toLowerCase()===accounts[0]?.toLowerCase();
  });

  return <Grid container>
    <Grid container justify={"center"} alignItems="center" className={classes.part1}>
      <Grid container justify={"center"} alignItems="center" >
        <Grid item>
          <Avatar alt="User Name" src={null} className={classes.avatar} />
        </Grid>
      </Grid>
      <Grid  container justify={"center"}>
        <Grid item>
          <div className={classes.addressContainer}>
            <p className={classes.address}>
              {accounts[0]}
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justify={"center"} alignItems={"center"} spacing={3} className={classes.toggleBar}>
      <Grid item className={`${clicked==="created"?classes.activeItem:""}`}>
        <p className={classes.p} onClick={onClick}>
          Bounties created
          <span className={`${clicked==="created"?classes.activeSpan:classes.span}`}>
            {displayBounties.length || 0}
          </span>
        </p>
      </Grid>
      <Grid item className={`${clicked==="submitted"?classes.activeItem:""}`}>
        <p className={classes.p} onClick={onClick}>
          Submissions
          <span className={`${clicked==="submitted"?classes.activeSpan:classes.span}`}>
            0
          </span>
        </p>
      </Grid>
    </Grid>
    <div className={classes.container}>
      <Hidden smDown implementation="css">
        <div className={`${classes.filters}`}>
          <Filter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        </div>
      </Hidden>
      <div className={classes.item}>
        <ExplorerMain toggleBarClicked={clicked} setFilterOpen={setFilterOpen} />
      </div>
    </div>
  </Grid>;
}
