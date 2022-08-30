const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    items: {
        type: String,
        required: false,
        title: String,
        cost: Number,
        Description: String 
    }
});

module.exports = mongoose.model('storeOwner', modelSchema);