const http = require('http');
const path = require('path');

const configFile = require('./config');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/mongoDb');

require('./database/models/Comment');
require('./database/models/Service');
require('./database/models/User');

start();

function start() {
    const app = expressConfig();
    databaseConfig();

    const server = http.createServer(app);

    const PORT = configFile.port;

    server.listen(PORT, () => {
        console.log(`Server is listening to port ${PORT}`);
    });
};