const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A Author needs to have a first name']
    },
    lastName: {
        type: String,
        required: [true, 'A Author needs to have a last name']
    }
})
module.exports = mongoose.model('Author', authorSchema);