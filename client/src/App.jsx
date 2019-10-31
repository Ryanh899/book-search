import React, { Component } from 'react';
import BookList from './components/carousel/carousel.jsx'; 
import Nav from './components/navbar/nav.jsx'; 
import Saved from './components/saved/savedBooks.jsx'; 
import Header from './components/Header/header.jsx'
import axios from 'axios'; 

//main app component 
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      search: '', 
      category: '', 
      displayBooks: [], 
    }
  }

  handleSearchClick = async (search, category) => {
    await this.setState({
      search: search, 
      category: category
    }); 
    let searchUrl = 'http://localhost:3001/api/books/' + this.state.category + '/' + this.state.search ; 
      axios 
        .get(searchUrl)
        .then(response => {
          this.setState({
            displayBooks: response.data
          })
          console.log(this.state.displayBooks)
        })
        .catch(err => console.log(err)); 
    }; 

    saveBook = (id) => {
      console.log(id)
      let saveUrl = 'http://localhost:3001/api/add/book/' + id; 
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
      let deleteUrl = 'http://localhost:3001/api/delete/book/' + id; 
      axios
        .delete(deleteUrl)
        .then(response => {
          console.log('deleted: ' + response)
        })
        .catch(err => {
          console.log(err); 
        })
    }; 

  
  render() {
    return (
      <div>
          <Header value={this.state} searchClick={this.handleSearchClick} />
        <hr />
          <BookList deleteBook={this.deleteBook} saveBook={this.saveBook} bookData={this.state.displayBooks} />
      </div>
    );
  }
}; 

export default App;
