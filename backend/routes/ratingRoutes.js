const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, async (req, res) => {
  try {
    const { rating, review } = req.body;

    const newRating = await Rating.create({
      user: req.user.id,
      rating,
      review,
    });

    res.status(201).json(newRating);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
// GET all ratings (Counsellor / Admin only)
router.get("/", protect, async (req, res) => {
  try {
    const ratings = await Rating.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;