import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EthereumContext from "../../context/EthereumContext";
import saveAccountSettings from "../../actions/saveAccountSettings";
import getAccount from "../../actions/getAccountSettings";
import { useSnackbar } from "notistack";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FileUpload from "../FileUpload";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    color: "#ffffff",
    fontSize: 25,
    marginBottom: 40,
    fontWeight: 400,
    textAlign: "center",
    width: 912,
  },
  divider: {
    marginTop: 40,
    marginBottom: 40,
  },
  paper: {
    maxWidth: "100%",
    width: 912,
    padding: "2rem",
    marginBottom: "4em",
  },
  bountyTitle: {
    width: "100%",
    marginTop: "1em",
  },
  category: {
    marginTop: "1em",
    width: 312,
    "& .MuiSelect-select": {
      paddingTop: 8,
      paddingBottom: 8,
    },
  },
  info: {
    backgroundColor: "#f5f9ff",
    border: "solid 1px #cce0ff",
    padding: 16,
    color: "rgb(77, 148, 255)",
    borderRadius: 6,
    marginTop: "1rem",
    marginBottom: "1.5rem",
  },
  textfield: {
    backgroundColor: "#f8f9fb",
    marginTop: ".5rem",
    width: 280,
  },
  description: {
    fontFamily: '"Inter",  sans-serif',
    fontSize: 14,
    height: 654,
    borderRadius: 6,
    border: "solid 1px #e6e7ea",
    width: "100%",
    resize: "none",
    padding: 8,
    lineHeight: "22px",
    "&:focus": {
      outline: "none",
    },
  },
  formTitle: {
    textTransform: "uppercase",
    color: "#868e9c",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 1,
  },
  prompt: {
    fontSize: 16,
    fontWeight: 500,
  },
  descriptionText: {
    fontSize: 14,
    color: "#868e9c",
  },
  createBountyButton: {
    backgroundColor: "#4d94ff",
    color: "#ffffff",
    marginRight: 22,
    "&:hover": {
      backgroundColor: "#3d84ff",
      color: "#ffffff",
    },
  },
  label: {
    color: "#868e9c",
    fontSize: 12,
    paddingTop: "1rem",
  },
  chip: {
    width: "min-content",
    height: 22,
    marginTop: 12,
    color: "#868e9c",
    borderColor: "#e6e7ea",
    "&:hover": {
      backgroundColor: "#e6e7ea",
      color: "#868e9c",
      cursor: "pointer",
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  const {
    contract,
    boostContract,
    accounts,
    initAppData,
    networkId,
  } = useContext(EthereumContext);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [formData, setFormData] = React.useState({
    image: "",
    name: "",
    organization: "",
    languages: [],
    skills: [],
    website: "",
    twitter: "",
    github: "",
    linkedin: "",
    email: "",
    canContact: false,
  });

  const {
    image,
    name,
    organization,
    languages,
    skills,
    website,
    twitter,
    github,
    linkedin,
    email,
    canContact,
  } = formData;

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    async function init() {
      console.log("account settings");
      const account = await getAccount();
      if (account) {
        console.log(account);
        setFormData(account);
      }
    }

    init();
  }, []);

  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={12}>
          <h2 className={classes.title}>Account Settings</h2>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Profile Photo</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid
                  container
                  style={{ marginTop: "3em", marginBottom: "3em" }}
                >
                  <Grid item>
                    <Avatar style={{ width: 80, height: 80 }} src={image}>
                      <PhotoCameraIcon style={{ color: "#5e5e5e" }} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <FileUpload
                      afterUpload={(data) => {
                        handleFormChange({
                          target: { name: "image", value: data.imageUrl },
                        });
                      }}
                    >
                      <Button
                        variant="outlined"
                        style={{ marginLeft: "1em", marginTop: "2em" }}
                      >
                        Upload New Photo
                      </Button>
                    </FileUpload>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>About</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt} style={{ marginBottom: 0 }}>
                  What would you like people to know about you?
                </p>
                <p className={classes.descriptionText}>
                  Enter some of your personal details so that the community can
                  get to know you.
                </p>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    {" "}
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Name
                      </FormLabel>
                      <TextField
                        placeholder="Contact Name"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="name"
                        value={name}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Organization
                      </FormLabel>
                      <TextField
                        placeholder="Contact Email"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="organization"
                        value={organization}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.category}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Languages
                      </FormLabel>

                      <TextField
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="weblink"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            if (languages.indexOf(e.target.value) === -1) {
                              languages.push(e.target.value);
                              setFormData({ ...formData, languages });
                            }

                            e.target.value = "";
                          }
                        }}
                        className={classes.textfield}
                      ></TextField>
                      <div>
                        {languages.map((language) => {
                          return (
                            <Chip
                              key={language}
                              label={language}
                              variant="outlined"
                              className={classes.chip}
                              onClick={(e) => {
                                setFormData({
                                  ...formData,
                                  languages: languages.filter((lng) => {
                                    return lng !== language;
                                  }),
                                });
                              }}
                            ></Chip>
                          );
                        })}
                      </div>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>

              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Skills</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt} style={{ marginBottom: 0 }}>
                  What are some of your professional or technical skills?
                </p>
                <p className={classes.descriptionText}>
                  Enter or select the skills for which you are proficient. This
                  will help others on the network be confident in your ability
                  to fulfill certain types of bounties.
                </p>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.category}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Skills
                      </FormLabel>

                      <TextField
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="weblink"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            if (skills.indexOf(e.target.value) === -1) {
                              skills.push(e.target.value);
                              setFormData({ ...formData, skills });
                            }

                            e.target.value = "";
                          }
                        }}
                        className={classes.textfield}
                      ></TextField>
                      <div>
                        {skills.map((skill) => {
                          return (
                            <Chip
                              key={skill}
                              label={skill}
                              variant="outlined"
                              className={classes.chip}
                              onClick={(e) => {
                                setFormData({
                                  ...formData,
                                  skills: skills.filter((skl) => {
                                    return skl !== skill;
                                  }),
                                });
                              }}
                            ></Chip>
                          );
                        })}
                      </div>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>

              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Social</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt} style={{ marginBottom: 0 }}>
                  Do you have any other social profiles you would like
                  displayed?
                </p>

                <Grid container>
                  <Grid item xs={12} md={6}>
                    {" "}
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Personal Website
                      </FormLabel>
                      <TextField
                        placeholder="Contact Name"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="website"
                        value={website}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Twitter
                      </FormLabel>
                      <TextField
                        placeholder="Contact Email"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="twitter"
                        value={twitter}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    {" "}
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Github
                      </FormLabel>
                      <TextField
                        placeholder="Contact Name"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="github"
                        value={github}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        LinkedIn
                      </FormLabel>
                      <TextField
                        placeholder="Contact Email"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="linkedin"
                        value={linkedin}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Contact</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt} style={{ marginBottom: 0 }}>
                  Where would you like to receive status notifications about
                  your bounties and fulfillments?
                </p>
                <Grid container>
                  <Grid item xs={12}>
                    {" "}
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <FormLabel
                        component="legend"
                        style={{
                          fontWeight: 400,
                        }}
                        className={classes.label}
                      >
                        Contact Email
                      </FormLabel>
                      <TextField
                        placeholder="Contact Email"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="email"
                        value={email}
                        onChange={handleFormChange}
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                    <Grid item xs={12} className={classes.platform}>
                      <FormControl component="fieldset">
                        <FormGroup style={{ paddingTop: 10 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="canContact"
                                checked={canContact}
                                style={{ padding: 4, paddingLeft: 9 }}
                                onChange={(e) => {
                                  handleFormChange({
                                    target: {
                                      value: e.target.checked,
                                      name: "canContact",
                                    },
                                  });
                                }}
                              />
                            }
                            label="I would also like to receive relevant bounty suggestions and platform updates."
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  className={classes.createBountyButton}
                  onClick={() => {
                    saveAccountSettings(formData);
                  }}
                >
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
