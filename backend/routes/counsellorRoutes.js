const express = require("express");
const router = express.Router();

const {
  createCounsellor,
  getCounsellors,
} = require("../controllers/counsellorController");

router.post("/", createCounsellor);
router.get("/", getCounsellors);

module.exports = router;
