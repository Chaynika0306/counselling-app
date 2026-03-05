const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");

const User = require("../models/User");
const Appointment = require("../models/Appointment");

/* GET ALL USERS */
router.get("/users", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

/* GET ALL APPOINTMENTS */
router.get("/appointments", protect, adminOnly, async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

/* DELETE USER */
router.delete("/users/:id", protect, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

/* DELETE APPOINTMENT */
router.delete("/appointments/:id", protect, adminOnly, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Appointment deleted" });
});

module.exports = router;