/* eslint-disable */
import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import styles from "./widget-jss";
import { Web3Context } from "../../provider/web3";
import { config } from "../../config";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import { otePublic } from "../../provider/web3Public";

const TradingFormWidgetSell = ({ classes }) => {
  const { contract, address, ote } = useContext(Web3Context);
  const [amount, setAmount] = useState(100);
  const dataTerm = [
    {
      name: "6 months - 1.5%",
      value: 6
    },
    {
      name: "12 months - 3%",
      value: 12
    },
    {
      name: "18 months - 6%",
      value: 18
    }
  ];
  const [term, setTerm] = useState(`${dataTerm[0].value}`);
  const handleChange = event => {
    setTerm(event.target.value);
  };
  const stackingOTE = async () => {
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      contract.stackingOTE(amount * 10 ** 18, term, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Stacking success!");
          console.log("Stacking success!");
        }
      });
    } else {
      ote.approve(config.oteex, 10 ** 25, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Approve success!");
          const hide = message.loading("Action in progress..", 0);
          console.log("Approve success!");
          checkAndBuy(hide);
        }
      });
    }
  };

  const checkAndBuy = async hide => {
    console.log("checkandBuy");
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      hide && hide();
      contract.stackingOTE(amount * 10 ** 18, term, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Stacking success!");
          console.log("Stacking success!");
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
    <div className={classes.tabContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl className={classes.formControlTrade}>
            <InputLabel htmlFor="Term-simple">
              {textTranslate("chooseTerm")}
            </InputLabel>
            <Select
              value={term}
              onChange={handleChange}
              inputProps={{
                name: "Term",
                id: "Term-simple"
              }}
            >
              {dataTerm.map((index, i) => (
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
              onChange={e => setAmount(e.target.value)}
              onBlur={e => {
                if (e.target.value < 100) {
                  setAmount(100);
                  alert(textTranslate("validateInput"));
                }
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      {/* <Divider className={classes.divider} /> */}
      <div className={classes.btnArea}>
        <div />
        <Button
          onClick={() => {
            stackingOTE();
          }}
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          {textTranslate("stakingButton")}
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(TradingFormWidgetSell);
