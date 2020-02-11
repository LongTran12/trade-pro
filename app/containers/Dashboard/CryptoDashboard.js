import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterCryptoWidget,
  CryptoChartWidget,
  MarketPlaceWIdget,
  TradingFormWidget,
  LatestTransactionWidget,
  CryptoWalletWidget,
  TransferCryptoWidget,
  HistoryWidget,
  NewsListWidget,
  CounterCryptoWidgetContainer,
  PapperBlock,
  TradingFormWidgetContainer
} from 'dan-components';
import styles from './dashboard-jss';
import ChartBarStakedCrypto from '../Charts/demos/ChartBarStakedCrypto';
import HistoryTableContainer from '../../components/Widget/HistoryTableContainer';

class CryptoDahboard extends PureComponent {
  render() {
    const title = brand.name + ' - Cryptocurrency Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <CounterCryptoWidgetContainer />
        <Divider className={classes.divider} />

        <PapperBlock title="OTE Buy / Sell" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <ChartBarStakedCrypto />
          </div>
        </PapperBlock>
        <Divider className={classes.divider} />
        {/* <MarketPlaceWIdget /> */}
        <HistoryTableContainer />
        <Grid container spacing={3} className={classes.root}>
          <Grid item md={12} xs={12}>
            {/* <HistoryWidget /> */}
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.root}>
          <Grid item md={6} xs={12}>
            {/* <TradingFormWidget /> */}
            <TradingFormWidgetContainer />
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <TransferCryptoWidget /> */}
            {/* <Divider className={classes.divider} /> */}
            <LatestTransactionWidget />
          </Grid>
        </Grid>

      </div>
    );
  }
}

CryptoDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptoDahboard);
