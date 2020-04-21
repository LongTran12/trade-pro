/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import oteLogo from "dan-images/crypto/ote.png";

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import PapperBlock from "../PapperBlock/PapperBlock";
import EnhancedTableToolbar from "../Tables/tableParts/TableToolbar";
import styles from "../Tables/tableStyle-jss";
//translate
import { useTranslation } from "react-i18next";
import {
  Chip,
  Grid,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import messageStyles from "dan-styles/Messages.scss";
import BigNumber from "bignumber.js";
import { Modal } from "antd";
import styled from "styled-components";
import { bonusPublic } from "../../provider/web3Public";
import { Web3Context } from "../../provider/web3";
import { message } from "antd";

const TableBlacklist = ({ classes }) => {
  const { bonus } = useContext(Web3Context);

  const widthPopup = window.innerWidth;

  const { t, i18n } = useTranslation();
  const textTranslate = (text) => {
    return i18n.exists(text) ? t(text) : text;
  };
  const columns = [
    {
      id: "address",
      label: textTranslate("address"),
      address: true,
    },
    {
      id: "id",
      label: textTranslate("action"),
      align: "right",
      hid: true,
    },
  ];
  const [events, setEvents] = useState([]);
  useEffect(() => {
    bonusPublic.methods
      .getBlackList()
      .call()
      .then((black) => {
        setEvents(
          black.map((item, index) => ({
            id: index,
            address: item,
          }))
        );
      });
  }, []);
  const onRemove = (id) => {
    console.log(id);
    bonus.removeBlackList(id, { value: 0 }, (err) => {
      if (err) {
        console.log(err.message);
        message.error(err.message);
      } else {
        message.info("Removed blacklist success!");
        console.log("Removed blacklist success!");
      }
    });
  };
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const onSubmitModal = () => {
    bonus.addBlackList(address, { value: 0 }, (err) => {
      if (err) {
        console.log(err.message);
        message.error(err.message);
      } else {
        message.info("Added blacklist success!");
        console.log("Added blacklist success!");
      }
    });
  };
  return (
    <PapperBlock
      className={classes.root}
      noMargin
      title={textTranslate("Table Blacklist")}
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      <div className={classes.rootTable}>
        <div className={classes.tableWrapper}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              color="primary"
            >
              Add Blacklist
            </Button>
          </div>
          {open && (
            <Modal
              title="Add BlackList"
              visible={open}
              onCancel={() => setOpen(false)}
              footer={null}
              width={widthPopup >= 1200 ? "40%" : "80%"}
            >
              <WrapInput>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="name-simple">
                    {textTranslate("address")}
                  </InputLabel>
                  <Input
                    id="name-simple34"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.margin}
                  onClick={onSubmitModal}
                >
                  Submit
                </Button>
              </WrapInput>
            </Modal>
          )}
          <Table
            padding="default"
            // className={classNames(
            //     classes.table,
            //     classes.stripped,
            //     classes.hover
            // )}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={"column" + column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      console.log("value", row);
                      return (
                        <TableCell key={i} align={column.align}>
                          {column.address && value}
                          {column.hid && (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => onRemove(row.address)}
                            >
                              Remove
                            </Button>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </PapperBlock>
  );
};
TableBlacklist.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TableBlacklist);
const WrapInput = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  input {
    width: 100%;
  }
  .MuiFormControl-root {
    flex-basis: 80%;
    margin-right: 2em;
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    .MuiFormControl-root {
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
