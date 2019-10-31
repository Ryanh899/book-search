import React, { Component } from 'react';
import { Collection, Row, Col, Icon, CollectionItem } from 'react-materialize'; 
import Carousel from '../carousel/carousel.jsx'
import axios from 'axios'; 



class Saved extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          search: '', 
          category: '', 
          displayBooks: [], 
        }
      }
     

    componentDidMount () {
        let searchUrl = 'https://frightful-vampire-68399.herokuapp.com/api/books/saved'; 
          axios 
            .get(searchUrl)
            .then(response => {
              console.log(response)
              this.setState({
                displayBooks: response.data
              })
              console.log(this.state.displayBooks)
            })
            .catch(err => console.log(err)); 
    }


 

    saveBook = (id) => {
      console.log(id)
      let saveUrl = 'https://frightful-vampire-68399.herokuapp.com/api/add/book/' + id; 
      axios 
        .post(saveUrl)
        .then(response => {
          console.log('saved: ' + response); 
        })
        .catch(err => {
          console.log(err); 
        }); 
    }; 

    deleteBook = (id) => {
      console.log(id); 
      let deleteUrl = 'https://frightful-vampire-68399.herokuapp.com/api/delete/book/' + id; 
      axios
        .delete(deleteUrl)
        .then(response => {
          console.log('deleted: ' + response)
        })
        .catch(err => {
          console.log(err); 
        })
    }; 

    
    render () {
        return (
            <div>
                <Carousel deleteBook={this.deleteBook} saveBook={this.saveBook} bookData={this.state.displayBooks} />
            </div>
          );
    }
  
}; 

export default Saved;
