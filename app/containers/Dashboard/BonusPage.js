import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TableBlacklist from '../../components/Widget/TableBlacklist';
import styles from './dashboard-jss';
import TablePayed from '../../components/Widget/TablePayed';
import BlackListInfomation from '../../components/Widget/BlackListInfomation';

const BonusPage = ({ classes }) => (
    <div>
        <Grid>
            <TablePayed />
        </Grid>
        <Divider className={classes.divider} />

        <Grid>
            <TableBlacklist />
        </Grid>
        <Divider className={classes.divider} />

        <Grid>
            <BlackListInfomation />
        </Grid>
    </div>
);
BonusPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BonusPage);
