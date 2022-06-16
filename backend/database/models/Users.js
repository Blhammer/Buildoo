const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.plugin(uniqueValidator);
const User = model('User', UserSchema);

module.exports = User;