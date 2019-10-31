const books = require('google-books-search'); 
const BookModel = require('../../models/books'); 
const __ = require('lodash'); 

module.exports = {
    searchByTitle: (title, cb) => {
        books.search(title, (error, results) => {
            if ( ! error ) {
                cb.json(results); 
            } else {
                console.log(error);
            }
        })
    }, 
    addBooks: (title) => {
        books.search(title, (error, results) => {
            if ( ! error ) {
                results.map(item => {
                    BookModel.create({
                        title:  item.title,
                        authors: item.authors,
                        description: item.description,
                        images: item.thumbnail,
                        link: item.link
                    })
                    .then(response => {
                        console.log('success')
                        console.log(response); 
                    })
                    .catch(err => console.log(err)); 
                })
            } else {
                console.log(error);
            }
        })
    }, 
    addById: (id, cb) => {
        books.lookup(id, (error, results) => {
            console.log("results: " + results)
           let toAdd = __.pick(results, 'title', 'authors', 'description', 'thumbnail', 'link', 'id'); 
            BookModel.create({
                title: toAdd.title, 
                authors: toAdd.authors, 
                description: toAdd.description, 
                images: toAdd.thumbnail, 
                link: toAdd.link, 
                id: toAdd.id
            },  (err, Book) => {
                if (err) throw err;
                cb.json(Book)
            })
        })
    }, 
    deleteById: (id, cb) => {
        BookModel.deleteOne({ id: id }, (err) => {
            cb.status(200).json({ message: 'Succesfully deleted' })
        })
    }, 
    getBooksByCategory: (category, cb) => {
        books.search(subject=category, (error, results) => {
            if ( ! error ) {
                cb.json(results)
            } else {
                console.log(error);
            }
        })
    }, 
    getBooksByAuthor: (authorSearch, cb) => {
        books.search(author=authorSearch, (error, results) => {
            if ( ! error ) {
                cb.json(results)
            } else {
                console.log(error);
            }
        })
    }
}; 
    
    
    

 