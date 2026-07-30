const { registerService } = require("../services/auth.service");
const { asyncHandler } = require("../utils/asyncHandler");


const registerController = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    const result = await registerService({username, password});
    res.created("Akun berhasil dimasukkan", {
        result
    })
})

module.exports = {registerController}