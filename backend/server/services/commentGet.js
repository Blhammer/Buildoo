const { findAllComments } = require("../../database/services/comment");
const { mapErrors } = require("../util");

async function getAllComments(req, res) {
    try {
        const comments = await findAllComments();
        return res.status(200).send(comments);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(500).send({ message: error });
    }
}

module.exports = {
    getAllComments
};