const express = require('express'); // build the REST APIs
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');

const expressRouter = require('../server/router');

const expressConfiguration = () => {
    const router = express.Router();
    const app = express();

    app.use(cors());
    app.use(cors({ exposedHeaders: "Authorization" }));
    app.use(express.json());
    app.use('/static', express.static("static"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

    // if (process.env.NODE_ENV === "production") {
    //   app.use(express.static("client/build"));
    // }

    // in production environment dev dependencies (the ones in the package.json) are not installed

    app.use(router);
    
    expressRouter(router);

    return app;
}

module.exports = expressConfiguration;