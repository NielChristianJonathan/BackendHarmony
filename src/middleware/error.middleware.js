const { AppError } = require("../utils/appError")

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.error(err.statusCode, err.message, err.errors)
    }
    console.log(err)
    return res.status(500).json({
        message: "Kesalahan sistem",
        errors: null
    })
}

module.exports = {errorMiddleware}