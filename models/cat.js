const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    birthday: {
        type: Date,
        default: null
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    photo: {
        type: String
    },
    updates: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Update'
    }                       
});

module.exports = mongoose.model("Cat", catSchema);