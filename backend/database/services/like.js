const Service = require('../models/Service');

async function like(userId, dataId) {
    const currentService = await Service.findById(dataId);

    try {
        currentService.likes.push(userId);
        await currentService.save();

        return currentService;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

async function dislike(userId, dataId) {
    try {
        const update = await Service
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
        update.save()
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

module.exports = {
    like,
    dislike
};