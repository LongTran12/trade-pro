/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import Assessment from '@material-ui/icons/Assessment';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from 'dan-api/palette/colorfull';
import { CounterWidget } from 'dan-components';
import styles from 'dan-components/Widget/widget-jss';
import CounterMember from '../Counter/CounterMember';

const InfoUserReference = ({ classes }) => {
    return (
        <div className={classes.rootCounterFull}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <CounterMember
                        color={colorfull[0]}
                        start={0}
                        end={207}
                        duration={3}
                        title="level"
                    >
                        <Assessment className={classes.counterIcon} />
                    </CounterMember>
                </Grid>
                <Grid item xs={6} md={3}>
                    <CounterMember
                        color={colorfull[1]}
                        start={0}
                        end={300}
                        duration={3}
                        title="members"
                    >
                        <SupervisorAccount className={classes.counterIcon} />
                    </CounterMember>
                </Grid>
                <Grid item xs={6} md={3}>
                    <CounterMember
                        color={colorfull[2]}
                        start={0}
                        end={67}
                        duration={3}
                        title="sales"
                    >
                        <Edit className={classes.counterIcon} />
                    </CounterMember>
                </Grid>
                <Grid item xs={6} md={3}>
                    <CounterMember
                        color={colorfull[3]}
                        start={0}
                        end={70}
                        duration={3}
                        title="totalSales"
                    >
                        <CollectionsBookmark className={classes.counterIcon} />
                    </CounterMember>
                </Grid>
            </Grid>
        </div>
    );

}

InfoUserReference.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoUserReference);