const { BAD_REQUEST } = require("../constant/status");
const { AppError } = require("../utils/appError");

const musikUploadMiddleware = (req, res, next) => {
    try {
        const {judul, composer, genre, metadata} = req.body;
        console.log(req.body)
        if (!judul.trim()) throw new AppError("Mohon Masukkan Judul Lagu", BAD_REQUEST);
        if (!composer.trim()) throw new AppError("Mohon Masukkan Composer Lagu", BAD_REQUEST);
        if (!genre.trim()) throw new AppError("Mohon Masukkan Genre Lagu", BAD_REQUEST);
        if (metadata.fileType !== "audio/mpeg") throw new AppError("Tipe file tidak diterima", BAD_REQUEST);
        next()
    } catch (error) {
        throw error
    }
}

module.exports = {musikUploadMiddleware}