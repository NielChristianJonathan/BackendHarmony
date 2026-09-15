const { getSongs, getMySongs } = require("../../repositories/music.repositories")

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
        const offset = (page-1) * limit
        const mySongs = await getMySongs({limit, offset, userid})        
        return {mySongs}
    } catch (error) {
        throw error
    }
}
module.exports = { getSongsService, getMySongService }