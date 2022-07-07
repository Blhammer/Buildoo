const { findAllCards } = require("../../database/services/service");

async function getAllCards(req, res) {
    try {
        const cards = await findAllCards();
        return res.status(200).send(cards);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    getAllCards,
};