import React, { Component } from 'react'

import { withStyles, Card, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


const style = theme => ({
    list: {
        marginTop: 10,
    }
})

class WelcomeListItem extends Component {
    render() {
        const {classes, item} = this.props;
        return (
            <div>
                <Card className={classes.list}>
                    <div style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                        <Typography style={{margin: 15}} variant="headline">{item}</Typography>
                        <div style={{marginLeft: "auto", marginRight: 10}}>
                            <Button component={Link} to="/dashboard" className={classes.chooseBTN} variant="outlined">Wählen</Button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withStyles(style)(WelcomeListItem)
