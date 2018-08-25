import React, { Component } from 'react'
import { withStyles, ButtonBase } from '@material-ui/core'
import { CardContent, Typography, Card } from '@material-ui/core';



const styles = theme => ({
    card: {
        margin: 10,
        //flexGrow: 1,
        //minWidth: 300,
    },
    image: {
        borderRadius: 50,
        marginTop: 20,
        boxShadow: "0 8px 6px -6px #ccc"
    },
    showBTN: {
        margin: "20px auto",
    },
    description: {
        width: 250,
        color: "rgba(0,0,0,.6)"
    },
    name: {
        margin: 20,
        fontWeight: 600
    },
    paper: {
        width: "95%",
        margin: "20px auto"
    }
})



class DashbordDayItems extends Component {

    state = {
        show: false
    }

    handleCollapse = () => {
        this.setState(state => ({
            show: !state.show
        }))
    }

    render() {
        const { classes, dayTime, foodData } = this.props;
        const imgSrc = `https://source.unsplash.com/200x200/?food,meal?sig=${Math.round(Math.random() * 100)}`
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography align="center" variant="display1">{dayTime}</Typography>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: 20 }}>
                            <ButtonBase className={classes.image}>
                                <img alt="Essens Bild" src={imgSrc} style={{ width: "100px", height: "100px", borderRadius: "50px"}} />
                            </ButtonBase>
                            <Typography className={classes.name} variant="subheading">{foodData}</Typography>
                            <Typography align="center" className={classes.description} variant="body1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(DashbordDayItems);
