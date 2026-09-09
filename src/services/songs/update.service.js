const { updateStatusMusic } = require("../../repositories/music.repositories");
const { getSongUrl } = require("../../utils/getSongUrl")

const updateSongService = async ({idSong, nameR2, fileType})  => {
    try {
        const songURL = getSongUrl({idSong, nameR2, fileType});
        await updateStatusMusic({idSong, songURL})
        return null
    } catch (error) {
        throw error
    }
}

module.exports = { updateSongService }