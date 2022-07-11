const processFile = require('../middleware/upload');
const { format } = require('util');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({ keyFilename: 'temporal-ground-354909-181a10c747f5.json' });
const bucket = storage.bucket('buildoo');

const upload = async (req, res) => {
    try {
        await processFile(req, res);
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false
        });

        blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        });

        blobStream.on("finish", async (data) => {
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );

            try {
                await bucket.file(req.file.originalname).makePublic();
            } catch {
                return res.status(500).send({
                    message:
                        `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
                    url: publicUrl,
                });
            }

            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
                url: publicUrl,
            });
        });

        blobStream.end(req.file.buffer);

    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};

const getListFiles = async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        let fileInfos = [];
        files.forEach((file) => {
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${file.name}`
            );
            fileInfos.push({
                name: file.name,
                url: publicUrl,
            });
        });
        res.status(200).send(fileInfos);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Unable to read list of files!",
        });
    }
};

const deleteFile = async (req, res) => {
    var file = bucket.file(req.body.imageName);

    if (file) {
        file.delete(function (err, response) {
            if (err) {
                console.error(err);
            }
            else {
                console.log("Deleted successfully");
            }
        });
    } else {
        console.error('Invalid data!');
    }
};

module.exports = {
    upload,
    getListFiles,
    deleteFile
};