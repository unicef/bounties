const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderboard = new Schema({
  name: { type: String },
  address: { type: String },
  email: { type: String },
  githubusername: { type: String },
  profile_image: { type: String },
  total: { type: Number },
  total_usd: { type: Number },
  bounties_issued: { type: Number },
  fulfillments_paid: { type: Number },
  fulfillments_accepted: { type: Number },
  leaderboardType: { type: String },
});

const Leaderboard = mongoose.model("Leaderboard", leaderboard);

module.exports = Leaderboard;