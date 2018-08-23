import React, { Component } from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core'
import WelcomeListItem from './WelcomeListItem';


const styles = theme => ({
    root: {
        width: "90%",
        maxWidth: 700,
        margin: "20px auto"
    }
})

const ernährungsArten = [
    "Vegan",
    "Vegetarisch",
    "Normal",
]

class Welcome extends Component {

    renderList = (item, i) => {
        return( 
            <WelcomeListItem item={item} key={i}/>
        )
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="display2">Hi!</Typography>
                        <Typography variant="subheading">Wähle eine Ernährungsart:</Typography>
                        {ernährungsArten.map(this.renderList)}
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Welcome);
