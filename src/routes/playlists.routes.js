const express = require("express");
const { createPlaylistController } = require("../controller/playlists.controller");
const { ValidationAccessToken } = require("../middleware/validationAccesToken");
const router = express.Router();

router.post("/", ValidationAccessToken, createPlaylistController)

module.exports = router