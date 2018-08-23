import React, { Component } from 'react';
import AppDrawer from './Components/AppDrawer';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Welcome from './Components/Welcome';


class App extends Component {


  render() {
    let primary = red;
    let secondary = pink;

    const theme = createMuiTheme({
      palette: {
        primary: primary,
        secondary: secondary
      },
    });

    document.querySelector('body').style.backgroundColor = theme.palette.primary[500];

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppDrawer />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/welcome" component={Welcome} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
