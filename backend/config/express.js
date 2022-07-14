const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");

const expressRouter = require('../server/router');

const expressConfiguration = () => {
    const router = express.Router();
    const app = express();

    app.use(cors());
    app.use(cors({ exposedHeaders: "Authorization" }));
    app.use(express.json());
    app.use(express.static("static"));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("../public"));
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });
    }

    app.use(router);
    expressRouter(router);

    return app;
}

module.exports = expressConfiguration;