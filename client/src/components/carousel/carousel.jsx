import React, { Component } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
     
  });
  
 
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            carousel: [], 
            expanded: false, 
            search: ''
        }
    }

    displayBooksMap = (arr, styles) => {
        let { classes } = this.props
                const books = arr.map(item => {
                    let bookTest = (
                        <div key={item.id} className={classes.root}>
                            <ExpansionPanel >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                    >
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>{item.title}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>Info</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>Description</Typography>
                                    </div>
                                    
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.details}>
                                    <div className={classes.column}>
                                        <img src={item.thumbnail} ></img>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography>Author(s): {item.authors? item.authors : 'No authors available'}</Typography>
                                        <Typography>Page Count: {item.pageCount ? item.pageCount : 'No page count available'}</Typography>
                                        <Typography>Publisher: {item.publisher? item.publisher : 'No publisher available'}</Typography>
                                        <Typography>Published Date: {item.publishedDate? item.publishedDate : 'No published date available'}</Typography>
                                        <Typography>Categories: {item.categories? item.categories : 'No categories available'}</Typography>
                                        <Typography>ISBN 13: {item.industryIdentifiers ? item.industryIdentifiers[0].identifier : 'No categories available'}</Typography>
                                        <Typography>ISBN 10: {item.industryIdentifiers? item.industryIdentifiers[1].identifier : 'No categories available'}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography>{item.description ? item.description : 'No Description Available'}</Typography>
                                    </div>
                                    
                                </ExpansionPanelDetails>
                                <Divider />
                                <ExpansionPanelActions>
                                    <Button onClick={() => {this.props.deleteBook(item.id)}} id={item.id} size="small" variant="contained" color="secondary" fullWidth>Delete</Button>
                                    <Button onClick={() => {this.props.saveBook(item.id)}} id={item.id} size="small" variant="contained" color="primary" fullWidth> Save </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        </div>
                    )
                    return bookTest
                })
                return books
    }


    componentDidUpdate (prevProps) {
        console.log(this.props.bookData, prevProps.bookData)
        if (this.props.bookData !== prevProps.bookData) {
            console.log('first')
            this.setState({
                carousel: this.displayBooksMap(this.props.bookData, styles)
            }); 
        } 
    }; 


    render(props) {
        const { classes } = this.props;
        
        return (
            <div className="center-align">
                    {this.state.carousel.length !== 0 ? (
                        <Grid container >
                            {this.state.carousel}
                        </Grid>
                    ) : (
                        console.log('nothing in state')
                    )}
            </div>
        )
    }
}; 

export default withStyles(styles)(Home);    

