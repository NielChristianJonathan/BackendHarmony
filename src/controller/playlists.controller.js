const { asyncHandler } = require("../utils/asyncHandler");

const createPlaylistController = asyncHandler(async (req, res) => {
    return
})

const getPlaylistController = asyncHandler( async (req, res) => {
    res.ok("Berhaasil d")
})

module.exports = {createPlaylistController, getPlaylistController}