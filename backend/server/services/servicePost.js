const { createService, updateService, deleteCurrentCard } = require('../../database/services/service');
const { mapErrors } = require('../util');

async function cardCreate(req, res) {
    try {
        const data = req.body;

        if (!data) {
            return res.status(401).send('Invalid data').end();
        }

        const createdService = await createService(data);
        return res.status(200).send(createdService);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function serviceUpdate(req, res) {
    try {
        const data = req.body;

        if (!data) {
            return res.status(401).send('Invalid data').end();
        }

        const updatedService = await updateService(data);
        return res.status(200).send(updatedService);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function cardDelete(req, res) {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(401).send('Invalid data').end();
        }

        await deleteCurrentCard(id);

        return res.status(200);
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
    cardCreate,
    serviceUpdate,
    cardDelete
};