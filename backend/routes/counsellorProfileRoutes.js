const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");

const CounsellorProfile = require("../models/CounsellorProfile");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
/* GET PROFILE (Public) */
router.get("/", async (req, res) => {
  const profile = await CounsellorProfile.findOne();
  res.json(profile);
});

/* UPDATE PROFILE (Admin Only) */
router.put("/", protect, upload.single("certificateImage"), async (req, res) => {
  let profile = await CounsellorProfile.findOne();

  if (!profile) {
    profile = new CounsellorProfile();
  }

  profile.name = req.body.name;
  profile.email = req.body.email;
  profile.specialization = req.body.specialization;
  profile.experience = req.body.experience;
  profile.fees = req.body.fees;
  profile.bio = req.body.bio;

  if (req.file) {
    profile.certificates.push({
      title: req.body.certificateTitle,
      image: req.file.filename,
    });
  }

  await profile.save();
  res.json(profile);
});

module.exports = router;