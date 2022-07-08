const { createService, updateService, deleteCurrentCard } = require('../../database/services/service');

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

async function cardDelete(req, res) {
    try {
        const { id } = req.body;

        if (!id) return res.status(401).send('Invalid data').end();
        
        await deleteCurrentCard(id);

        return res.status(200);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    cardCreate,
    serviceUpdate,
    cardDelete
};