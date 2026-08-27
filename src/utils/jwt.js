const jwt = require("jsonwebtoken");
const { ACCESS_SECRET_TOKEN, REFRESH_SECRET_TOKEN } = require("../constant/env");


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
module.exports = { generateAccessToken, generateRefreshToken }