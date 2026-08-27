const express = require("express");
const { getSongs } = require("../controller/songs.controller");
const { ValidationAccessToken } = require("../middleware/validationAccesToken");
const router = express.Router();

router.get("/", ValidationAccessToken, getSongs)

module.exports = router