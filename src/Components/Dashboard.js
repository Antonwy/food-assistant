import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import DashbordDayItems from './DashbordDayItems';
import DashboardCharts from './DashboardCharts';
import DashboardTable from './DashboardTable';

import { getDailyFood } from '../Redux/actions'

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

class Dashboard extends Component {


  componentDidMount(){
    this.props.getDailyFood();
  }


  render() {
    
    const { classes, dailyFood } = this.props;

    if(dailyFood.length === 0){
      return <h1 style={{color: "white", textAlign: "center"}}>LOADING...</h1>
    }

    console.log(dailyFood)

    return (
      <div>
        <Typography variant="display2" style={{color: "white", margin: 20}} align="center">Food Assistant</Typography>
        <div className={classes.container}>
          {
            dailyFood.map((food, i) => {
              return <DashbordDayItems key={i} dayTime={dayTime[food.foodTime]} foodData={food} />
            })
          }
        </div>
        <DashboardTable foodData={dailyFood} />
        {/* <div className={classes.container}>
          <DashboardCharts header="Header1" color="blue" data={[7, 20, 5, 15, 6, 8]}/>
          <DashboardCharts header="Header2" color="red" data={[2, 7, 12, 25, 24, 10]}/>
          <DashboardCharts header="Header3" color="green" data={[30, 7, 2, 25, 25, 15]}/>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    dailyFood: state.dailyFood
  }
}

export default withStyles(style)(connect(mapStateToProps, { getDailyFood })(Dashboard));
