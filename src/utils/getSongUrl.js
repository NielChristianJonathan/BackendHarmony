const { EXTENSION_FROM_TYPE } = require("../constant/contentType");
const { PUBLIC_URL_BASE } = require("../constant/env")
const { AppError } = require("./appError")

const getSongUrl = ({idSong, name, fileType}) => {
    try {
        const type = EXTENSION_FROM_TYPE[fileType]
        const songUrl = `${PUBLIC_URL_BASE}/${idSong}/${name}.${type}`;
        return songUrl
    } catch (error) {
        throw new AppError("Tidak ada public url", 500)
    }
}

module.exports = { getSongUrl }