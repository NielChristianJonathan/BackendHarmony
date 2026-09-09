const { updateSongService } = require("../services/songs/update.service");
const { UploadSongService } = require("../services/songs/upload.service");
const { asyncHandler } = require("../utils/asyncHandler");

const getSongs = asyncHandler(async (req, res) => {
    res.ok("HEHEHHE")
})

const uploadSongController = asyncHandler(async (req, res) => {
    const {id} = req.user;
    const {judul, composer, genre, metadata} = req.body;
    const {nameR2} = req;
    const result = await UploadSongService({ id, judul, composer, genre, metadata, nameR2});
    return res.ok("Success", result);  
})

const updateSongController = asyncHandler(async (req, res) => {
    const {idSong, nameR2, metadata} = req.body;
    const {fileType} = metadata;
    const result = await updateSongService({idSong, nameR2, fileType})
    console.log("MASUK SINI");
    res.ok("berhasil", result);
})

module.exports = {getSongs, uploadSongController, updateSongController}