const { Schema, model, Types: { ObjectId } } = require('mongoose');
const Comment = require('./Comment');

const PHONE_VALIDATOR = /^\+?[1-9][0-9]{7,14}$/;
const IMAGE_PATTERN = /^https?:\/\//;

const ServiceSchema = new Schema({
    title: { type: String, required: [true, 'Title is required!'], minlength: 5, maxlength: 30 },
    town: { type: String, required: [true, 'Town is required!'], minlength: 3, maxlength: 20 },
    street: { type: String, required: [true, 'Address is required!'], minlength: 5, maxlength: 20 },
    phone: {
        type: String,
        requires: [true, 'Phone is required!'],
        validate: {
            validator: (value) => {
                return PHONE_VALIDATOR.test(value)
            },
            message: (props) => {
                `${props.value} is invalid phone number!`
            }
        }
    },
    imageUrl: { type: String, required: [true, 'Image is required!'], default: 'noImage.jpg', match: IMAGE_PATTERN },
    payments: { type: String, required: [true, 'Payment is required!'] },
    price: { type: Number, requires: [true, 'Price is required!'], min: 1, max: 100000 },
    service: { type: String, required: [true, 'Service is required!'] },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [30, 'Description must be at least 30 characters long!']
    },
    currentDate: { type: String },
    comments: { type: [ObjectId], ref: 'Comment' },
    owner: { type: ObjectId, ref: 'User' }
});

const Service = model('Service', ServiceSchema);

module.exports = Service;