const express = require('express'); // build the REST APIs
const cors = require('cors'); 

const expressRouter = require('../server/router');

const expressConfiguration = () => {
    const router = express.Router();
    const app = express();

    app.use(cors());
    app.use(cors({ exposedHeaders: "Authorization" }));
    app.use(express.json());
    app.use('/static', express.static("static"));
    app.use(express.urlencoded({ extended: true }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../frontend/build'));
        app.get('*', (req, res) => {
            req.sendFile(__dirname, '../frontend/build', 'index.html');
        });
    }

    app.use(router);
    expressRouter(router);
    
    return app;
}

module.exports = expressConfiguration;