const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  getMyAppointments,
  deleteAppointment,
  updateAppointmentStatus,
  getBookedSlots
} = require("../controllers/appointmentController");

const { protect, counsellorOnly } = require("../middleware/authMiddleware");

// 🔒 Book appointment (logged in user)
router.post("/", protect, createAppointment);

// 🔒 Client: Get MY appointments
router.get("/my", protect, getMyAppointments);

// 🔒 Counsellor: Get ALL appointments
router.get("/", protect, counsellorOnly, getAppointments);

// 🔒 Counsellor: Delete appointment
router.delete("/:id", protect, counsellorOnly, deleteAppointment);

// 🔒 Counsellor: Update Status
router.put("/:id", protect, counsellorOnly, updateAppointmentStatus);

// 🔒 Get booked slots by date
router.get("/booked-slots", protect, getBookedSlots);

module.exports = router;