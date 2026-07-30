const { poolPg } = require("../config/supabase");
const { INTERNAL_SERVER_ERROR } = require("../constant/status");
const { AppError } = require("../utils/appError");
const { asyncHandler } = require("../utils/asyncHandler");

const register = async({username, password}) => {
    try {
        console.log(username, password)
        await poolPg.query(`
            INSERT INTO users (username, password)
            VALUES ($1, $2)
            `, [username, password]
        )
    } catch (error) {
        console.log(error)
        throw new AppError("Failed Database", INTERNAL_SERVER_ERROR)
    }
}

const cekUsername = async({username}) => {
    try {
        const result = await poolPg.query(`
            SELECT * FROM users WHERE USERNAME = $1
            `, [username]
        );
        return result;
    } catch (error) {
        throw new AppError("Failed Database", INTERNAL_SERVER_ERROR)
    }
}

module.exports = { register, cekUsername }