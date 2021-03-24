import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "100%",
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: theme.spacing(2, 4, 3),
    clear: "both",
  },
  title: {
    paddingTop: 40,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 16,
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "rgb(67, 71, 81)",
    paddingTop: 40,
    paddingBottom: 40,
    margin: 0,
  },
  divider: {
    marginTop: 40,
    marginBottom: 20,
  },
  filledButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    marginRight: 22,
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
  outlinedButton: {
    marginRight: 22,
  },
}));

export default function SimpleModal({
  title,
  subtitle,
  open,
  handleClose,
  children,
  onClick,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon
        style={{ float: "right", cursor: "pointer" }}
        onClick={handleClose}
      />
      <Grid container>
        <Grid item xs={12}>
          <p className={classes.title}>{title}</p>
          <p className={classes.subtitle}>{subtitle}</p>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <Button variant="outlined" className={classes.outlinedButton}>
            Cancel
          </Button>
          <Button
            variant="contained"
            elevation={0}
            className={classes.filledButton}
            onClick={onClick}
          >
            Contribute
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Modal
        open={open || false}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
