const errorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.error(err.statusCode, err.message, err.errors)
    }
    return res.status(500).json({
        message: "Kesalahan sistem",
        errors: null
    })
}