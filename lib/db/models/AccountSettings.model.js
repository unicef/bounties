const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settings = new Schema({
  address: { type: String },
  image: { type: String },
  name: { type: String },
  organization: { type: String },
  languages: { type: Array },
  skills: { type: Array },
  website: { type: String },
  twitter: { type: String },
  github: { type: String },
  linkedin: { type: String },
  email: { type: String },
  canContact: { type: Boolean },
});

const AccountSettings = mongoose.model("AccountSettings", settings);

module.exports = AccountSettings;
