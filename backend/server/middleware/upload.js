const util = require('util');
const Multer = require('multer');

const maxSize = 2 * 1024 * 1024;

// configure multer to use Memory Storage engine
let processFile = Multer({
    storage: Multer.memoryStorage(),
    limits: { fileSize: maxSize }
}).single('file');

// the exported middleware object can be used with async-await
let processFileMiddleware = util.promisify(processFile);

module.exports = processFileMiddleware;