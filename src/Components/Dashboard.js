import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import DashbordDayItems from './DashbordDayItems';
import DashboardCharts from './DashboardCharts';
import DashboardTable from './DashboardTable';

const style = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: 1300,
    margin: "20px auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
})

const dayTime = [
  "Morgens",
  "Mittags",
  "Abends"
]

const foodData = [
  "Birchermüsli mit Möhren",
  "Weizen-Risotto",
  "Gemüse-Pfannkuche"
]

class Dashboard extends Component {
  render() {
    
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2" style={{color: "white", margin: 20}} align="center">Food Assistant</Typography>
        <div className={classes.container}>
          {
            dayTime.map(( item, i) => {
              return <DashbordDayItems key={i} dayTime={item} foodData={foodData[i]} />
            })
          }
        </div>
        <DashboardTable foodData={foodData} />
        <div className={classes.container}>
          <DashboardCharts header="Header1" color="blue" data={[7, 20, 5, 15, 6, 8]}/>
          <DashboardCharts header="Header2" color="red" data={[2, 7, 12, 25, 24, 10]}/>
          <DashboardCharts header="Header3" color="green" data={[30, 7, 2, 25, 25, 15]}/>
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
