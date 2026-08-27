const express = require("express");
const { registerMiddleware } = require("../middleware/register.middleware");
const { registerController, loginController } = require("../controller/auth.controller");
const { loginMiddleware } = require("../middleware/login.midleware");
const router = express.Router()

router.post("/register", registerMiddleware, registerController)
router.post("/login", loginMiddleware, loginController)

module.exports = router
