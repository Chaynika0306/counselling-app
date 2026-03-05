const mongoose = require("mongoose");

const counsellorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    bio: { type: String, required: true },
    firstMeeting: { type: String },
    fee: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Counsellor", counsellorSchema);
