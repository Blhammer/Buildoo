const Service = require('../models/Services');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createService(data) {
    if (!data) {
        return undefined;
    }

    try {
        const serviceModel = new Service(data);
        const savedService = await serviceModel.save();
        return savedService;
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findAllCards() {
    try {
        return await Service
            .find()
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    createService,
    findAllCards
};