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
import { Web3Context } from "../../provider/web3";
import styled from "styled-components";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import copy from "copy-to-clipboard";
import InputLabel from "@material-ui/core/InputLabel";
// import Button from '@material-ui/core/Button';
import { memberPublic } from "../../provider/web3Public";
import { member } from "../../provider/web3";

const InputCopyAddress = ({ classes }) => {
  const [copys, setCopy] = useState(false);
  const [copyUser, setCopyUser] = useState(false);
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const { address } = useContext(Web3Context);
  useEffect(() => {
    const time = setTimeout(() => {
      setCopy(false);
      setCopyUser(false);
    }, 1500);
    return () => clearTimeout(time);
  }, [copys, copyUser]);
  const domain = window.location.origin + "/?ref=" + address;

  //user

  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const refUser = window.location.origin + "/?user=" + userName;
  const changeUser = e => {
    setUserName(e.target.value);
  };
  const changePhone = e => {
    setPhone(e.target.value);
  };
  const onRegister = async () => {
    member.registerUser(userName, phone, { value: 0 }, err => {
      if (err) {
        console.log(err.message);
        message.error(err.message);
      } else {
        console.log("Register success!");
        message.info("Register success!");
      }
    });
  };

  useEffect(() => {
    const getUsername = async () => {
      try {
        let user = await memberPublic.methods.infoMember(address).call();
        if (user.user !== "") {
          setIsUser(true);
          setUserName(user.user);
        }
      } catch (error) {}
    };
    getUsername();
  }, []);
  //end user
  return (
    <PapperBlock
      className={classes.root}
      noMargin
      title={textTranslate("refLink")}
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      {isUser ? (
        <Wrap className="user">
          <FormControl fullWidth className={classes.formControlTrade}>
            <Input
              id="adornment-amount1"
              value={refUser}
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
                copy(refUser);
                setCopyUser(true);
              }}
            >
              <Tooltip title="copy">
                <FileCopyOutlinedIcon />
              </Tooltip>
            </Button>
            {copyUser && <Copied>Copied!</Copied>}
          </WrapCopy>
        </Wrap>
      ) : (
        <WrapRegister>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">
              {textTranslate("user")}
            </InputLabel>
            <Input id="name-simple" value={userName} onChange={changeUser} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">
              {textTranslate("phone")}
            </InputLabel>
            <Input id="name-simple" value={phone} onChange={changePhone} />
          </FormControl>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={onRegister}
          >
            {textTranslate("register")}
          </Button>
        </WrapRegister>
      )}
      <Wrap>
        <FormControl fullWidth className={classes.formControlTrade}>
          <Input
            id="adornment-amount1"
            value={domain}
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
              copy(domain);
              setCopy(true);
            }}
          >
            <Tooltip title="copy">
              <FileCopyOutlinedIcon />
            </Tooltip>
          </Button>
          {copys && <Copied>Copied!</Copied>}
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
  &.user {
    margin-bottom: 1.5em;
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
const WrapRegister = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  align-items: flex-end;
  input {
    width: 100%;
  }
  .MuiFormControl-root {
    flex-basis: 45%;
    margin-right: 2em;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    margin-bottom: 2em;
    justify-content: center;
    .MuiFormControl-root {
      flex-basis: 100%;
      margin-right: 0;
    }
    button {
      margin-top: 1em;
    }
  }
`;
