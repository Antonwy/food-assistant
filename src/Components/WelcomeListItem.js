import React, { Component } from 'react'

import { withStyles, Card, Typography, Button, Collapse, TextField, FormControl, FormControlLabel, FormLabel, Menu, MenuItem, Paper } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import { Field, reduxForm } from 'redux-form'
import Checkbox from '@material-ui/core/Checkbox';


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
    },
    formControl: {
        margin: 20
    },
    genderBTN: {
        margin: 20
    },
    genderOptions: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})

const options = [
    "Männlich",
    "Weiblich"
]

class WelcomeListItem extends Component {

    state = {
        show: false,
        anchorEl: null,
        selectedIndex: 1,
    }

    handleCollapse = () => {
        this.props.collapseItem(this.props.id, this.state.show);
        this.setState({
            show: !this.state.show
        })
    }

    renderCheckbox = ({ input }) => (
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
    );

    renderDateChooser = ({ input, label, meta: { touched, error } }) => (
        <TextField
            id="date"
            label= {error ? error : label}
            type="date"
            className={this.props.classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            error={touched && error ? true : false}
            {...input}
        />
    );

    handleSave = (values) => {
        let newValues = Object.assign({}, values, { männlich: this.state.selectedIndex === 1 ? false : true })
        console.log(newValues)
    }
    
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const {classes, item, handleSubmit } = this.props;
        const { anchorEl } = this.state;
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
                            <Paper className={classes.genderOptions}>
                                <Button
                                    aria-owns={anchorEl ? 'simple-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                    className={classes.genderBTN}
                                    variant="outlined"
                                    >
                                    Wähle Geschlecht
                                </Button>
                                <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                >   
                                    {options.map((option, index) => (
                                        <MenuItem
                                        key={option}
                                        selected={index === this.state.selectedIndex}
                                        onClick={event => this.handleMenuItemClick(event, index)}
                                        >
                                        {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                                <Typography style={{marginRight: 20}}>{options[this.state.selectedIndex]}</Typography>
                            </Paper>
                            <Field defaultValue="2017-05-24" name="geb" label="Geburstag" component={this.renderDateChooser} />
                            <FormControl className={classes.formControl} component="fieldset">
                                <FormLabel component="legend">Allergien: </FormLabel>
                                <FormControlLabel
                                control={
                                    <Field name="erdnüsse" component={this.renderCheckbox} />
                                }
                                label="Erdnüsse"
                                />
                                <FormControlLabel
                                control={
                                    <Field name="lactose" component={this.renderCheckbox} />
                                }
                                label="Lactose"
                                />
                                <FormControlLabel
                                control={
                                    <Field name="ei" component={this.renderCheckbox} />
                                }
                                label="Ei"
                                />
                                <FormControlLabel
                                control={
                                    <Field name="gluten" component={this.renderCheckbox} />
                                }
                                label="Gluten"
                                />
                            </FormControl>
                            <Button style={{marginBottom: 20}} variant="outlined" onClick={handleSubmit(this.handleSave)}>Save</Button>
                        </div>
                    </Collapse>
                </Card>
            </div>
        )
    }
}

const validate = (values) => {
    const errors= {};
    if(!values.geb){
        errors.geb = "Gebe deinen Geburtstag ein!"
    }
    return errors;
}


export default withStyles(style)(reduxForm({
    form: 'foodOptions',
    initialValues: {
        ei: false,
        erdnüsse: false,
        gluten: false,
        lactose: false
    },
    validate
})(withRouter(WelcomeListItem)))
