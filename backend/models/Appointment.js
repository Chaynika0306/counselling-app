const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed"],
      default: "Pending",
    },
    

},
  { timestamps: true }
);
appointmentSchema.index({ date: 1, time: 1 }, { unique: true });
module.exports = mongoose.model("Appointment", appointmentSchema);
