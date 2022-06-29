const Service = require('../../database/models/Services');
const { createService } = require('../../database/services/service');

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

module.exports = {
    cardCreate,
};