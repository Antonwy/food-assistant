import React, { Component } from 'react'

import { Card, CardContent, Typography, withStyles, Button, TextField } from '@material-ui/core';

import { Field, reduxForm } from 'redux-form'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom' 

import { addFood } from '../Redux/actions'

const styles = theme => ({
    card: {
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
        marginTop: 20
    }

})


class AddFood extends Component {

    handleClick = (values) => {
        let newValues = Object.assign({}, values, { userId: this.props.user.id });
        this.props.addFood(values);
    }

    renderTextField = ({
        input,
        label,
        meta: { touched, error },
        ...custom
      }) => (
        <TextField
          placeholder={label}
          label={touched && error ? error : label}
          error={touched && error ? true : false}
          {...input}
          {...custom}
        />
    )

    render() {
        const { classes, handleSubmit } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="display2">Neues Gericht:</Typography>
                        <form className={classes.inputContainer} onSubmit={handleSubmit(this.handleClick)}>
                            <Field className={this.props.classes.input} name="name" component={this.renderTextField} label="Name"/>
                            <Field className={this.props.classes.input} name="imageURL" component={this.renderTextField} label="Bild URL"/>
                            <Field className={this.props.classes.input} name="description" component={this.renderTextField} label="Beschreibung"/>
                            <Field type="number" className={this.props.classes.input} name="foodTime" component={this.renderTextField} label="Essens Zeit"/>
                            <Field type="number" className={this.props.classes.input} name="iron" component={this.renderTextField} label="Eisen"/>
                            <Field type="number" className={this.props.classes.input} name="magnesium" component={this.renderTextField} label="Magnesium"/>
                            <Field type="number" className={this.props.classes.input} name="calcium" component={this.renderTextField} label="Calcium"/>
                            <Field type="number" className={this.props.classes.input} name="protein" component={this.renderTextField} label="Eiweiß"/>
                            <Button type="submit" className={classes.button} variant="outlined">Hinzufügen</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = [
      'name',
      'imageURL',
      'description',
      'foodTime',
      'iron',
      'magnesium',
      'calcium',
      'protein',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })

    return errors
}

export const mapStateToProps = state => {
    return{
        user: state.user.user
    }
}

export default reduxForm({
    form: "addFoodForm",
    validate
})(withRouter(withStyles(styles)(connect(mapStateToProps, { addFood })(AddFood))));
