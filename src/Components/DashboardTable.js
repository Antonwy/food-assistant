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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}



class DashboardTable extends React.Component {

  state = {
    rows: [
      createData(this.props.foodData[0], 159, 6.0, 24, 4.0),
      createData(this.props.foodData[1], 237, 9.0, 37, 4.3),
      createData(this.props.foodData[2], 262, 16.0, 24, 6.0),
    ]
  }

  render(){
    const { rows } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Kalorien</TableCell>
              <TableCell numeric>Fett (g)</TableCell>
              <TableCell numeric>Kohlenhydrate (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                  <TableCell numeric>{row.carbs}</TableCell>
                  <TableCell numeric>{row.protein}</TableCell>
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