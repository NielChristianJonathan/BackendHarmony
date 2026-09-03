const express = require("express");
const { getSongs, uploadSongController } = require("../controller/songs.controller");
const { ValidationAccessToken } = require("../middleware/validationAccesToken");
const router = express.Router();

router.get("/", ValidationAccessToken, getSongs)
router.post("/", ValidationAccessToken, uploadSongController)

module.exports = router