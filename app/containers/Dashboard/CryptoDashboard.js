import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import brand from "dan-api/dummy/brand";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  CounterCryptoWidgetContainer,
  PapperBlock,
  TradingFormWidgetContainer
} from "dan-components";
import styles from "./dashboard-jss";
import ChartBarStakedCrypto from "../Charts/demos/ChartBarStakedCrypto";
import HistoryTableContainer from "../../components/Widget/HistoryTableContainer";

import LatestTransactionWidgetContainer from "../../components/Widget/LatestTransactionWidgetContainer";
import InputCopyAddress from "../../components/Widget/InputCopyAddress";

const CryptoDahboard = ({ classes }) => {
  const title = brand.name + " - Cryptocurrency Dashboard";
  const description = brand.desc;
  const { t, i18n } = useTranslation();
  const textTran = text => {
    return i18n.exists(text) ? t(text) : text;
  };
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
      <InputCopyAddress />
      <Divider className={classes.divider} />
      <CounterCryptoWidgetContainer />
      <Divider className={classes.divider} />

      <PapperBlock
        title={textTran("oteBuySell")}
        icon="ios-stats-outline"
        whiteBg
        overflowX
        desc=""
      >
        <ChartBarStakedCrypto />
      </PapperBlock>
      <Divider className={classes.divider} />
      {/* <MarketPlaceWIdget /> */}

      <Grid container spacing={3} className={classes.root}>
        <Grid item md={12} xs={12}>
          {/* <HistoryWidget /> */}
          <HistoryTableContainer />
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
          <LatestTransactionWidgetContainer />
        </Grid>
      </Grid>
    </div>
  );
};

CryptoDahboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CryptoDahboard);
