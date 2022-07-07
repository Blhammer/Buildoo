const { Schema, model, Types: { ObjectId } } = require('mongoose');

const CommentSchema = new Schema({
    author: { type: String, required: true },
    content: { type: String, required: true, minlength: 1, maxlength: 300 },
    owner: { type: ObjectId, ref: 'User' },
    service: { type: ObjectId, ref: 'Service' }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;