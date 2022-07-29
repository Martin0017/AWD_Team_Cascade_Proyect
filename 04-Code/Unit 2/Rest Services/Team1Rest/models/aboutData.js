const mongoose = require('mongoose')

const aboutDataSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title_1: {
        type: String,
        required: true,
    },
    title_2: {
        type: String,
        required: true
    },
    how_register: {
        type: String,
        required: true
    },
    how_do_web: {
        type: String,
        required: true
    }
}, { collection: 'AboutData' })

module.exports = mongoose.model('AboutData', aboutDataSchema)