const { verifyRefreshToken } = require("../utils/jwt");

const ValidationRefreshToken = (req, res, next) => {
    try {
        const refreshToken = req.cookies.RefreshToken;
        const result = verifyRefreshToken({refreshToken});
        req.user = result;
        next()
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {ValidationRefreshToken}