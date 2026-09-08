const { UNAUTHORIZED } = require("../constant/status");
const { AppError } = require("../utils/appError");
const { verifyAccesToken } = require("../utils/jwt");

const ValidationAccessToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new AppError("Unauthorized", UNAUTHORIZED)
        }
        const accessToken = authHeader.split(" ")[1];
        const result = verifyAccesToken({accessToken})
        req.user = result;
        next()
    } catch (error) {
        throw error
        
    }
}

module.exports = {ValidationAccessToken}