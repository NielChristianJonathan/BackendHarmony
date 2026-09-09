const { uploadMetadata } = require("../../repositories/music.repositories");
const { GetPresignedURL } = require("../../utils/r2Song");

const UploadSongService = async ({id, judul, composer, genre, metadata, nameR2}) => {
    try {
        const idSong = await uploadMetadata({user_id: id, name: judul, genre, composer, metadata, nameR2})
        const presignedurl = await GetPresignedURL({id: idSong.id, nameR2, contentType: metadata.fileType});
        return {idSong:idSong.id, presignedurl, nameR2}
    } catch (error) {
        throw error    
    }

}

module.exports = { UploadSongService }