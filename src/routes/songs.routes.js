const express = require("express");
const { getSongs, uploadSongController, updateSongController } = require("../controller/songs.controller");
const { ValidationAccessToken } = require("../middleware/validationAccesToken");
const { musikUploadMiddleware } = require("../middleware/musikUpload.middleware");
const router = express.Router();

router.get("/", ValidationAccessToken, getSongs)
router.post("/", ValidationAccessToken, musikUploadMiddleware,uploadSongController)
router.put("/", ValidationAccessToken, updateSongController)

module.exports = router