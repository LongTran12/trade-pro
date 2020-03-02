/* eslint-disable */
import React, { PureComponent, useContext, Component, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { LineChart, Line, AreaChart, Area } from "recharts";
import { data1 } from "dan-api/chart/chartMiniData";
import colorfull from "dan-api/palette/colorfull";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import CompareArrows from "@material-ui/icons/CompareArrows";
import styles from "./widget-jss";
import CounterWidget from "../Counter/CounterWidget";
import { AppContext } from "../../provider/appContext";

import { useTranslation } from "react-i18next";

const CounterCryptoWidgetContainer = ({ classes, width, intl }) => {
  const { oteSeller, oteStacking, otePrice, totalMemberStacking } = useContext(
    AppContext
  );
  const { t, i18n } = useTranslation();
  const textTran = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  // console.log(otePrice);
  return (
    <div className={classes.rootCounter}>
      <Grid container spacing={2}>
        <Grid item sm={3} xs={6}>
          <CounterWidget
            unitBefore=" "
            color={colorfull[4]}
            start={0}
            end={oteSeller ? Number(oteSeller) : 0}
            duration={3}
            title={textTran("sellerOrder")}
          >
            <AccountBalanceWallet className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item sm={3} xs={6}>
          <CounterWidget
            unitBefore=""
            color={colorfull[6]}
            start={0}
            end={oteStacking ? Number(oteStacking) : 0}
            duration={3}
            title={textTran("stacking")}
          >
            <CompareArrows className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item sm={3} xs={6}>
          <CounterWidget
            unitBefore="$ "
            color={colorfull[0]}
            start={0}
            end={otePrice ? otePrice / 10 ** 6 : 0}
            duration={3}
            decimals={2}
            decimal=","
            title={textTran("otePrice")}
          >
            <MonetizationOn className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item sm={3} xs={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={totalMemberStacking ? Number(totalMemberStacking) : 0}
            duration={3}
            title={textTran("totalMember")}
          >
            <PeopleAlt className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
};

CounterCryptoWidgetContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CounterCryptoWidgetContainer));
