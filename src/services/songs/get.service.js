const { getSongs } = require("../../repositories/music.repositories")

const getSongsService = async() => {
    try {
        const songs = await getSongs();
        return songs
    } catch (error) {
        throw error
    }
}

const getMySongService = async({userid, page, limit}) => {
    try {
        
        return null
    } catch (error) {
        throw error
    }
}
module.exports = { getSongsService, getMySongService }