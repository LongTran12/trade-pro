/* eslint-disable */
import React, { useState, useContext, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./widget-jss";
import { AppContext } from "../../provider/appContext";
import { Web3Context } from "../../provider/web3";
import { config } from "../../config";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import { otePublic } from "../../provider/web3Public";
import Swal from "sweetalert2";

const TradingFormWidgetSell = ({ classes }) => {
  const { t, i18n } = useTranslation();
  const textTranslate = (text) => {
    return i18n.exists(text) ? t(text) : text;
  };
  const { otePrice } = useContext(AppContext);
  const { contract, address, ote } = useContext(Web3Context);
  let dataPrice = [
    {
      name: "1$",
      value: 1,
      number: 1,
    },
    {
      name: "1$",
      value: 1,
      number: 1,
    },
    {
      name: "1$",
      value: 1,
      number: 1,
    },
  ];
  const [status, setStatus] = useState({ code: "" });
  useEffect(() => {
    if (status.code === "loading") {
      Swal.fire({
        title: `${textTranslate("tradingWaiting")}`,
        timer: 1000000,
        text: `${textTranslate("tradingPleaseWaiting")}`,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
    } else if (status.code === "success") {
      Swal.fire({
        timer: "Success",
        text: `${textTranslate("tradingThankSell")}`,
      }).then(() => {
        updateMember();
      });
    } else if (status.code === "error") {
      Swal.fire({
        icon: "error",
        title: `${textTranslate("tradingOops")}`,
        text: status.message,
      });
    } else if (status.code === "loading-approve") {
      Swal.fire({
        title: `${textTranslate("tradingWaiting")}`,
        timer: 1000000,
        text: `${textTranslate("tradingApproveWaiting")}`,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }, [status]);

  const [price, setPrice] = useState(() => {
    if (otePrice / 10 ** 6 === 0.5) {
      return `${dataPrice[0].value}`;
    }
    if (otePrice / 10 ** 6 === 0.75) {
      return `${dataPrice[1].value}`;
    }
    if (otePrice / 10 ** 6 === 1) {
      return `${dataPrice[2].value}`;
    }
    return `${dataPrice[0].value}`;
  });
  console.log(price);
  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  const [amount, setAmount] = useState(100);
  const makeOrder = async () => {
    console.log(amount);
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      setStatus({
        code: "loading",
      });
      contract.makeOrder(amount * 10 ** 18, price, { value: 0 }, (err) => {
        if (err) {
          setStatus({ code: "error", message: err.message });
          message.error(err.message);
        } else {
          message.info(`${textTranslate("tradingMakeOrder")}`);
          console.log("Make order success!");
        }
      });
    } else {
      setStatus({
        code: "loading-token",
      });
      ote.approve(config.oteex, 10 ** 25, { value: 0 }, (err) => {
        if (err) {
          setStatus({ code: "error", message: err.message });
          message.error(err.message);
        } else {
          setStatus({ code: "success" });
          message.info(`${textTranslate("tradingApproveSuccess")}`);
          const hide = message.loading(
            `${textTranslate("tradingActionProgress")}`,
            0
          );
          console.log("Approve success!");
          checkAndBuy(hide);
        }
      });
    }
  };

  const checkAndBuy = async (hide) => {
    console.log("checkandBuy");
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      hide && hide();
      setStatus({
        code: "loading",
      });
      contract.makeOrder(amount * 10 ** 18, price, { value: 0 }, (err) => {
        if (err) {
          setStatus({ code: "error", message: err.message });
          message.error(err.message);
        } else {
          setStatus({ code: "success" });
          console.log("Make order success!");
        }
      });
    } else {
      setTimeout(() => {
        checkAndBuy(hide);
      }, 1000);
    }
  };

  return (
    <div className={classes.tabContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl className={classes.formControlTrade}>
            <InputLabel htmlFor="price-simple">
              {" "}
              {textTranslate("choosePrice")}
            </InputLabel>
            <Select
              value={price}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              inputProps={{
                name: "price",
                id: "price-simple",
              }}
            >
              {dataPrice.map((index, i) => (
                <MenuItem key={i} value={index.value}>
                  {index.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.formControlTrade}>
            <InputLabel htmlFor="adornment-amountn">
              {textTranslate("selectAmount")}
            </InputLabel>
            <Input
              id="adornment-amountn"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  setAmount(100);
                  alert(textTranslate("validateInput"));
                }
              }}
            />
            <FormHelperText>
              {textTranslate("totalPurchase")} $
              {dataPrice[price].number * amount}
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
            makeOrder();
          }}
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          {textTranslate("makeSellOrder")}
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(TradingFormWidgetSell);
