import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import getBounty from "../../actions/getBounty";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    color: "#ffffff",
    fontSize: 25,
    marginTop: 0,
    marginBottom: ".5rem",
    fontWeight: 400,
  },
  chip: {
    height: 22,
    marginBottom: 12,
    color: "#ffffff",
    borderColor: "#e6e7ea",
  },
  paper: {
    maxWidth: "100%",
    width: 912,
    padding: "2rem",
    marginBottom: "4em",
  },
  payoutBalance: {
    padding: "1.5rem",
    borderRadius: 4,
    backgroundColor: "#5843b1",
    maxWidth: 202,
  },
  payoutLabel: {
    color: "#ffffff",
    fontSize: 12,
    margin: 0,
  },
  payoutFade: {
    margin: 0,
    color: "rgba(255,255,255,.5)",
    fontSize: 16,
  },
  payoutTitle: {
    color: "#ffffff",
    fontSize: "1.56rem",

    margin: 0,
  },
}));

function addressFormatter(address) {
  if (address.length < 10) return null;

  return address.slice(0, 6) + "..." + address.slice(address.length - 4);
}

export default function (props) {
  const classes = useStyles();
  const { bountyId } = useParams();
  const [bounty, setBounty] = useState({});

  useEffect(() => {
    const initApp = async () => {
      const bounty = getBounty(bountyId);
      setBounty(bounty);
    };
    initApp();
  }, []);
  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={12} style={{ marginBottom: "5rem" }}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className={classes.payoutBalance}>
                <p className={classes.payoutLabel}>Payout</p>
                <p className={classes.payoutTitle}>
                  1,000 <span>BST</span>
                </p>
                <p className={classes.payoutFade}>$0.00</p>
                <p
                  className={classes.payoutLabel}
                  style={{ marginTop: "1rem" }}
                >
                  Remaining Balance
                </p>
                <p className={classes.payoutTitle}>11,000 BST</p>
                <p className={classes.payoutFade}>$0.00</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <p className={classes.title}>Bounty Title</p>
              <div>
                <Chip
                  label={"category"}
                  variant="outlined"
                  className={classes.chip}
                ></Chip>
              </div>
              <div
                style={{
                  height: 32,
                  display: "flex",
                  clear: "both",
                  marginTop: 20,
                }}
              >
                <Avatar
                  alt="User Name"
                  src={null}
                  className={classes.avatar}
                  style={{
                    height: 32,
                    width: 32,
                    float: "left",
                    border: "solid 2px #ffffff",
                  }}
                />

                <span
                  style={{
                    paddingTop: 8,
                    paddingLeft: 6,
                    color: "#ffffff",
                    fontSize: 14,
                  }}
                >
                  {addressFormatter("0x1234912387654")}
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                content
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
