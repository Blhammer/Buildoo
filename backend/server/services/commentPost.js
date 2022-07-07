const { createComment, deleteComment } = require("../../database/services/comment");

async function commentCreate(req, res) {
    try {
        const data = req.body;
        if (!data) return res.status(401).send('Invalid data').end();

        const createdComment = await createComment(data);
        return res.status(200).send(createdComment);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function commentDelete(req, res) {
    try {
        const { id } = req.body;

        if (!id) return res.status(401).send('Invalid data').end();

        await deleteComment(id);

        return res.status(200);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

module.exports = {
    commentCreate,
    commentDelete
};