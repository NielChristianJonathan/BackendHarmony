const { updateStatusMusic } = require("../../repositories/music.repositories");
const { getSongUrl } = require("../../utils/getSongUrl")

const updateSongService = async ({idSong, name, fileType})  => {
    try {
        const songURL = getSongUrl({idSong, name, fileType});
        await updateStatusMusic({idSong, songURL})
        return null
    } catch (error) {
        throw error
    }
}

module.exports = { updateSongService }