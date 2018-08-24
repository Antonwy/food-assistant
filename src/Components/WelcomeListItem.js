import React, { Component } from 'react'

import { withStyles, Card, Typography, Button, Collapse, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'


const style = theme => ({
    list: {
        marginTop: 10,
    },
    textField: {
        width: "80%",
        margin: "20px auto"
    },
    container: {
        marginTop: 20,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

class WelcomeListItem extends Component {

    state = {
        show: false
    }

    handleCollapse = () => {
        this.props.collapseItem(this.props.id, this.state.show);
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {classes, item} = this.props;
        return (
            <div>
                <Card className={classes.list}>
                    <div style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                        <Typography style={{margin: 15}} variant="headline">{item}</Typography>
                        <div style={{marginLeft: "auto", marginRight: 10}}>
                            <Button onClick={this.handleCollapse} className={classes.chooseBTN} variant="outlined">{this.state.show ? 'Close' : 'Wählen'}</Button>
                        </div>
                    </div>
                    <Collapse in={this.state.show}>
                        <div className={classes.container}>
                            <Typography align="center" variant="display1" gutterBottom>Deine Werte:</Typography>
                            <TextField
                                id="date"
                                label="Geburtstag"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <Button style={{marginBottom: 20}} variant="outlined" component={Link} to="/dashboard">Save</Button>
                        </div>
                    </Collapse>
                </Card>
            </div>
        )
    }
}

export default withStyles(style)(WelcomeListItem)
