/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
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
import { Web3Context } from "../../provider/web3";

const InfoUserReference = ({ classes }) => {
  const { address } = useContext(Web3Context);
  const [info, setInfo] = useState({
    level: "Member",
    members: 0,
    staking: 0,
    totalStaking: 0,
  });
  const getLevelLabel = (amount) => {
    if (amount < 100) return "Member";
    if (amount < 1000) return "Brozen";
    if (amount < 10000) return "Silver";
    if (amount < 50000) return "Gold";
    if (amount < 100000) return "Platinum";
    return "Diamond";
  };
  useEffect(() => {
    const getInfo = async () => {
      if (address) {
        let month = Number(await contractPublic.methods.currentMonth().call());
        let currentSales = await contractPublic.methods
          .getSale(address, month)
          .call();
        let level = await contractPublic.methods
          .getMemberActiveStacking(address)
          .call();
        setInfo({
          level: getLevelLabel(Number(level / 10 ** 6)),
          members: Number(level / 10 ** 6),
          staking: currentSales / 10 ** 6,
          totalStaking: currentSales / 10 ** 6,
        });
      }
    };
    getInfo();
  }, [address]);
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CounterMember
            color={colorfull[0]}
            raw={info.level}
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoUserReference);
