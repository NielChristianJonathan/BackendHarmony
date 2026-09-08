const {S3Client} = require("@aws-sdk/client-s3");
const { R2_ACCOUNT_ID, R2_WRITE_ACCESS_KEY_ID, R2_WRITE_SECRET_ACCESS_KEY } = require("../constant/env");

const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_WRITE_ACCESS_KEY_ID,
        secretAccessKey: R2_WRITE_SECRET_ACCESS_KEY
    }
});

module.exports =  {S3};