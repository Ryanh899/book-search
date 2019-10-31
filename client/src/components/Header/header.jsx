import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import withStyles from "@material-ui/core/styles/withStyles";
import backgroundImage from './images/Essential-Books.jpg'
import TextField from '@material-ui/core/TextField'; 
import FilledInput from '@material-ui/core/FilledInput'
import InputAdornment from '@material-ui/core/InputAdornment'; 
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import InputBase from '@material-ui/core/InputBase'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import styled from 'styled-components';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    background: {
        width: '100%', 
        height: '30vh', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    imageOverlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      }, 
      title: {
          color: 'white', 
          fontFamily: 'Raleway, Arial', 
          fontSize: '45px'
      }, 
      searchBox: {
        //   background: 'white'
      }, 
      textFieldCss: {
        marginLeft: '20px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            }
      }, 
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInputBase-input' : {
        color: 'white'
      },
      '$ .Header-textFieldCss-116 input[type=text]:not(.browser-default)': {
        borderBottom: 'white', 
        boxShadow: 'white'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '&:hover': {
            borderColor: '#ffff00',
      },
      '&$focused': {
        backgroundColor: '#fff',
        // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    }, 
    searchIcon: {
        color: 'white'
    }, 
    icon: {
        color: 'white'
    }
  });

  const BootstrapInput = withStyles({
    root: {
      'label + &': {
        // marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
    //   backgroundColor: theme.palette.background.paper,
      border: '1px solid white',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: 'white',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        color: 'white'
      },
    },
  })(InputBase);

 const SearchButton = styled(Button)`
    .MuiButtonBase-root {
        color: white; 
        border-color: white;
    }
    .MuiButton-root {
            color: white; 
        border-color: white;
    }
    .MuiTouchRipple-root {
        color: white; 
        border-color: white;
    }
    .MuiButton-label {
        color: white;
        border-color: white;
    }
 `;

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        // '&:hover fieldset': {
        //   borderColor: 'yellow',
        // },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      '& .Mui-disabled fieldset': {
          color: 'white', 
          borderColor: 'white'
      }
      
    },
  })(TextField);

//main app component 
class Header extends Component {
 constructor(props) {
     super(props)
     this.state ={
         category: 'Select', 
         searchField: ''

     }
 }

  categoryChange = event => {
    this.setState({
        category: event.target.value
    })
  };
    handleChange = name => event => {
        this.setState({
            searchField: event.target.value
        })
  };



  render(props) {
      const { classes } = this.props
    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <div className={classes.imageOverlay}>
                    <Grid 
                        container
                        alignItems="center" 
                        justify="center"
                    >
                        <Grid item md={5} xs={12} >
                            <form className={classes.container} noValidate autoComplete="off">
                                <CssTextField
                                    name="searchField"
                                    className={classes.textFieldCss}
                                    id="custom-css-outlined-input"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    disabled={this.state.category === 'Select'}
                                    // variant='outlined'
                                    margin="normal"
                                    placeholder={this.state.category === 'Select' ? '' : this.state.category}
                                    onChange={this.handleChange('searchField')}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <SearchIcon className={classes.searchIcon}/>
                                          </InputAdornment>
                                        ),
                                        disableUnderline: true
                                      }}
                                />
                            </form>
                        </Grid>
                        <Grid item md={1} xs={2} >
                            {this.state.searchField !== '' ? (
                                <SearchButton 
                                    disabled={this.state.category === 'Select'}
                                    variant="outlined" 
                                    className={classes.button}  
                                    onClick={() => this.props.searchClick(this.state.searchField, this.state.category)}
                                >
                                    Search
                              </SearchButton>
                            ) : (
                                <form>
                                    <FormControl className={classes.margin}>
                                        {/* <InputLabel className={classes.searchIcon} htmlFor="age-customized-select">Category</InputLabel> */}
                                            <Select
                                                className={classes.textFieldCss}
                                                autoWidth
                                                value={this.state.category}
                                                onChange={this.categoryChange}
                                                input={<BootstrapInput name="category" id="age-customized-select" />}
                                                inputProps={{
                                                    classes: {
                                                        icon: classes.icon,
                                                    }}}
                                            >
                                            <MenuItem value="Select">Select a category</MenuItem>
                                            <MenuItem value='Title'>Title</MenuItem>
                                            <MenuItem value='Author'>Author</MenuItem>
                                            <MenuItem value='Genre'>Genre</MenuItem>
                                            </Select>
                                    </FormControl>
                                </form>
                            )}
                        </Grid>
                    </Grid>
                    
                    
                </div>
            </div>
      </div>
    );
          
  }
}; 

export default withStyles(styles)(Header);
// import React from 'react';
// import styled from 'styled-components';
// import { TextField, NoSsr } from '@material-ui/core';

// const StyledTextField = styled(TextField)`
//   label.Mui-focused {
//     color: green;
//   }
//   .MuiOutlinedInput-root {
//     fieldset {
//       border-color: red;
//     }
//     &:hover fieldset {
//       border-color: yellow;
//     }
//     &.Mui-focused fieldset {
//       border-color: green;
//     }
//   }
// `;

// export default function Header() {
//   return (
//     <NoSsr>
//       <StyledTextField label="Deterministic" variant="outlined" id="deterministic-outlined-input" />
//     </NoSsr>
//   );
// }
