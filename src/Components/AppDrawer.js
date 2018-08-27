import React from 'react'
import { withStyles, Avatar, Drawer, List, ListItem, ListSubheader, ListItemText, ListItemIcon } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Home, Person, Settings, Fastfood } from '@material-ui/icons'

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
    },
    list: {
        width: 250,
      }
};
  

class AppDrawer extends React.Component {

    handleProfileClick = () => {
        this.props.history.push('/profile');
    }

    state = {
        open: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            open: open,
        });
    };

    render(){
        const { classes, isLoggedIn, screenName, user: { firstName, lastName } } = this.props;

        const sideList = (
            <div className={classes.list}>
              <List
                subheader={<ListSubheader component="div">Food Assistant</ListSubheader>}>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/profile">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/einstellungen">
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText>Einstellungen</ListItemText>
                    </ListItem>
                    <ListItem button component={Link} to="/addFood">
                        <ListItemIcon>
                            <Fastfood/>
                        </ListItemIcon>
                        <ListItemText>Neues Gericht</ListItemText>
                    </ListItem>
              </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            { screenName }
                        </Typography>
                        {
                            isLoggedIn ?
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <Typography color="inherit">{firstName + " " + lastName}</Typography>
                                <Avatar onClick={this.handleProfileClick} style={{marginLeft: 10}}>{firstName.charAt(0).toUpperCase()}</Avatar>
                            </div>
                            :
                            <div>
                                <Button className={classes.loginBTN} color="inherit" variant="outlined" component={Link} to="/">Login</Button>
                                <Button color="inherit" variant="outlined" component={Link} to="/register">Register</Button>
                            </div> 
                        } 
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return{
        isLoggedIn: state.user.isLoggedIn,
        user: state.user.user
    }
}

export default withStyles(styles)(connect(mapStateToProps, { setLoggedIn })(withRouter(AppDrawer)));
