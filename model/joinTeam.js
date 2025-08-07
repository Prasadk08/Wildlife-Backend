const mongoose = require("mongoose");

const joinTeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: String,
  joinedAt: { type: Date, default: Date.now },
});

const JoinTeam = mongoose.model("JoinTeam", joinTeamSchema);
export default JoinTeam;
    