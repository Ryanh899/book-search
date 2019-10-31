const express = require('express'); 
const router = express.Router(); 
const googleBooks = require('./google-books.js'); 
const BookModel = require('../../models/books'); 

router.get('/books', (req, res) => {
    googleBooks.searchByTitle('To Kill a Mockingbird', res);
    res.json('books')
}); 

router.get('/books/saved', (req, res) => {
    BookModel.find({}, (err, Books) => {
        console.log(Books)
        res.json(Books); 
    })
}); 

router.post('/add/:book', (req, res) => {
    googleBooks.addBooks(req.params.book)
    res.send('booksAdded')
}); 

router.post('/add/book/:id', (req, res) => {
    googleBooks.addById(req.params.id, res); 
}); 

router.delete('/delete/book/:id', (req, res) => {
    googleBooks.deleteById(req.params.id, res); 
}); 

router.get('/books/:category', (req, res) => {
    console.log('hit')
    googleBooks.getBooksByCategory(req.params.category, res); 
}); 

router.get('/books/:category/:search', (req, res) => {
    if (req.params.category === 'Genre') {
        console.log('Genre', req.params.search)
        googleBooks.getBooksByCategory(req.params.search, res); 
    } else if (req.params.category === 'Title') {
        console.log('Title', req.params.search)
        googleBooks.searchByTitle(req.params.search, res); 
    } else if (req.params.category === 'Author') {
        console.log('Author', req.params.search)
        googleBooks.getBooksByAuthor(req.params.search, res)
    } 
}); 

module.exports = router; 