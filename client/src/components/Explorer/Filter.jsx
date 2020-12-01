import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: "#ffffff",
  },
  filters: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
  filterForm: {
    padding: 24,
  },
  divider: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  refineBy: {
    marginTop: 0,
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  platform: {
    marginTop: "2rem",
  },
  category: {
    width: "100%",
    "& .MuiSelect-select": {
      paddingTop: 4,
    },
  },
  difficulty: {
    marginTop: "2rem",
  },
  stage: {
    marginTop: "2rem",
  },
}));

function FilterForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recent");

  const [platform, setState] = React.useState({
    unicef: true,
  });
  const [stage, setStage] = React.useState({
    active: true,
    complete: false,
    expired: false,
    dead: false,
  });
  const [difficulty, setDifficulty] = React.useState({
    beginner: true,
    intermediate: false,
    advanced: false,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handlePlatformChange = (event) => {
    setState({ ...platform, [event.target.name]: event.target.checked });
  };
  const handleStageChange = (event) => {
    setStage({ ...stage, [event.target.name]: event.target.checked });
  };
  const handleDifficultyChange = (event) => {
    setDifficulty({ ...difficulty, [event.target.name]: event.target.checked });
  };

  const { unicef } = platform;
  const { active, complete, expired, dead } = stage;
  const { beginner, intermediate, advanced } = difficulty;
  return (
    <Grid container className={classes.filterForm}>
      <Grid item xs={12}>
        <TextField
          placeholder="Search..."
          color="secondary"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#abb1ba" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={10}>
            <h4 className={classes.refineBy}>Refine by</h4>
          </Grid>
          <Grid item xs={2}>
            Reset
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ fontWeight: 500, color: "#000000" }}
          >
            Sort
          </FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            style={{ paddingTop: 10 }}
          >
            <FormControlLabel
              value="recent"
              control={<Radio style={{ padding: 4, paddingLeft: 9 }} />}
              label="Most Recent"
            />
            <FormControlLabel
              value="viewed"
              control={<Radio style={{ padding: 4, paddingLeft: 9 }} />}
              label="Most Viewed"
            />
            <FormControlLabel
              value="value"
              control={<Radio style={{ padding: 4, paddingLeft: 9 }} />}
              label="Value: High to Low"
            />
            <FormControlLabel
              value="expiry"
              control={<Radio style={{ padding: 4, paddingLeft: 9 }} />}
              label="Expiry"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.platform}>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ fontWeight: 500, color: "#000000" }}
          >
            Platform
          </FormLabel>
          <FormGroup style={{ paddingTop: 10 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={unicef}
                  onChange={handlePlatformChange}
                  name="unicef"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="UNICEF"
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.category}>
          <FormLabel
            component="legend"
            style={{
              fontWeight: 500,
              color: "#000000",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Category
          </FormLabel>

          <Select label="Select" value={""} style={{ width: "100%" }}>
            <MenuItem value={0}>Option</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.stage}>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ fontWeight: 500, color: "#000000" }}
          >
            Stage
          </FormLabel>
          <FormGroup style={{ paddingTop: 10 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={active}
                  onChange={handleStageChange}
                  name="active"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={complete}
                  onChange={handleStageChange}
                  name="complete"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Complete"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={expired}
                  onChange={handleStageChange}
                  name="expired"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Expired"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dead}
                  onChange={handleStageChange}
                  name="dead"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Dead"
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.difficulty}>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            style={{ fontWeight: 500, color: "#000000" }}
          >
            Difficulty
          </FormLabel>
          <FormGroup style={{ paddingTop: 10 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={beginner}
                  onChange={handleDifficultyChange}
                  name="beginner"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Beginner"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={intermediate}
                  onChange={handleDifficultyChange}
                  name="intermediate"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Intermediate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={advanced}
                  onChange={handleDifficultyChange}
                  name="advanced"
                  style={{ padding: 4, paddingLeft: 9 }}
                />
              }
              label="Advanced"
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default function Filter(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden smDown implementation="css" className={classes.filters}>
        <FilterForm />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={props.filterOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => {
            if (props.setFilterOpen) {
              props.setFilterOpen(false);
            }
          }}
          anchor="right"
        >
          <FilterForm />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}
