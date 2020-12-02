import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
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
    textTransform: "capitalize",
  },
}));

function B({ children }) {
  const classes = useStyles();
  return <b className={classes.bold}>{children}</b>;
}

function addressFormatter(address) {
  if (address.length < 10) return null;

  return address.slice(0, 6) + "..." + address.slice(address.length - 4);
}

export default function BountyCard({
  title,
  currency,
  amount,
  ownerImage,
  owner,
  difficulty,
  deadline,
  submissions,
  categories,
  payMethod,
  payAmount,
}) {
  const classes = useStyles();
  const currentDate = new Date().getTime();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={7}>
        <Grid container>
          <Grid item xs={8}>
            <div className={classes.title}>{title}</div>
          </Grid>
          <Grid item xs={4}>
            <Hidden smUp>
              <div
                style={{
                  textAlign: "right",
                  fontSize: "1.25rem",
                  color: "rgb(91, 41, 199)",
                }}
              >
                $100.00
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "rgb(134, 142, 156)",
                  fontSize: ".875rem",
                  textTransform: "uppercase",
                }}
              >
                100 Dai
              </div>
            </Hidden>
          </Grid>
        </Grid>

        <div style={{ minHeight: 32 }}>
          {categories.map((category) => {
            return (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                className={classes.chip}
              ></Chip>
            );
          })}
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
            {addressFormatter(owner)}
          </span>
        </div>
      </Grid>
      <Hidden smUp>
        <Grid item xs={12}>
          <div>
            <Divider
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#efefef",
              }}
            />
          </div>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={4} className={classes.details}>
        <div style={{ marginBottom: ".5rem" }}>
          <div style={{ display: "flex", clear: "both" }}>
            <span style={{ marginTop: 2, marginRight: 4 }}>
              <ExtensionOutlinedIcon fontSize="small" />
            </span>
            <B>{difficulty}</B> difficulty
          </div>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <div style={{ display: "flex", clear: "both" }}>
            <span style={{ marginTop: 2, marginRight: 4 }}>
              <QueryBuilderIcon fontSize="small" />
            </span>
            <B>
              {Math.round((deadline - currentDate) / 1000 / 60 / 60 / 24, 0)}{" "}
              days
            </B>{" "}
            remaining
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
        <Grid item xs={12} md={1} style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "1.56rem",
              color: "rgb(91, 41, 199)",
            }}
          >
            $0.00
          </div>
          <div
            style={{
              color: "rgb(134, 142, 156)",
              fontSize: ".875rem",
              textTransform: "uppercase",
            }}
          >
            {payAmount} {payMethod}
          </div>
        </Grid>
      </Hidden>
    </Grid>
  );
}
