
const loginMiddleware = (req, res, next) => {
    try {
        const {username, password} = req.body;
        if (!username) throw new AppError("Masukan username", BAD_REQUEST)
        if (!password) throw new AppError("Masukan password", BAD_REQUEST)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { loginMiddleware }