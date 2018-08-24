import React, { Component } from 'react'
import { Card, CardContent, Typography, Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/core'
import WelcomeListItem from './WelcomeListItem';
import update from 'immutability-helper';


const styles = theme => ({
    root: {
        width: "90%",
        maxWidth: 700,
        margin: "20px auto"
    }
})

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            ernährungsArten: [
                {
                    id: 0,
                    type: "Vegan",
                    visible: true
                },
                {
                    id: 1,
                    type: "Vegetarisch",
                    visible: true
                },
                {
                    id: 2,
                    type: "Normal",
                    visible: true
                }
            ]
        }
    }
    

    collapsItem = (key, value) => {
        let newState = [];
        this.state.ernährungsArten.forEach((item) => {
            if(item.id !== key){
                newState.push({ id: item.id, type: item.type, visible: value });
            }else{
                newState.push({ id: item.id, type: item.type, visible: true });
            }
        })
        this.setState({
            ernährungsArten: newState
        })
    }

    renderList = (item) => {
        return( 
            <Collapse key={item.id} in={item.visible} style={{padding: 2}}>
                <WelcomeListItem item={item.type} collapseItem={this.collapsItem} id={item.id} />
            </Collapse>
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
                        {this.state.ernährungsArten.map(this.renderList)}
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Welcome);
