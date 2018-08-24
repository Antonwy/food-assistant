import React, { Component } from 'react'
import { Card, CardContent, Typography, withStyles, Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/actions'

import { withRouter } from 'react-router-dom';

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
        marginTop: 20
    }

})

class Login extends Component {

    handleLogin = (values) => {
        this.props.loginUser(values, () => {
            this.props.history.push('/dashboard');
        })
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
                        <Typography variant="display2">Login</Typography>
                        <form className={classes.inputContainer} onSubmit={handleSubmit(this.handleLogin)}>
                            <Field className={this.props.classes.input} name="email" component={this.renderTextField} label="Email"/>
                            <Field type="password" className={this.props.classes.input} name="password" component={this.renderTextField} label="Password"/>
                            <Button type="submit" className={classes.button} variant="outlined">Login</Button>
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
      'email',
      'password',
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

export default withStyles(styles)(connect(null, { loginUser })(
    reduxForm({
        form: 'loginUser',
        validate
    })(withRouter(Login))));
