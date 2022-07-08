const Comment = require('../models/Comment');
const Service = require('../models/Service');

const invalidData = (data) => {
    return !data || typeof data !== 'object';
}

async function createComment(data) {
    if (invalidData(data)) {
        return undefined;
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
        console.error(err);
        return undefined;
    }
}

async function findAllComments() {
    try {
        return await Comment
            .find()
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

async function deleteComment(id) {
    if (!id) {
        return undefined;
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
        console.error(err);
        return undefined;
    }
}

module.exports = {
    createComment,
    findAllComments,
    deleteComment
};