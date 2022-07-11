const { findAllCards, findOneCard } = require("../../database/services/service");

async function getAllCards(req, res) {
    try {
        const cards = await findAllCards();
        return res.status(200).send(cards);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function getServiceById(req, res) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(401).end();
        }

        const card = await findOneCard(id);
        return res.status(200).send(card);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    getAllCards,
    getServiceById
};