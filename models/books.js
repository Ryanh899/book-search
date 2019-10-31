const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:  String,
    authors: [String],
    description:   String,
    thumbnail: String,
    link: String,
    id: String,
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel; 