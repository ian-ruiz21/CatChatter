const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    cat: {  // Reference to the cat
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    activity: {
        type: String,
        required: true
    },
    health: {
        type: String
    }
});

module.exports = mongoose.model("Update", updateSchema);
