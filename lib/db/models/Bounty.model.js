const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bounty = new Schema({
  bountyId: { type: Number },
  owner: { type: String },
  title: { type: String },
  description: { type: String },
  difficulty: { type: String },
  contactName: { type: String },
  contactEmail: { type: String },
  deadline: { type: Number },
  revisions: { type: Number },
  weblink: { type: String },
  preapproval: { type: String },
  visibility: { type: String },
  payMethod: { type: String },
  payAmount: { type: Number },
  activate: { type: String },
  categories: { type: Array },
  networkId: { type: Number },
});

const Bounty = mongoose.model("Bounty", bounty);

module.exports = Bounty;
