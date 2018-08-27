import React, { Component } from 'react'
import { withStyles, Card, CardContent, Typography, Avatar, Button } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import { LS_USER_DATA } from '../Redux/constants';

import { connect } from 'react-redux'
import { setLoggedIn } from '../Redux/actions'


const style = theme => ({
    root: {
        width: "90%",
        maxWidth: 700,
        margin: "50px auto",
    },
    avatar: {
        width: 150,
        height: 150,
        margin: "0 auto",
        marginBottom: -75,
        boxShadow: "0 8px 6px -6px #ccc"
    },
    avatarText: {
        color: "white",
        fontSize: 50
    },
    cardContent: {
        marginTop: 75,
    }
})



class Profile extends Component {

    handleLogout = () => {
        localStorage.removeItem(LS_USER_DATA);
        this.props.setLoggedIn(false);
        this.props.history.push('/');
    }


    render() {

        const { classes, user: { firstName, lastName } } = this.props;

        if(!firstName){
            return (
                <div>
                    <h1 style={{color: "white", textAlign: "center"}}>Login first!</h1>
                </div>
            )
        }

        return (
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <Typography className={classes.avatarText}>{firstName.charAt(0).toUpperCase()}</Typography>
                </Avatar>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom align="center" variant="headline">{firstName + " " + lastName}</Typography>
                        <Typography align="center" variant="caption">MÄNNLICH</Typography>
                        <Typography align="center" variant="caption">Geburtstag: 04.06.2000</Typography>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}><Button onClick={this.handleLogout} style={{margin: "20px auto"}} variant="outlined" color="primary">Logout</Button></div>
                        <Typography variant="caption" align="center" style={{width: "90%", margin: "10px auto"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user.user
    }
}

export default withStyles(style)(withRouter(connect(mapStateToProps, { setLoggedIn })(Profile)))
