const Service = require("../../database/models/Service");
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

async function getServicesCount(req, res) {
    try {
        const servicesCount = await Service.countDocuments().exec();
        return res.status(200).send({ servicesCount });
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function getFilterServices(req, res) {
    try {
        let { querySearch, queryPriceFrom, queryPriceTo } = req.body;
        let cards = await findAllCards();

        if (querySearch) {
            cards = cards.filter(item => {
                return item.title
                    .toLowerCase()
                    .includes(querySearch.toLowerCase())
            });
        }
        if (queryPriceFrom) {
            cards = cards.filter(item => {
                return Number(item.price) >= Number(queryPriceFrom);
            });
        }
        if (queryPriceTo) {
            cards = cards.filter(item => {
                return Number(item.price) <= Number(queryPriceTo);
            });
        }

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

async function getServicesPaginated(req, res) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = [];

    if (endIndex < await Service.countDocuments().exec()) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }

    try {
        results.results = await Service
            .find()
            .limit(limit)
            .skip(startIndex)
            .exec();

        return res.status(200).send(results.results);
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
    getServicesCount,
    getFilterServices,
    getServicesPaginated,
    getServiceById
};