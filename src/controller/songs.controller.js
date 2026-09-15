const { getSongsService, getMySongService } = require("../services/songs/get.service");
const { updateSongService } = require("../services/songs/update.service");
const { UploadSongService } = require("../services/songs/upload.service");
const { asyncHandler } = require("../utils/asyncHandler");

const getSongs = asyncHandler(async (req, res) => {
    const result = await getSongsService()
    const user = req.user;
    result.user = user
    res.ok("Berhasil", result)
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
    res.ok("berhasil", result);
})

const getMySongController = asyncHandler(async (req, res) => {
    const {userid} = req.headers;
    const {page, limit} = req.query;
    const result = await getMySongService({page, limit, userid})
    res.ok("Berhasil", result)
})

module.exports = {getSongs, uploadSongController, updateSongController, getMySongController}