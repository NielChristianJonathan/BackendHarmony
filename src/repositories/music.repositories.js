const { poolPg } = require("../config/supabase")
const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = require("../constant/status")
const { AppError } = require("../utils/appError")
const uploadMetadata = async ({user_id, name, genre, composer, metadata, nameR2}) => {
    try {
        const idSong = await poolPg.query(`
            insert into songs (user_id, name, genre, composer, duration, file_name, file_size, file_type, status, name_r2)
            values ($1, $2, $3, $4, $5, $6, $7, $8, 'uploading', $9)
            returning id
            `, [user_id, name, genre, composer, metadata.fileDuration,metadata.fileName, metadata.fileSize, metadata.fileType, nameR2])
        
        return idSong.rows[0]
    } catch (error) {
        if (error.code === "23505") throw new AppError("Nama sudah dipakai", BAD_REQUEST)
        throw new AppError("Failed Database", INTERNAL_SERVER_ERROR)
    }
}

const updateStatusMusic = async ({idSong, songURL}) => {
    try {
        await poolPg.query(`
            update songs
                set
                    status = 'uploaded',
                    audio_url = $1
                where id = $2 
            `, [songURL, idSong]
        )
    } catch (error) {
        throw new AppError("Failed Database", INTERNAL_SERVER_ERROR)
    }
}

const getSongs = async() => {
    try {
        const songs = await poolPg.query(`
            select * from songs limit 10
            `
        )
        return songs.rows
        
    } catch (error) {
        throw new AppError("Failed Database", 500)
    }
}

const getMySongs = async({limit, offset, userid}) => {
    try {        
        const result = await poolPg.query(`
            select * from songs 
            where user_id = $1
            order by created_at
            limit $2 offset $3
            `, [userid, limit, offset]
        )
        
        return result.rows
        
    } catch (error) {
        console.log((error));
        
        throw new AppError("Failed Database", 500)
    }
}
module.exports = { uploadMetadata, updateStatusMusic, getSongs, getMySongs }