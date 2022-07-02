const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ServiceSchema = new Schema({
    title: { type: String, required: true, minlength: 5 },
    town: { type: String, required: true },
    street: { type: String, required: true },
    imageUrl: { type: String, required: true, default: 'noImage.jpg' },
    payments: { type: String, required: true },
    service: { type: String, required: true },
    description: { type: String, required: true, minlength: 5 },
    currentDate: { type: String }
});

ServiceSchema.plugin(uniqueValidator);
const Service = model('Service', ServiceSchema);

module.exports = Service;