const { uploadMetadata } = require("../../repositories/music.repositories")

const UploadSongService = async ({username, id, judul, composer, genre, metadata}) => {
    try {
        const idSong = await uploadMetadata({user_id: id, name: judul, genre, composer, metadata})
        console.log(idSong);
        return metadata
    } catch (error) {
        throw error    
    }

}

module.exports = { UploadSongService }