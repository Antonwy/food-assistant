import React, { Component } from 'react'
import { CardContent, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core'

const style = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: 700,
    margin: "20px auto"
  }
})

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card>
          <CardContent>
            <Typography variant="display1" >Test</Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(style)(Dashboard);
