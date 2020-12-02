import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EthereumContext from "../../context/EthereumContext";
import makeBounty from "../../actions/makeBounty";
import saveBounty from "../../actions/saveBounty";
import { useSnackbar } from "notistack";
import Chip from "@material-ui/core/Chip";
const BountyTemplate = require("./templates").template;

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
  },
  category: {
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
  const { contract, accounts, initAppData } = useContext(EthereumContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [formData, setFormData] = React.useState({
    title: "",
    description: BountyTemplate[0].template,
    difficulty: "beginner",
    contactName: "",
    contactEmail: "",
    deadline: 0,
    revisions: 3,
    weblink: "",
    preapproval: "no",
    visibility: "public",
    payMethod: "eth",
    payAmount: 0,
    activate: "now",
    categories: [],
  });

  const {
    title,
    description,
    difficulty,
    contactName,
    contactEmail,
    revisions,
    weblink,
    preapproval,
    visibility,
    payMethod,
    payAmount,
    activate,
    categories,
  } = formData;

  const createBounty = async () => {
    let bountyTx;
    let notificationId;
    try {
      notificationId = enqueueSnackbar("Complete your bounty in your wallet.", {
        autoHideDuration: 3000,
      });

      bountyTx = await makeBounty(
        accounts[0],
        contract,
        "",
        formData.deadline,
        formData.payAmount * 1e18
      );

      const { _bountyId } = bountyTx.events.BountyIssued.returnValues;
      enqueueSnackbar("Your bounty has been mined, bountId: " + _bountyId, {
        variant: "success",
        autoHideDuration: 3000,
      });
      // POST bounty data to backend
      await saveBounty(formData);
      await initAppData();
    } catch (e) {
      closeSnackbar(notificationId);
      enqueueSnackbar("There was an error sending your transaction", {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.log(e);
    }
    console.log(formData);
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const incrementRevisions = () => {
    setFormData({ ...formData, revisions: revisions + 1 });
  };
  const decrementRevisions = () => {
    if (revisions) setFormData({ ...formData, revisions: revisions - 1 });
  };
  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={12}>
          <h2 className={classes.title}>Create Bounty</h2>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>About</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  Enter your details about this bounty.
                </p>
                <p className={classes.descriptionText}>
                  Enter a title and description for your bounty. A{" "}
                  <a href="http://www.markdownguide.org/cheat-sheet">
                    markdown
                  </a>{" "}
                  preview will automatically be generated as you type, which you
                  can view by clicking the preview button. Choose a description
                  template below to get started, or clear the field to create
                  your own.
                </p>
                <FormControl variant="outlined" className={classes.bountyTitle}>
                  <FormLabel
                    component="legend"
                    style={{
                      fontWeight: 400,
                    }}
                    className={classes.label}
                  >
                    Title
                  </FormLabel>
                  <TextField
                    placeholder="Enter Title"
                    color="secondary"
                    variant="outlined"
                    size="small"
                    label="Title"
                    value={title}
                    name="title"
                    className={classes.textfield}
                    style={{ width: "100%" }}
                    onChange={handleFormChange}
                  ></TextField>
                </FormControl>
                <FormControl variant="outlined" className={classes.category}>
                  <FormLabel
                    component="legend"
                    style={{
                      fontWeight: 400,
                    }}
                    className={classes.label}
                  >
                    Bounty Template
                  </FormLabel>

                  <Select
                    label="Select"
                    defaultValue={0}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        description: BountyTemplate[e.target.value].template,
                      });
                    }}
                    style={{ width: 280, marginTop: ".5rem" }}
                  >
                    {BountyTemplate.map((template, index) => {
                      return (
                        <MenuItem key={template.name} value={index}>
                          {template.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <div className={classes.info}>
                  The default description template provides a simple and
                  multi-purpose template for writing well structured and clear
                  instructions for potential fulfillers.
                </div>
                <textarea
                  className={classes.description}
                  value={description}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    });
                  }}
                ></textarea>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Contact</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  Who will be the primary contact for bounty questions and
                  submissions?
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
                        Contact Name
                      </FormLabel>
                      <TextField
                        placeholder="Contact Name"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        label="Contact Name"
                        name="contactName"
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
                        Contact Email
                      </FormLabel>
                      <TextField
                        placeholder="Contact Email"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        label="Contact Email"
                        name="contactEmail"
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
                <p className={classes.formTitle}>Details</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  How should this bounty be classified?
                </p>
                <p className={classes.descriptionText}>
                  Enter the categories and difficulty level for the bounty.
                  Since difficulty can be fairly subjective, it is helpful to
                  provide more details around required experience within your
                  bounty description.
                </p>
                <Grid container>
                  <Grid item xs={12} md={6}>
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
                        Bounty Category
                      </FormLabel>

                      <TextField
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="weblink"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            if (categories.indexOf(e.target.value) === -1) {
                              categories.push(e.target.value);
                              setFormData({ ...formData, categories });
                            }

                            e.target.value = "";
                          }
                        }}
                        className={classes.textfield}
                      ></TextField>
                      <div>
                        {categories.map((category) => {
                          return (
                            <Chip
                              key={category}
                              label={category}
                              variant="outlined"
                              className={classes.chip}
                              onClick={(e) => {
                                setFormData({
                                  ...formData,
                                  categories: categories.filter((ctg) => {
                                    return ctg !== category;
                                  }),
                                });
                              }}
                            ></Chip>
                          );
                        })}
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{ fontWeight: 500 }}
                        className={classes.label}
                      >
                        Difficulty
                      </FormLabel>
                      <RadioGroup
                        value={difficulty}
                        name="difficulty"
                        onChange={handleFormChange}
                        style={{ paddingTop: 10 }}
                      >
                        <FormControlLabel
                          value="beginner"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Beginner"
                        />
                        <FormControlLabel
                          value="intermediate"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Intermediate"
                        />
                        <FormControlLabel
                          value="export"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Expert"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Revisions</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>Will you require revisions?</p>
                <p className={classes.descriptionText}>
                  Enter the maximum number of revisions you may require for this
                  task, in order to help set expectations for the contributors.
                </p>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <ButtonGroup
                      color="secondary"
                      aria-label="outlined primary button group"
                    >
                      <Button onClick={decrementRevisions}>-</Button>
                      <Button
                        disabled
                        style={{
                          color: "#000000",
                          width: 150,
                          backgroundColor: "rgb(248,249,251)",
                        }}
                      >
                        {revisions}
                      </Button>
                      <Button onClick={incrementRevisions}>+</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Attachments</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  Does this bounty require any external assets for completion?
                </p>
                <p className={classes.descriptionText}>
                  Attach any files or links that may be helpful as references or
                  necessary for a contributor to complete the bounty.
                </p>
                <Grid container>
                  <Grid item xs={12} md={12}>
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
                        Web link
                      </FormLabel>
                      <TextField
                        placeholder="URL"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        name="weblink"
                        label="URL"
                        value={weblink}
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
                <p className={classes.formTitle}>Deadline</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>When will this bounty be due?</p>
                <p className={classes.descriptionText}>
                  Enter the date and time for this bounty's deadline
                  (timezone=America/New_York)
                </p>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.bountyTitle}
                    >
                      <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: 280 }}
                        onChange={(e) => {
                          const d = new Date(e.target.value);

                          setFormData({ ...formData, deadline: d.getTime() });
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Privacy</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  Do you want to approve people before they can fulfill your
                  bounty?
                </p>
                <p className={classes.descriptionText}>
                  If you require approval, you will be notified when a user
                  indicates their intent to submit, and will be required to
                  approve them before they are allowed to complete your bounty.
                </p>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{ fontWeight: 500 }}
                        className={classes.label}
                      >
                        Pre-approval Required
                      </FormLabel>
                      <RadioGroup
                        value={preapproval}
                        onChange={handleFormChange}
                        name="preapproval"
                        style={{ paddingTop: 10 }}
                      >
                        <FormControlLabel
                          value="yes"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <p
                        className={classes.prompt}
                        style={{ marginTop: "3.5rem" }}
                      >
                        Will submissions be visible to everyone?
                      </p>
                      <p className={classes.descriptionText}>
                        Submissions can be hidden from other users if desired.
                      </p>
                      <Grid container>
                        <Grid item xs={12}>
                          <FormControl component="fieldset">
                            <FormLabel
                              component="legend"
                              style={{ fontWeight: 500 }}
                              className={classes.label}
                            >
                              Visibility
                            </FormLabel>
                            <RadioGroup
                              value={visibility}
                              onChange={handleFormChange}
                              name="visibility"
                              style={{ paddingTop: 10 }}
                            >
                              <FormControlLabel
                                value="public"
                                control={
                                  <Radio
                                    style={{ padding: 4, paddingLeft: 9 }}
                                  />
                                }
                                label="Public"
                              />
                              <FormControlLabel
                                value="private"
                                control={
                                  <Radio
                                    style={{ padding: 4, paddingLeft: 9 }}
                                  />
                                }
                                label="Hidden"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} md={3}>
                <p className={classes.formTitle}>Payout</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  Select payout method and amount.
                </p>
                <p className={classes.descriptionText}>
                  Select the token and enter the amount you will award for
                  completion of this bounty.
                </p>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{ fontWeight: 500 }}
                        className={classes.label}
                      >
                        Payout Method
                      </FormLabel>
                      <RadioGroup
                        value={payMethod}
                        name="payMethod"
                        onChange={handleFormChange}
                        style={{ paddingTop: 10 }}
                      >
                        <FormControlLabel
                          value="eth"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="ETH"
                        />
                        <FormControlLabel
                          value="erc20"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="ERC-20 Token"
                        />
                      </RadioGroup>
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
                        Payout Amount
                      </FormLabel>
                      <TextField
                        name="payAmount"
                        value={payAmount}
                        placeholder="Enter Amount"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        label="Amount"
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
                <p className={classes.formTitle}>Save or Submit</p>
              </Grid>
              <Grid item xs={12} md={9}>
                <p className={classes.prompt}>
                  When would you like to submit and activate the bounty?
                </p>
                <p className={classes.descriptionText}>
                  If you wish to activate the bounty later, you can save it as a
                  draft. The requirements for a bounty can only be edited while
                  it is in the draft stage. At minimum, your deposit amount must
                  match your payout amount.
                </p>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{ fontWeight: 500 }}
                        className={classes.label}
                      >
                        When to activate
                      </FormLabel>
                      <RadioGroup
                        value={activate}
                        name="activate"
                        onChange={handleFormChange}
                        style={{ paddingTop: 10 }}
                      >
                        <FormControlLabel
                          value="now"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Now"
                        />
                        <FormControlLabel
                          value="later"
                          control={
                            <Radio style={{ padding: 4, paddingLeft: 9 }} />
                          }
                          label="Later"
                        />
                      </RadioGroup>
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
                        Deposit Amount (ETH or whole tokens)
                      </FormLabel>
                      <TextField
                        placeholder="Enter Amount"
                        color="secondary"
                        variant="outlined"
                        size="small"
                        label="Amount"
                        className={classes.textfield}
                      ></TextField>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  className={classes.createBountyButton}
                  onClick={createBounty}
                >
                  Create Bounty
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
