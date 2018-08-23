import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import DashbordDayItems from './DashbordDayItems';

const style = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: 1500,
    margin: "20px auto",
    flexDirection: "row",
    justifyContent: "center",
  },
})

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2" style={{color: "white", marginTop: 20}} align="center">Food Assistant</Typography>
        <div className={classes.container}>
          <DashbordDayItems dayTime="Morgens" foodName="Nudeln" />
          <DashbordDayItems dayTime="Mittags" foodName="Pizza" />
          <DashbordDayItems dayTime="Abends" foodName="Lasagne" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default withStyles(style)(connect(mapStateToProps)(Dashboard));
