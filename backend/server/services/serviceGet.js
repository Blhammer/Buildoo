const { findAllCards, findOneCard } = require("../../database/services/service");
const { mapErrors } = require("../util");

async function getAllCards(req, res) {
    try {
        const cards = await findAllCards();
        return res.status(200).send(cards);
    } catch (err) {
        errorsHandler(req, res, err);
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
        errorsHandler(req, res, err);
    }
}

function errorsHandler(req, res, err) {
    console.error(err.message);
    const error = mapErrors(err);
    return res.status(500).send({ message: error });
}

module.exports = {
    getAllCards,
    getServiceById
};