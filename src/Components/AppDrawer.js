import React from 'react'
import { withStyles, Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux'
import { setLoggedIn } from '../Redux/actions'

import { Link, withRouter } from 'react-router-dom'

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    loginBTN: {
        marginRight: 10
    }
};
  

class AppDrawer extends React.Component {

    handleProfileClick = () => {
        this.props.setLoggedIn(false);
        this.props.history.push('/');
    }

    render(){
        const { classes, isLoggedIn, screenName } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        { screenName }
                    </Typography>
                    {
                        isLoggedIn ?
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <Typography color="inherit">UserName</Typography>
                            <Avatar onClick={this.handleProfileClick} style={{marginLeft: 10}}>U</Avatar>
                        </div>
                        :
                        <div>
                            <Button className={classes.loginBTN} color="inherit" variant="outlined" component={Link} to="/">Login</Button>
                            <Button color="inherit" variant="outlined" component={Link} to="/register">Register</Button>
                        </div> 
                    } 
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn: state.user.isLoggedIn
    }
}

export default withStyles(styles)(connect(mapStateToProps, { setLoggedIn })(withRouter(AppDrawer)));
