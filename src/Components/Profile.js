import React, { Component } from 'react'
import { withStyles, Card, CardContent, Typography, Avatar, Button } from '@material-ui/core';

import { withRouter } from 'react-router-dom';


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

const username = "Anton Wyrowski"

class Profile extends Component {

    handleLogout = () => {
        this.props.history.push('/');
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <Typography className={classes.avatarText}>{username.charAt(0).toUpperCase()}</Typography>
                </Avatar>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom align="center" variant="headline">{username}</Typography>
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

export default withStyles(style)(withRouter(Profile))
