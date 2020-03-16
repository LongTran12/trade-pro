/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import Assessment from "@material-ui/icons/Assessment";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import Edit from "@material-ui/icons/Edit";
import colorfull from "dan-api/palette/colorfull";
import { CounterWidget } from "dan-components";
import styles from "dan-components/Widget/widget-jss";
import CounterMember from "../Counter/CounterMember";
import { contractPublic } from "../../provider/web3Public";
const InfoUserReference = ({ classes }) => {
  const [info, setInfo] = useState({
    level: "",
    members: 0,
    staking: 0,
    totalStaking: 0
  });
  useEffect(() => {
    const getInfo = async () => {
      let userInfo = await contractPublic.methods.getUserStats(address).call();
      setInfo({
        level: userInfo.staking,
        members: userInfo.totalMembers,
        staking: userInfo.currentSales,
        totalStaking: userInfo.totalSales
      });
    };
    getInfo();
  }, []);
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
            end={info.members}
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
            end={info.staking}
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
            end={info.totalStaking}
            duration={3}
            title="totalSales"
          >
            <CollectionsBookmark className={classes.counterIcon} />
          </CounterMember>
        </Grid>
      </Grid>
    </div>
  );
};

InfoUserReference.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoUserReference);
