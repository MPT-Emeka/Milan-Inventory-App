const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    description: {
        type: String,
        required: true,
        maxlength: 300
    },
    stockQuantity: {
        type: String,
        required: true
    },
    unitPurchasePrice: {
        type: String,
        required: true
    },
    unitSellingPrice: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: String,
        required: true,
    },
    serialNo: {
        type: String,
        required: true
    },
    batchNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);