const { PutObjectCommand} = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const { S3 } = require("../config/r2");
const { EXTENSION_FROM_TYPE } = require("../constant/contentType");
const GetPresignedURL = async ({id, nameR2, contentType}) => {
    try {
        console.log(`${id}/${nameR2}.mp3`);
        const type = EXTENSION_FROM_TYPE[contentType];
        const signedUrl = await getSignedUrl(
            S3,
            new PutObjectCommand({
                Bucket: "songs",
                Key: `${id}/${nameR2}.${type}`,
                ContentType: contentType
            }),
            { expiresIn: 3600 },
        )
        return signedUrl
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {GetPresignedURL}