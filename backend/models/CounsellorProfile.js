const mongoose = require("mongoose");

const counsellorProfileSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    specialization: String,
    bio: String,
    experience: String,
    fees: Number,
    photo: String,
    certificates: [
     {
      title: String,
      image: String,
     },
],
  },
  { timestamps: true }
);

module.exports = mongoose.model("CounsellorProfile", counsellorProfileSchema);