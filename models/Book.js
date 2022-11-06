const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    author: {
        type:mongoose.Schema.Types.ObjectId, ref: 'Author',
        required: [true, 'A Book Needs to have a author ID'],
    },
    title: {
        type: String,
        required: [true, 'A Book Needs to have a Title'],
    },
    isbn: {
        type:String,
        required: [true, 'A Book Needs to have ISBN']
    }
})
module.exports = mongoose.model ('Book', bookSchema);