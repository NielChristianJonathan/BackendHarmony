const { poolPg } = require("../config/supabase")
const { INTERNAL_SERVER_ERROR } = require("../constant/status")
const { AppError } = require("../utils/appError")
const uploadMetadata = async ({user_id, name, genre, composer, metadata,}) => {
    try {
        const idSong = await poolPg.query(`
            insert into songs (user_id, name, genre, composer, duration, file_name, file_size, file_type, status)
            values ($1, $2, $3, $4, $5, $6, $7, $8, 'uploading')
            returning id
            `, [user_id, name, genre, composer, metadata.fileDuration,metadata.fileName, metadata.fileSize, metadata.fileType])
        return idSong.rows[0]
    } catch (error) {
        console.log(error)
        throw new AppError("Failed Database", INTERNAL_SERVER_ERROR)
    }
}

module.exports = { uploadMetadata }