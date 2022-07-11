const { like, dislike } = require("../../database/services/like");

async function createLike(req, res) {
    try {
        const { userId, dataId } = req.body;
        if (!userId && !dataId) {
            return res.status(401).send('Invalid data!').end();
        }

        await like(userId, dataId);

        return res.status(200);
    } catch (err) {
        console.error(err);
        return undefined;
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
        console.error(err);
        return undefined;
    }
};

module.exports = {
    createLike,
    createDislike
};