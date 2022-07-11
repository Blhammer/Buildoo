const http = require('http');

const configFile = require('./config');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/mongoDb');

start();

function start() {
    const app = expressConfig();
    const server = http.createServer(app);
    databaseConfig();

    const port = configFile.port;

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    server.listen(port, () => {
        console.log(`Server is listening to port ${port}`);
    });
}