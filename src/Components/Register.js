import React, { Component } from 'react'
import { Card, CardContent, Typography, withStyles, Button, TextField } from '@material-ui/core';

import { connect } from 'react-redux'
import { registerUser } from '../Redux/actions'

import { Field, reduxForm } from 'redux-form'

import { withRouter } from 'react-router-dom' 

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
        marginTop: 20
    }

})

class Register extends Component {

    handleClick = (values) => {
        this.props.registerUser(values, () => {
            this.props.history.push("/welcome")
        });
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
                <Card className={classes.loginCard}>
                    <CardContent>
                        <Typography variant="display2">Register</Typography>
                        <form className={classes.inputContainer} onSubmit={handleSubmit(this.handleClick)}>
                            <Field className={this.props.classes.input} name="username" component={this.renderTextField} label="Username"/>
                            <Field className={this.props.classes.input} name="vorname" component={this.renderTextField} label="Vorname"/>
                            <Field className={this.props.classes.input} name="nachname" component={this.renderTextField} label="Nachname"/>
                            <Field className={this.props.classes.input} name="email" component={this.renderTextField} label="Email"/>
                            <Field type="password" className={this.props.classes.input} name="password1" component={this.renderTextField} label="Password"/>
                            <Field type="password" className={this.props.classes.input} name="password2" component={this.renderTextField} label="Password"/>
                            <Button type="submit" className={classes.button} variant="outlined">Register</Button>
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
      'username',
      'vorname',
      'nachname',
      'email',
      'password1',
      'password2'
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    const { password1, password2 } = values;

    if(password1 !== password2 && password1 && password2){
        errors.password1 = 'Passwörter stimmen nicht über ein!'
        errors.password2 = 'Passwörter stimmen nicht über ein!'
    }

    return errors
}


export default withStyles(styles)(connect(null, { registerUser })(reduxForm({
    form: 'registerForm', 
    validate
  })(withRouter(Register))));
