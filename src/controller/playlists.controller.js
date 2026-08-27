const { asyncHandler } = require("../utils/asyncHandler");

const createPlaylistController = asyncHandler(async (req, res) => {
    return
})

const getPlaylistController = asyncHandler( async (req, res) => {
    console.log("hehhe");
    res.ok("Berhaasil d")
})

module.exports = {createPlaylistController, getPlaylistController}