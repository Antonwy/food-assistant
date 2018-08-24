import React, { Component } from 'react'
import { Card, CardContent, Typography, withStyles, CardActions, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { setLoggedIn } from '../Redux/actions'

import { Field, reduxForm } from 'redux-form'

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

    handleLogin = () => {
        this.props.setLoggedIn(true);
    }

    renderTextField = ({
        input,
        label,
        meta: { touched, error },
        ...custom
      }) => (
        <TextField
          placeholder={label}
          label={label}
          errorText={touched && error}
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
                        <form className={classes.inputContainer} onSubmit={handleSubmit}>
                            <Field className={this.props.classes.input} name="username" component={this.renderTextField} label="Username"/>
                            <Field className={this.props.classes.input} name="vorname" component={this.renderTextField} label="Vorname"/>
                            <Field className={this.props.classes.input} name="nachname" component={this.renderTextField} label="Nachname"/>
                            <Field className={this.props.classes.input} name="email" component={this.renderTextField} label="Email"/>
                            <Field className={this.props.classes.input} name="password1" component={this.renderTextField} label="Password"/>
                            <Field className={this.props.classes.input} name="password2" component={this.renderTextField} label="Password"/>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleSubmit} component={Link} to="/welcome" className={classes.button} variant="outlined">Register</Button>
                    </CardActions>
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
    return errors
}


export default withStyles(styles)(connect(null, { setLoggedIn })(reduxForm({
    form: 'registerForm', 
    validate
  })(Register)));
