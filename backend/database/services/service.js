const Service = require('../models/Service');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createService(data) {
    if (invalidData(data)) {
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

async function deleteCurrentCard(id) {
    if (!id) {
        return undefined;
    }

    try {
        return await Service
            .findByIdAndDelete(id)
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function updateService(body) {
    if (invalidData(body)) {
        return undefined;
    }

    try {
        return await Service
            .findOneAndUpdate({ _id: body.userId }, body, { new: true })
            .populate('currentDate')
            .populate('comments')
            .populate('likes')
            .populate('owner')
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findAllCards() {
    try {
        return await Service
            .find()
            .populate('currentDate')
            .populate('comments')
            .populate('likes')
            .populate('owner')
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function findOneCard(id) {
    try {
        return await Service
            .findById(id)
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    createService,
    deleteCurrentCard,
    updateService,
    findAllCards,
    findOneCard
};