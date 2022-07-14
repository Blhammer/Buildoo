const { createComment, deleteComment } = require("../../database/services/comment");
const { mapErrors } = require("../util");

async function commentCreate(req, res) {
    try {
        const data = req.body;
        if (!data) return res.status(401).send('Invalid data').end();

        const createdComment = await createComment(data);
        return res.status(200).send(createdComment);
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function commentDelete(req, res) {
    try {
        const { id } = req.body;
        if (!id) return res.status(401).send('Invalid data').end();

        await deleteComment(id);

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
    commentCreate,
    commentDelete
};