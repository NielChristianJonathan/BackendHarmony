const CONTENT_TYPE = {
    MP3: "audio/mpeg",
    WAV: "audio/wav",
    FLAC: "audio/flac",
    M4A: "audio/mp4",
}
const EXTENSION_FROM_TYPE = {
  "audio/mpeg": "mp3",
  "audio/wav": "wav",
  "audio/flac": "flac",
  "audio/mp4": "m4a",
}
module.exports = {CONTENT_TYPE, EXTENSION_FROM_TYPE}