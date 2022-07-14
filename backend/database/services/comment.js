const { mapErrors } = require('../../server/util');
const Comment = require('../models/Comment');
const Service = require('../models/Service');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createComment(data) {
    if (invalidData(data)) {
        return res.status(401).send('Invalid data').end();;
    }

    const serviceId = data.service;
    const currentService = await Service.findById(serviceId);

    if (!currentService) {
        throw new ReferenceError('There is no such id in the database!')
    }

    try {
        const commentModel = new Comment(data);
        const savedComment = await commentModel.save();

        currentService.comments.push(savedComment);
        await currentService.save();

        return savedComment;
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function findAllComments() {
    try {
        return await Comment
            .find()
    } catch (err) {
        errorsHandler(req, res, err);
    }
}

async function deleteComment(id) {
    if (!id) {
        return res.status(401).send('Invalid data').end();;
    }

    await Comment.findByIdAndDelete(id)

    try {
        return (
            await Service
                .findOneAndUpdate(
                    {
                        $pull: {
                            "comments": id
                        }
                    }
                )
        )
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
    createComment,
    findAllComments,
    deleteComment
};