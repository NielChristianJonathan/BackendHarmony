const ValidationAccessToken = (req, res, next) => {
    try {
        console.log("Masuk sini oiii")
        next()
    } catch (error) {
        throw error
    }
}

module.exports = {ValidationAccessToken}