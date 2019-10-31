import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Carousel from './components/carousel/carousel.jsx'; 
import Nav from './components/navbar/nav.jsx'; 
import NotFound from './components/NotFound.jsx'; 
import SavedBooks from './components/saved/savedBooks.jsx'; 
import axios from 'axios'; 

// routing
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";



const routing = (
    <Router>
      <div>
        <Nav location={window.location} />
        <Switch>
          <Route exact path="/" render={(props) => <App {...props}  />} />
          <Route exact path="/saved" render={(props) => <SavedBooks  {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById("root"));
