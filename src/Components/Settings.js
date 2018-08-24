import React from 'react'
import { withStyles, Typography, Button, Card, CardContent, List, ListItem, Divider, TextField, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ColorChooser from './ColorChooser';

const styles = theme => ({
    root: {
        width: '90%',
        maxWidth: 700,
        margin: "50px auto",
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 30
    },
    chooseBTN: {
        marginLeft: 20
    },
    input: {
        minWidth: "100%",
        margin: "10px 0"
    }, 
    changeBTN: {
        marginTop: 10,
    }
})



class Settings extends React.Component {

    state = {
        colorType: 'primary',
        dialogOpen: false
    }

    handleClick = (colorType) => (event) => {
        event.preventDefault();
        this.setState({
            colorType: colorType,
            dialogOpen: true
        })
    }

    handleClose = () => {
        this.setState({dialogOpen: false})
    }

    render(){
        const { classes } = this.props;
        const { dialogOpen, colorType } = this.state;
        return (
            <div className={classes.root}>
                <ColorChooser open={dialogOpen} colorType={colorType} handleClose={this.handleClose}/>
                <Card>
                    <CardContent>
                        <Typography gutterBottom  variant="display3">Einstellungen</Typography>
                        <List>
                            <ListItem>
                                <ListItemText variant="subheading">Nutzerdaten ändern: </ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap", width: "100%"}}>
                                    <TextField placeholder="Nutzername" className={classes.input}></TextField>
                                    <TextField type="email" placeholder="Email" className={classes.input}></TextField>
                                    <TextField type="password" placeholder="Password" className={classes.input}></TextField>
                                    <Button variant="outlined" color="secondary" className={classes.changeBTN}>Ändern</Button>
                                </div>
                            </ListItem>
                            <ListItem>
                                <Typography variant="subheading">Farben</Typography>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <Typography variant="subheading">Haupt Farbe: </Typography>
                                <Button variant="contained" color="primary" className={classes.chooseBTN} onClick={this.handleClick("primary")}>Wählen</Button>
                            </ListItem>
                            <ListItem>
                                <Typography variant="subheading">Neben Farbe</Typography>
                                <Button variant="contained" color="secondary" className={classes.chooseBTN} onClick={this.handleClick("secondary")}>Wählen</Button>
                            </ListItem>
                        </List>
                        
                    </CardContent>
                </Card>
            </div>
        )
    }
    
}



export default withStyles(styles)(Settings)
