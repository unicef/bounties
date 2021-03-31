const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fulfillment = new Schema({
  bountyId: { type: Number },
  fulfillmentId: { type: Number },
  owner: { type: String },
  fulfillers: { type: [String] },
  contactName: { type: String },
  contactEmail: { type: String },
  webLink: { type: String },
  attachment: { type: String },
  description: { type: String },
});

const Fulfillment = mongoose.model("Fulfillment", fulfillment);

module.exports = Fulfillment;
