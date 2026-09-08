const jwt = require("jsonwebtoken");
const { ACCESS_SECRET_TOKEN, REFRESH_SECRET_TOKEN } = require("../constant/env");
const { AppError } = require("./appError");
const { FORBIDDEN, UNAUTHORIZED } = require("../constant/status");


const generateAccessToken = ({id, username}) => {
    return jwt.sign(
        {
            username,
            id
        },
        ACCESS_SECRET_TOKEN,
        {
            expiresIn: "15m"
        }
    )
}

const generateRefreshToken = ({id, username}) => {
    return jwt.sign(
        {
            username, 
            id
        },
        REFRESH_SECRET_TOKEN,
        {
            expiresIn: "7d"
        }
    )
}

const verifyAccesToken = ({accessToken}) => {
    try {
        return jwt.verify(accessToken, ACCESS_SECRET_TOKEN)
    } catch (error) {
        throw new AppError("Unauthorized", UNAUTHORIZED)
    }
}

const verifyRefreshToken = ({refreshToken}) => {
    try {
        return jwt.verify(refreshToken, REFRESH_SECRET_TOKEN)
    } catch (error) {
        throw new AppError("Tidak ada session", FORBIDDEN)
    }
}
module.exports = { generateAccessToken, generateRefreshToken, verifyAccesToken, verifyRefreshToken }