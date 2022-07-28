const Service = require('../models/Service');

async function like(userId, dataId) {
    try {
        const currentService = await Service.findById(dataId);

        currentService.likes.push(userId);
        await currentService.save();

        return currentService;
    } catch (err) {
        errorsHandler(req, res, err);
    }
};

async function dislike(userId, dataId) {
    try {
        const currentService = await Service
            .findOneAndUpdate(
                {
                    '_id': dataId
                },
                {
                    $pull: {
                        "likes": userId
                    }
                }
            );
        currentService.save();
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
    like,
    dislike
};