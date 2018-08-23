import React, { Component } from 'react'

import { withStyles, CardContent, Typography } from '@material-ui/core'

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { Card } from '@material-ui/core';

import {Bar} from 'react-chartjs-2';

const styles = theme => ({
    card: {
        margin: 10,
        flexGrow: 1,
        minWidth: 300,
    },
})

class DashboardCharts extends Component {
    render() {

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Kcal',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: this.props.data
              }
            ]
        };

        const { classes, header, color } = this.props;
        return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom align="center" variant="title">{header}</Typography>
                    {/* <Sparklines height={120} width={180} data={data}>
                        <SparklinesLine color={color} />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines> */}
                    <Bar
                        data={data}
                        width={200}
                        height={200}
                    />
                </CardContent>
            </Card>
        </div>
        )
    }
}

export default withStyles(styles)(DashboardCharts)
