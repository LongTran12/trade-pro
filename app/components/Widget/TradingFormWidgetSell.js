/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './widget-jss';
import { AppContext } from '../../../provider/appContext';
import { Web3Context } from "../../../provider/web3";
import { usdtPublic, usdiPublic } from "../../../provider/web3Public";
import { config } from "../../../config";

const TradingFormWidgetSell = ({ classes }) => {
  const { otePrice } = useContext(AppContext);
  const { contract, address, ote } = useContext(Web3Context);
  let dataPrice = [
    {
      name: "0.5$",
      value: 0
    },
    {
      name: "0.75$",
      value: 1
    },
    {
      name: "1$",
      value: 2
    }
  ];
  if (otePrice / 10 ** 6 === 0.75) {
    dataPrice = [
      {
        name: "0.75$",
        value: 1
      },
      {
        name: "1$",
        value: 2
      }
    ];
  }
  if (otePrice / 10 ** 6 === 1) {
    dataPrice = [
      {
        name: "1$",
        value: 2
      }
    ];
  }

  const [price, setPrice] = useState(`${dataPrice[0].value}`);
  useEffect(() => {
    setPrice(`${dataPrice[1].value}`)
  }, [])
  const handleChange = event => {
    setPrice(event.target.value);
  };
  const [amount, setAmount] = useState(100);
  const makeOrder = async () => {
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      contract.makeOrder(amount * 10 ** 18, price, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Make order success!");
          console.log("Make order success!");
        }
      });
    } else {
      ote.approve(config.oteex, amount * 10 ** 18, { value: 0 }, err => {
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
      contract.makeOrder(amount * 10 ** 18, price, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Make order success!");
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
            <InputLabel htmlFor="price-simple">Price</InputLabel>
            <Select
              value={price}
              onChange={handleChange}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              inputProps={{
                name: 'price',
                id: 'price-simple',
              }}
            >
              {dataPrice.map((index, i) =>
                <MenuItem key={i} value={index.value}>{index.name}</MenuItem>
              )}

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.formControlTrade}>
            <InputLabel htmlFor="adornment-amountn">Amount</InputLabel>
            <Input
              id="adornment-amountn"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              onBlur={e => {
                if (e.target.value < 100) {
                  setAmount(100);
                  alert("Must be bigger than 100 OTE");
                }
              }}
            />
            <FormHelperText>Total Amount: ${(otePrice / 10 ** 6) * amount}</FormHelperText>
          </FormControl>
        </Grid>

      </Grid>
      <Divider className={classes.divider} />
      <div className={classes.btnArea}>
        <Typography variant="subtitle1">Estimation: 0.02 BTC</Typography>
        <Button onClick={() => { makeOrder(); }} color="secondary" variant="contained" className={classes.button}>
          Make Sell Order
                </Button>
      </div>
    </div>


  );
}


export default withStyles(styles)(TradingFormWidgetSell);
