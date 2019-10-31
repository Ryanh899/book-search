import React, { Component } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';  
import Tabs from './tabs.jsx'; 

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch, 
  Link
} from "react-router-dom";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Nav extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      location: '', 
    }
  }

  
render (props) {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Book App
            </Typography>
            <Link to='/'>
              <Button style={{color: 'white'}} color="inherit">Search</Button>
            </Link>
            <Link to='/saved'>
              <Button style={{color: 'white'}} color="inherit">Saved</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      );
    }
}; 

export default withStyles(styles)(Nav); 