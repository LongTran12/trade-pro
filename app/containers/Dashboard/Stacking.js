import React from 'react'
import StakingTable from '../../components/Widget/StakingTable'
import { Grid, withStyles } from '@material-ui/core'
import styles from './dashboard-jss';

const Stacking = ({ classes }) => {
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={12} xs={12}>
                    {/* <HistoryWidget /> */}
                    <StakingTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Stacking)
