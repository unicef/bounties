import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    paddingBottom: "1rem",
    borderRadius: 8,
    marginBottom: "1rem",
    "&:hover": {
      boxShadow: "0 2px 4px rgba(0,0,0,.075)",
      cursor: "pointer",
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 16,
  },
  chip: {
    height: 22,
    marginBottom: 12,
    color: "#868e9c",
    borderColor: "#e6e7ea",
    "&:hover": {
      backgroundColor: "#e6e7ea",
      color: "#868e9c",
      cursor: "pointer",
    },
  },
  details: {
    fontSize: 14,
    color: "#868e9c",
  },
  bold: {
    fontWeight: 500,
    color: "#000000",
    marginRight: 4,
  },
}));

const data = {
  title: "dApp Testing",
  currency: "Dai",
  amount: 5,
  ownerImage: "",
  ownerAddress: "0x2CE13ba4821b15a65CF186781dc3345545A441F2",
  difficult: "Beginner",
  deadline: 0,
  submissions: 0,
  categories: [],
};

function B({ children }) {
  const classes = useStyles();
  return <b className={classes.bold}>{children}</b>;
}

function addressFormatter(address) {
  if (address.length < 10) return null;

  return address.slice(0, 6) + "..." + address.slice(address.length - 4);
}

export default function BountyCard(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={7}>
        <div className={classes.title}>{data.title}</div>
        <div style={{ minHeight: 32 }}>
          <Chip
            label="basic"
            variant="outlined"
            className={classes.chip}
          ></Chip>
        </div>
        <div style={{ height: 32, display: "flex", clear: "both" }}>
          <Avatar
            alt="User Name"
            src={null}
            className={classes.avatar}
            style={{ height: 32, width: 32, float: "left" }}
          />

          <span
            style={{
              paddingTop: 8,
              paddingLeft: 6,
              color: "rgb(77, 148, 255)",
              fontSize: 14,
            }}
          >
            {addressFormatter(data.ownerAddress)}
          </span>
        </div>
      </Grid>
      <Grid item xs={12} md={4} className={classes.details}>
        <div style={{ marginBottom: ".75rem" }}>
          <div style={{ display: "flex", clear: "both" }}>
            <span style={{ marginTop: 2, marginRight: 4 }}>
              <ExtensionOutlinedIcon fontSize="small" />
            </span>
            <B>Intermediate</B> difficulty
          </div>
        </div>
        <div style={{ marginBottom: ".75rem" }}>
          <div style={{ display: "flex", clear: "both" }}>
            <span style={{ marginTop: 2, marginRight: 4 }}>
              <QueryBuilderIcon fontSize="small" />
            </span>
            <B>244 years</B> remaining
          </div>
        </div>
        <div>
          <div style={{ display: "flex", clear: "both" }}>
            <span style={{ marginTop: 0, marginRight: 4 }}>
              <PublishIcon />
            </span>
            <B>0</B> submissions
          </div>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={1}>
          <div>$100</div>
          <div>100 Dai</div>
        </Grid>
      </Hidden>
    </Grid>
  );
}
