const { registerService, loginService } = require("../services/auth.service");
const { asyncHandler } = require("../utils/asyncHandler");
const { generateAccessToken } = require("../utils/jwt");


const registerController = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    const result = await registerService({username, password});
    res.created("Akun berhasil dimasukkan", {
        result
    })
})

const loginController = asyncHandler( async (req, res) => {
    const {username, password} = req.body;
    const result = await loginService({username, password});
    const { refreshToken, accessToken, userId } = result
    res.cookie("RefreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
        sameSite: "lax"
    })
    
    res.ok("Berhasil Login", {accessToken, userId})
})

const getAccessToken = asyncHandler( async (req, res) => {
    const {username, id} = req.user;
    const accessToken = generateAccessToken({id, username});
    res.ok("Berhasil Login", {accessToken})
})
module.exports = {registerController, loginController, getAccessToken}