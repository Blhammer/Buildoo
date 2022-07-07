const { findAllComments } = require("../../database/services/comment");

async function getAllComments(req, res) {
    try {
        const comments = await findAllComments();
        return res.status(200).send(comments);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    getAllComments
};