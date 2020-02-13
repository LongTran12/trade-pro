/* eslint-disable */
import React, { PureComponent, useContext, Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import {
    LineChart,
    Line,
    AreaChart,
    Area
} from 'recharts';
import { data1 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import CompareArrows from '@material-ui/icons/CompareArrows';
import styles from './widget-jss';
import CounterWidget from '../Counter/CounterWidget';
import { AppContext } from '../../../provider/appContext';

import { useTranslation } from 'react-i18next';

const CounterCryptoWidgetContainer = ({ classes, width, intl }) => {
    const { oteSeller, oteStacking, otePrice, totalMemberStacking } = useContext(
        AppContext
    );
    const { t, i18n } = useTranslation();
    const textTran = (text) => {
        return i18n.exists(text)
            ? t(text) : text;
    }
    return (
        <div className={classes.rootCounter}>
            <Grid container spacing={2}>
                <Grid item sm={3} xs={6}>
                    <CounterWidget
                        unitBefore=" "
                        color={colorfull[4]}
                        start={0}
                        end={oteSeller ? oteSeller : 0}
                        duration={3}
                        title={textTran('sellerOrder')}
                    >
                        <AccountBalanceWallet className={classes.counterIcon} />
                    </CounterWidget>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <CounterWidget
                        unitBefore=""
                        color={colorfull[6]}
                        start={0}
                        end={oteStacking ? oteStacking : 0}
                        duration={3}
                        title={textTran('stacking')}
                    >
                        <CompareArrows className={classes.counterIcon} />
                    </CounterWidget>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <CounterWidget
                        unitBefore="$ "
                        color={colorfull[0]}
                        start={0}
                        end={otePrice ? (otePrice / 10 ** 6) : 0}
                        duration={3}
                        title={textTran('otePrice')}
                    >
                        <AreaChart width={isWidthDown('xs', width) ? 280 : 100} height={60} data={data1}>
                            <Area type="monotone" dataKey="amt" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
                        </AreaChart>
                    </CounterWidget>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <CounterWidget
                        color={colorfull[1]}
                        start={0}
                        end={totalMemberStacking ? totalMemberStacking : 0}
                        duration={3}
                        title={textTran('totalMember')}
                    >
                        <AreaChart width={isWidthDown('xs', width) ? 280 : 100} height={60} data={data1}>
                            <Area type="monotone" dataKey="amt" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
                        </AreaChart>
                    </CounterWidget>
                </Grid>
            </Grid>
        </div >
    );
}

CounterCryptoWidgetContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(CounterCryptoWidgetContainer));
