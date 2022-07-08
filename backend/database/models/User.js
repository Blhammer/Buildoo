const { Schema, model, Types: { ObjectId } } = require('mongoose');

const EMAIL_PATTERN = /^([a-z0-9.]{3,25})@([a-z]{3,6}).([a-z]{2,5}$)/g;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long!'],
        maxlength: [20, 'First name cannot be longer than 20 characters!']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long!'],
        maxlength: [20, 'First name cannot be longer than 20 characters!']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return EMAIL_PATTERN.test(value)
            },
            message: (props) =>
                `${props.value} is invalid email address!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 60
    },
    isAdmin: { type: Boolean, default: false },
    likes: { type: [ObjectId], ref: 'Service' }
});

const User = model('User', UserSchema);

module.exports = User;