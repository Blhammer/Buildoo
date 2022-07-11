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

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../frontend/build'));
        app.get('*', (req, res) => {
            res.sendFile(__dirname, '../frontend/build', 'index.html');
        });
    }

    server.listen(port, () => {
        console.log(`Server is listening to port ${port}`);
    });
}