const { BAD_REQUEST } = require("../constant/status");
const { cekUsername, register } = require("../repositories/auth.repositories");
const { AppError } = require("../utils/appError");
const bcrypt = require("bcrypt");

const registerService = async ({username, password}) => {
    try {
        const usernameDB = await cekUsername({username});
        if (username.rows) throw new AppError("Username sudah digunakan", BAD_REQUEST);
        const hashPass = await bcrypt.hash(password, 10);
        await register({username, password: hashPass})
        return {}
    } catch (error) {
        throw error
    }
}


module.exports = { registerService }