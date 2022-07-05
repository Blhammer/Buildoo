const Service = require('../../database/models/Service');
const { createService, updateService } = require('../../database/services/service');

async function cardCreate(req, res) {
    try {
        const data = req.body;

        if (!data) return res.status(401).send('Invalid data').end();

        const createdService = await createService(data);
        return res.status(200).send(createdService);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function serviceUpdate(req, res) {
    try {
        const data = req.body;
        
        if (!data) return res.status(401).send('Invalid data').end();

        const updatedService = await updateService(data);
        return res.status(200).send(updatedService);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    cardCreate,
    serviceUpdate
};