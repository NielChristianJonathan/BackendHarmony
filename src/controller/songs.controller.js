const { UploadSongService } = require("../services/songs/upload.service");
const { asyncHandler } = require("../utils/asyncHandler");

const getSongs = asyncHandler(async (req, res) => {
    res.ok("HEHEHHE")
})

const uploadSongController = asyncHandler(async (req, res) => {
    const {username, id} = req.user;
    const {judul, composer, genre, metadata} = req.body;
    console.log("MASUK SINIIII")
    const result = UploadSongService({username, id, judul, composer, genre, metadata});
    return res.ok(result);  
})

module.exports = {getSongs, uploadSongController}