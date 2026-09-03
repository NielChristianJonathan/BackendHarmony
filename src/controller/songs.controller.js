const { UploadSongService } = require("../services/songs/upload.service");
const { asyncHandler } = require("../utils/asyncHandler");

const getSongs = asyncHandler(async (req, res) => {
    res.ok("HEHEHHE")
})

const uploadSongController = asyncHandler(async (req, res) => {
    const {username, id} = req.user;
    const result = UploadSongService({username, id});
    
    return res.ok(result);
})


module.exports = {getSongs, uploadSongController}   