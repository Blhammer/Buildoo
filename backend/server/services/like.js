const { like, dislike } = require("../../database/services/like");
const { mapErrors } = require("../util");

async function createLike(req, res) {
    try {
        const { userId, dataId } = req.body;
        if (!userId && !dataId) {
            return res.status(401).send('Invalid data!').end();
        }

        await like(userId, dataId);

        return res.status(200);
    } catch (err) {
        errorsHandler(req, res, err);
    }
};

async function createDislike(req, res) {
    try {
        const { userId, dataId } = req.body;
        if (!userId && !dataId) {
            return res.status(401).send('Invalid data!').end();
        }

        await dislike(userId, dataId);

        return res.status(200);
    } catch (err) {
        errorsHandler(req, res, err);
    }
};

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    return res.status(500).send({ message: error });
}

module.exports = {
    createLike,
    createDislike
};