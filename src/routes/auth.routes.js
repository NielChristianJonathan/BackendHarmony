const express = require("express");
const { registerMiddleware } = require("../middleware/register.middleware");
const { registerController, loginController, getAccessToken } = require("../controller/auth.controller");
const { loginMiddleware } = require("../middleware/login.midleware");
const { ValidationRefreshToken } = require("../middleware/validationRefreshToken");
const router = express.Router()

router.post("/register", registerMiddleware, registerController)
router.post("/login", loginMiddleware, loginController)
router.get("/accesstoken", ValidationRefreshToken, getAccessToken)


module.exports = router
