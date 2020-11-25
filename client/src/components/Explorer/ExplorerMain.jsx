import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ExplorerMain(props) {
  return (
    <Grid container>
      <Grid item xs={6}>
        {props.totalBounties || 0} Bounties
      </Grid>
      <Grid item xs={6}>
        <button
          onClick={() => {
            if (props.setFilterOpen) {
              props.setFilterOpen(true);
            }
          }}
        >
          show filter
        </button>
      </Grid>
    </Grid>
  );
}
