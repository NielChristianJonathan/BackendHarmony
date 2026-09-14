const { BAD_REQUEST } = require("../constant/status");
const { cekUsername, register, getUsers } = require("../repositories/auth.repositories");
const { AppError } = require("../utils/appError");
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

const registerService = async ({username, password}) => {
    try {
        const usernameDB = await cekUsername({username});
        if (username.rows) throw new AppError("Username sudah digunakan", BAD_REQUEST);
        const hashPass = await bcrypt.hash(password, 10);
        await register({username, password: hashPass})
        console.log("Berhasil register")
        return {}
    } catch (error) {
        throw error
    }
}

const loginService = async ({username, password}) => {
    try {
        const users = await getUsers({username});
        const checkPass = await bcrypt.compare(password, users.password);
        if (!checkPass) {
            throw new AppError("Password Salah", BAD_REQUEST)
        }
        const userId = users.id
        const accessToken = generateAccessToken({username: users.username, id: users.id});
        const refreshToken = generateRefreshToken({username: users.username, id: users.id});
        
        return {accessToken, refreshToken, userId} 
    } catch (error) {
        throw error
    }
}


module.exports = { registerService, loginService }