import React, { Component } from 'react';
import AppDrawer from './Components/AppDrawer';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Route, withRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Welcome from './Components/Welcome';
import Settings from './Components/Settings'
import Profile from './Components/Profile'
import { connect } from 'react-redux'
import { LOCAL_STORAGE_PRIMARY_COLOR, LOCAL_STORAGE_SECONDARY_COLOR } from './Redux/constants';

import { AnimatedSwitch, spring } from 'react-router-transition';
import AddFood from './Components/AddFood';


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

class App extends Component {

  getScreenName = () => {
    let name = this.props.history.location.pathname;
    name = name.replace('/', '');
    let newName = name.charAt(0).toUpperCase() + name.substr(1);
    if(newName === ""){
      newName= "Login";
    }
    return newName;
  }

  render() {

    const { colors } = this.props;
    let primary = colors.primary;
    let secondary = colors.secondary;

    if(localStorage.getItem(LOCAL_STORAGE_PRIMARY_COLOR)){
      primary = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PRIMARY_COLOR))
    }

    if(localStorage.getItem(LOCAL_STORAGE_SECONDARY_COLOR)){
      secondary = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SECONDARY_COLOR))
    }

    const theme = createMuiTheme({
      palette: {
        primary: primary,
        secondary: secondary
      },
    });
    
    document.querySelector('body').style.backgroundColor = theme.palette.primary[500];

    this.getScreenName();

    return (
      <MuiThemeProvider theme={theme}>
          <AppDrawer screenName={this.getScreenName()} />
          <AnimatedSwitch
            atEnter={ bounceTransition.atEnter }
            atLeave={ bounceTransition.atLeave }
            atActive={ bounceTransition.atActive }
            className="switch-wrapper"
            mapStyles={mapStyles}
          >
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/einstellungen" component={Settings} />
            <Route path="/profile" component={Profile} />
            <Route path="/addFood" component={AddFood} />
          </AnimatedSwitch>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return{
    colors: state.colors
  }
}

export default withRouter(connect(mapStateToProps)(App));
