const { Schema, model, Types: { ObjectId } } = require('mongoose');

const PHONE_VALIDATOR = /^\+?[1-9][0-9]{7,14}$/;
const IMAGE_PATTERN = /^https?:\/\//;

const ServiceSchema = new Schema({
    title: { type: String, required: [true, 'Title is required!'], minlength: 5, maxlength: 30 },
    town: { type: String, required: [true, 'Town is required!'], minlength: 3, maxlength: 20 },
    street: { type: String, required: [true, 'Address is required!'], minlength: 5, maxlength: 20 },
    phone: {
        type: String,
        required: [true, 'Phone is required!'],
        validate: {
            validator: (value) => {
                return PHONE_VALIDATOR.test(value)
            },
            message: (props) => {
                `${props.value} is invalid phone number!`
            }
        }
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required!'],
        default: 'noImage.jpg',
        validate: {
            validator(value) {
                return IMAGE_PATTERN.test(value);
            },
            message: (props) => {
                `${props.value} must be a valid URL!`
            }
        }
    },
    paymentMethod: { type: String, required: [true, 'Payment is required!'] },
    price: { type: Number, required: [true, 'Price is required!'], min: 1, max: 100000 },
    chooseService: { type: String, required: [true, 'Service is required!'] },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [30, 'Description must be at least 30 characters long!'],
        maxlength: [500, 'Description must not be more than 500 characters long!']
    },
    currentDate: { type: String },
    comments: { type: [ObjectId], ref: 'Comment' },
    likes: { type: [ObjectId], ref: 'User' },
    owner: { type: Object, ref: 'User' },
    imageName: { type: String }
});

const Service = model('Service', ServiceSchema);

module.exports = Service;