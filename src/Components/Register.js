import React, { Component } from 'react'
import { Card, CardContent, Typography, withStyles, CardActions, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    loginCard: {
        width: "90%",
        margin: "20px auto",
        maxWidth: 400,
    },
    inputContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        marginTop: 20,
        width: "100%"
    },
    button: {
        margin: "10px auto",
    }

})

class Register extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
            <Card className={classes.loginCard}>
                <CardContent>
                    <Typography variant="display2">Register</Typography>
                    <form className={classes.inputContainer}>
                        <TextField className={classes.input} placeholder="Email" />
                        <TextField className={classes.input} type="password" placeholder="Password" />
                        <TextField className={classes.input} type="password" placeholder="Password" />
                    </form>
                </CardContent>
                <CardActions>
                    <Button component={Link} to="/welcome" className={classes.button} variant="outlined">Register</Button>
                </CardActions>
            </Card>
        </div>
    )
  }
}

export default withStyles(styles)(Register);
