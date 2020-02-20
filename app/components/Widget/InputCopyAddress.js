/* eslint-disable */
import React, { useState, useContext, useEffect } from "react";
import PapperBlock from "../PapperBlock/PapperBlock";
import {
  Input,
  withStyles,
  Button,
  SvgIcon,
  TextField,
  FormControl,
  Tooltip
} from "@material-ui/core";
import styles from "../Tables/tableStyle-jss";
import { useTranslation } from "react-i18next";
import { Web3Context } from "../../../provider/web3";
import styled from "styled-components";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const InputCopyAddress = ({ classes }) => {
  const [copy, setCopy] = useState(false);
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const { address } = useContext(Web3Context);
  useEffect(() => {
    const time = setTimeout(() => {
      setCopy(false);
    }, 1500);
    return () => clearTimeout(time);
  }, [copy]);
  const domain = window.location.href + "?ref=";
  return (
    <PapperBlock
      className={classes.root}
      noMargin
      title={textTranslate("refLink")}
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      <Wrap>
        {/* <Input value={value} fullWidth readOnly /> */}
        <FormControl fullWidth className={classes.formControlTrade}>
          <Input
            id="adornment-amount1"
            value={domain + address}
            disabled
            startAdornment={
              <InputAdornment position="start">
                <ImportContactsIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <WrapCopy>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(domain + address);
              setCopy(true);
            }}
          >
            <Tooltip title="copy">
              <FileCopyOutlinedIcon />
            </Tooltip>
          </Button>
          {copy && <Copied>Copied!</Copied>}
        </WrapCopy>
      </Wrap>
    </PapperBlock>
  );
};

export default withStyles(styles)(InputCopyAddress);
const Wrap = styled.div`
  display: flex;
  /* flex-flow:row wrap; */
  justify-content: space-between;
  align-items: center;
  position: relative;
  input {
    width: 100%;
  }
  .MuiInputAdornment-positionStart {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 7px;
  }
`;
const WrapCopy = styled.div`
  position: relative;
`;
const Copied = styled.div`
  position: absolute;
  color: #111;
  bottom: -20px;
  left: 0;
  text-align: center;
  width: 100%;
`;
