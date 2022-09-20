const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    dateOfEntry: {
        type: String,
        required: true,
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
    batchNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('inventory', inventorySchema);