/* eslint-disable */
import React, { PureComponent, useState, useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import TrendingUp from "@material-ui/icons/TrendingUp";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./widget-jss";
import PapperBlock from "../PapperBlock/PapperBlock";
import { AppContext } from "../../provider/appContext";
import { Web3Context } from "../../provider/web3";
import { usdtPublic, usdiPublic } from "../../provider/web3Public";
import { config } from "../../config";
import TradingFormWidgetSell from "./TradingFormWidgetSell";
import TradingFormWidgetStacking from "./TradingFormWidgetStacking";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import BigNumber from "bignumber.js";
import Swal from "sweetalert2";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const TradingFormWidgetContainer = ({ classes }) => {
  const [value, setValue] = useState(0);

  const handleChangeIndex = (event, newValue) => {
    setValue(newValue);
  };
  const { otePrice, ref } = useContext(AppContext);
  const { contract, address, usdt, usdi } = useContext(Web3Context);
  const dataCoin = [
    {
      name: "USDI",
      value: 1
    },
    {
      name: "USDT",
      value: 2
    }
  ];
  const [coin, setCoin] = useState(`${dataCoin[1].value}`);
  const handleChange = event => {
    setCoin(event.target.value);
  };

  const [amount, setAmount] = useState(100);
  const [status, setStatus] = useState({ code: "" });
  useEffect(() => {
    if (status.code === "loading") {
      Swal.fire({
        title: "Waiting!",
        timer: 1000000,
        text: "Please waiting for confirm your transaction!",
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });
    } else if (status.code === "success") {
      Swal.fire({
        timer: "Success",
        text: "Thanks for purchase token!"
      }).then(() => {
        updateMember();
      });
    } else if (status.code === "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: status.message
      });
    } else if (status.code === "loading-approve") {
      Swal.fire({
        title: "Waiting!",
        timer: 1000000,
        text: "Please waiting for confirm your approve transaction!",
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });
    }
  }, [status]);
  const buyOTE = async () => {
    console.log(ref);
    let allow = 0;
    if (Number(coin) === 1) {
      allow = await usdiPublic.methods.allowance(address, config.oteex).call();
    } else {
      allow = await usdtPublic.methods.allowance(address, config.oteex).call();
    }
    if (allow >= otePrice * amount) {
      setStatus({
        code: "loading"
      });
      contract.buyOTE(amount * 10 ** 18, coin, ref, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          setStatus({ code: "error", message: err.message });
          message.error(err.message);
        } else {
          setStatus({ code: "success" });
          message.info("Buy success!");
        }
      });
    } else {
      if (Number(coin) === 1) {
        setStatus({
          code: "loading-approve"
        });
        usdi.approve(config.oteex, 10 ** 15, { value: 0 }, err => {
          if (err) {
            setStatus({ code: "error", message: err.message });
            message.error(err.message);
          } else {
            message.info("Approve success!");
            const hide = message.loading("Action in progress..", 0);
            checkAndBuy(hide);
          }
        });
      } else {
        setStatus({
          code: "loading-approve"
        });
        usdt.approve(config.oteex, 10 ** 15, { value: 0 }, err => {
          if (err) {
            setStatus({ code: "error", message: err.message });
            message.error(err.message);
          } else {
            message.info("Approve success!");
            const hide = message.loading("Action in progress..", 0);
            checkAndBuy(hide);
          }
        });
      }
    }
  };

  const checkAndBuy = async hide => {
    console.log("checkandBuy");
    let allow = 0;
    if (Number(coin) === 1) {
      allow = await usdiPublic.methods.allowance(address, config.oteex).call();
    } else {
      allow = await usdtPublic.methods.allowance(address, config.oteex).call();
    }
    if (allow >= otePrice * amount) {
      hide && hide();
      setStatus({
        code: "loading"
      });
      contract.buyOTE(amount * 10 ** 18, coin, ref, { value: 0 }, err => {
        if (err) {
          setStatus({ code: "error", message: err.message });
          message.error(err.message);
        } else {
          setStatus({ code: "success" });
          console.log("Buy success!");
        }
      });
    } else {
      setTimeout(() => {
        checkAndBuy(hide);
      }, 1000);
    }
  };
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  return (
    <PapperBlock
      whiteBg
      noMargin
      title={textTranslate("quickTrade")}
      icon="ios-swap"
      desc=""
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeIndex}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label={textTranslate("buy")} />
          <Tab label={textTranslate("sell")} />
          <Tab label={textTranslate("stakingTrade")} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabContainer value={value} index={0} dir="ltr">
          <div className={classes.tabContainer}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl className={classes.formControlTrade}>
                  <InputLabel htmlFor="coin-simple">
                    {textTranslate("chooseCurrency")}
                  </InputLabel>
                  <Select
                    value={coin}
                    onChange={handleChange}
                    inputProps={{
                      name: "coin",
                      id: "coin-simple"
                    }}
                  >
                    {dataCoin.map((index, i) => (
                      <MenuItem key={i} value={index.value}>
                        {index.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth className={classes.formControlTrade}>
                  <InputLabel htmlFor="adornment-amount4">
                    {textTranslate("selectAmount")}
                  </InputLabel>
                  <Input
                    id="adornment-amount4"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    onBlur={e => {
                      if (e.target.value < 100) {
                        setAmount(100);
                        alert(textTranslate("validateInput"));
                      }
                    }}
                  />
                  <FormHelperText>
                    {textTranslate("totalPurchase")} $
                    {new BigNumber(otePrice)
                      .dividedBy(10 ** 6)
                      .multipliedBy(amount)
                      .toNumber()}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <div className={classes.btnArea}>
              {/* <Typography variant="subtitle1">Estimation: 0.02 BTC</Typography> */}
              <div />
              <Button
                onClick={() => {
                  buyOTE();
                }}
                color="secondary"
                variant="contained"
                className={classes.button}
              >
                {textTranslate("purchase")}
              </Button>
            </div>
          </div>
        </TabContainer>
        <TabContainer value={value} index={1} dir="ltr">
          <TradingFormWidgetSell />
        </TabContainer>
        <TabContainer value={value} index={2} dir="ltr">
          <TradingFormWidgetStacking />
        </TabContainer>
      </SwipeableViews>
    </PapperBlock>
  );
};

TradingFormWidgetContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TradingFormWidgetContainer);
