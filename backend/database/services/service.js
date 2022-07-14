const { mapErrors } = require('../../server/util');
const Service = require('../models/Service');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createService(data) {
    if (invalidData(data)) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        const serviceModel = new Service(data);
        const savedService = await serviceModel.save();
        return savedService;
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function deleteCurrentCard(id) {
    if (!id) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await Service
            .findByIdAndDelete(id)
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function updateService(body) {
    if (invalidData(body)) {
        return res.status(401).send('Invalid data').end();
    }

    try {
        return await Service
            .findOneAndUpdate({ _id: body.userId }, body, { new: true })
            .populate('currentDate')
            .populate('comments')
            .populate('likes')
            .populate('owner')
    } catch (err) {
        errorsHandler(req, res, err);
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
        errorsHandler(req, res, err);
    }
}

async function findOneCard(id) {
    try {
        return await Service
            .findById(id)
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    return res.status(500).send({ message: error });
}

module.exports = {
    createService,
    deleteCurrentCard,
    updateService,
    findAllCards,
    findOneCard
};