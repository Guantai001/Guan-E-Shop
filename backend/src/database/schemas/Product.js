const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    image: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
});

module.exports = mongoose.model('product', ProductSchema);
