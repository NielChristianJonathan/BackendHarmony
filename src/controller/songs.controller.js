const { asyncHandler } = require("../utils/asyncHandler");

const getSongs = asyncHandler(async (req, res) => {
    res.ok("Berhasilll")
})

module.exports = {getSongs}