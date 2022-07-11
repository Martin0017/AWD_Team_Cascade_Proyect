const mongoose = require('mongoose')

const faunaRouterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    scientific_name: {
        type: String,
        required: true,
    },
    url_image: {
        type: String,
        required: true
    },
    vulgar_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }
}, { collection: 'Fauna' })

module.exports = mongoose.model('Fauna', faunaRouterSchema)