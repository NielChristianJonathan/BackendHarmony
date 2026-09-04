const express = require("express");
const { getSongs, uploadSongController } = require("../controller/songs.controller");
const { ValidationAccessToken } = require("../middleware/validationAccesToken");
const { musikUploadMiddleware } = require("../middleware/musikUpload.middleware");
const router = express.Router();

router.get("/", ValidationAccessToken, getSongs)
router.post("/", ValidationAccessToken, musikUploadMiddleware,uploadSongController)

module.exports = router