const Counsellor = require("../models/Counsellor");

// CREATE counsellor
exports.createCounsellor = async (req, res) => {
  try {
    const counsellor = new Counsellor(req.body);
    await counsellor.save();
    res.status(201).json({
      message: "Counsellor created successfully",
      counsellor,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all counsellors
exports.getCounsellors = async (req, res) => {
  try {
    const counsellors = await Counsellor.find();
    res.json(counsellors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
