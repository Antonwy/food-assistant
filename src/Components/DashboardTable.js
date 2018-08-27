import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    margin: "0 auto",
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    maxWidth: 1300,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class DashboardTable extends React.Component {

  render(){
    const { classes, foodData } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Gerichte</TableCell>
              <TableCell numeric>Eisen (mg)</TableCell>
              <TableCell numeric>Magnesium (mg)</TableCell>
              <TableCell numeric>Calcium (mg)</TableCell>
              <TableCell numeric>Eiweiß (mg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodData.map((food, i) => {
              return (
                <TableRow className={classes.row} key={i}>
                  <TableCell component="th" scope="row">
                    {food.name}
                  </TableCell>
                  <TableCell numeric>{food.iron}</TableCell>
                  <TableCell numeric>{food.magnesium}</TableCell>
                  <TableCell numeric>{food.calcium}</TableCell>
                  <TableCell numeric>{food.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styles)(DashboardTable);