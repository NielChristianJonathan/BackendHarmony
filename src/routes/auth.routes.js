const express = require("express");
const { registerMiddleware } = require("../middleware/register.middleware");
const { registerController } = require("../controller/auth.controller");
const router = express.Router()

router.post("/register", registerMiddleware, registerController)

module.exports = router
