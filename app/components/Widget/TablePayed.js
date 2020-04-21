/* eslint-disable */
import React, { useState, useEffect } from "react";
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
import messageStyles from "dan-styles/Messages.scss";
import moment from "moment";
import { Button } from "@material-ui/core";
import { bonusPublic } from "../../provider/web3Public";

const TablePayed = ({ classes }) => {
  const { t, i18n } = useTranslation();
  const textTranslate = (text) => {
    return i18n.exists(text) ? t(text) : text;
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    bonusPublic.getPastEvents(
      "BonusUSDI",
      {
        fromBlock: 0,
        toBlock: "latest",
      },
      function(error, events) {
        let formatEvents = events.map((item, index) => ({
          id: index,
          time: item.returnValues.time * 1000,
          total: {
            value: item.returnValues.total / 10 ** 6,
            nameCoin: "USDI",
          },
          percent: item.returnValues.percent
            .map((item) => `${item / 100}%`)
            .toString(),
        }));
        setEvents(formatEvents);
      }
    );
  }, [bonusPublic]);
  const columns = [
    {
      id: "id",
      label: textTranslate("ID"),
      formatid: true,
    },
    {
      id: "time",
      label: textTranslate("Time"),
      format: true,
    },
    {
      id: "percent",
      label: textTranslate("Percent"),
      formatid: true,
    },
    {
      id: "total",
      label: textTranslate("Total"),
      align: "right",
      formatNo: true,
    },
  ];

  return (
    <PapperBlock
      className={classes.root}
      noMargin
      title={textTranslate("Table Payed")}
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      <div className={classes.rootTable}>
        <div className={classes.tableWrapper}>
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
                      return (
                        <TableCell key={i} align={column.align}>
                          {column.formatid && value}

                          {column.format && (
                            <span>{moment(value).format("DD/MM/YYYY")}</span>
                          )}
                          {column.formatNo && (
                            <span>
                              {value.value} {value.nameCoin}
                            </span>
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
TablePayed.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TablePayed);
