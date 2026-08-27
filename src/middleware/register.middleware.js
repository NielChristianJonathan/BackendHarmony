const { BAD_REQUEST } = require("../constant/status");
const { AppError } = require("../utils/appError");

const registerMiddleware = (req, res, next) => {
    try {
        console.log(req.body);
        const {username, password, checkPassword} = req.body;
        if (!username) throw new AppError("Masukan username", BAD_REQUEST)
        if (!password) throw new AppError("Masukan password", BAD_REQUEST)
        if (!checkPassword) throw new AppError("Masukan password", BAD_REQUEST)
        if (password != checkPassword) throw new AppError("Password Berbeda", BAD_REQUEST)
        next()
    } catch (error) {
        next(error)
    }
}


module.exports = {registerMiddleware}