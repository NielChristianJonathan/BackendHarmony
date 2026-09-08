const { uploadMetadata } = require("../../repositories/music.repositories");
const { GetPresignedURL } = require("../../utils/r2Song");

const UploadSongService = async ({id, judul, composer, genre, metadata}) => {
    try {
        const idSong = await uploadMetadata({user_id: id, name: judul, genre, composer, metadata})
        const presignedurl = await GetPresignedURL({id: idSong.id, name: judul, contentType: metadata.fileType});
        return {idSong:idSong.id, presignedurl, name:judul}
    } catch (error) {
        throw error    
    }

}

module.exports = { UploadSongService }