const db = require('../models'); 

module.exports = {
    addBook: (req, res) => {
        db.Book
            .create({
                title: req.title, 
                authors: req.authors, 
                description: req.description, 
                image: req.image, 
                link: req.link
            })
            .then((err, book) => {
                if (err) return handleError(err);
                console.log(book); 
                res.send(book); 
            })
            .catch(err => console.log(err)); 
    }, 
    getAll: (req, res) => {
        db.Book 
            .find({})
            .then((err, result) => {
                if (err) throw err; 
                res.json(result); 
            })
            .catch(err => console.log(err));   
    }, 
    delete: (req, res) => {
        db.findOneAndDelete({
            _id: req.id
        })
        .then(result => {
            res.send(result); 
        })
        .catch(err => console.log(err)); 
    }
}