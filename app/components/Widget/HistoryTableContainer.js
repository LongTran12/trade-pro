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
import { contractPublic } from "../../provider/web3Public";
//translate
import { useTranslation } from "react-i18next";
import { Chip } from "@material-ui/core";
import messageStyles from "dan-styles/Messages.scss";

const HistoryTableContainer = ({ classes }) => {
  // const { getLang } = useContext(LanguageContext)
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const getStatus = status => {
    if (status === false) {
      return messageStyles.bgError;
    }
    if (status === true) {
      return messageStyles.bgSuccess;
    }
  };
  const paginationPage = <div>{textTranslate("rowsPerPage")}</div>;
  const columns = [
    {
      id: "tokenIcon",
      label: textTranslate("token"),
      formatImage: "image"
    },
    {
      id: "tokenName",
      label: textTranslate("name"),
      formatNo: "no"
    },
    {
      id: "tokenStatus",
      label: textTranslate("status"),
      formatSTT: "status"
    },
    {
      id: "tokenPrice",
      label: textTranslate("price"),
      align: "right",
      format: value => value.toFixed(2)
    },
    {
      id: "tokenAmount",
      label: textTranslate("amount"),
      align: "right",
      format: value => value.toFixed(2)
    },
    {
      id: "historyDate",
      label: textTranslate("block"),
      align: "right",
      format: value => value,
      disablePadding: false
    },
    {
      id: "addressToken",
      label: textTranslate("address"),
      align: "right",
      formatNo: "no",
      disablePadding: false
    }
  ];

  useEffect(() => {
    contractPublic &&
      contractPublic.getPastEvents(
        "allEvents",
        {
          fromBlock: 0,
          toBlock: "latest"
        },
        function(error, result) {
          if (!error) {
            let lastEvent = result.map(item => ({
              tokenIcon: item.returnValues.currency === "1" ? oteLogo : oteLogo,
              tokenName: item.returnValues.currency === "1" ? "USDI" : "USDT",
              tokenStatus: item.event === "Buy",
              tokenPrice: item.returnValues.price / 10 ** 6,
              tokenAmount: item.returnValues.amount / 10 ** 18,
              historyDate: item.blockNumber,
              addressToken: item.returnValues["0"]
            }));
            setEvents(lastEvent);
          } else {
            console.log(error);
          }
        }
      );
  }, [contractPublic]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [filterText, setFilterText] = useState("");
  const handleUserInput = value => {
    // Show result base on keyword
    setFilterText(value.toLowerCase());
  };
  return (
    <PapperBlock
      className={classes.root}
      noMargin
      title={textTranslate("tradeHistory")}
      icon="ios-basket-outline"
      whiteBg
      desc=""
    >
      <div className={classes.rootTable}>
        <EnhancedTableToolbar
          numSelected={0}
          filterText={filterText}
          onUserInput={event => handleUserInput(event)}
          title={textTranslate("findCoin")}
          // title={i18n.exists('history') ? i18n.t('history') : 'history'}
          placeholder="Search Coin"
        />
        {/* <TableContainer className={classes.container}> */}
        <div className={classes.tableWrapper}>
          <Table
            padding="default"
            className={classNames(
              classes.table,
              classes.stripped,
              classes.hover
            )}
          >
            <TableHead>
              <TableRow>
                {columns.map(column => (
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
              {events
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  if (row.tokenName.toLowerCase().indexOf(filterText) === -1) {
                    return false;
                  }
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns.map((column, i) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={i} align={column.align}>
                            {column.formatNo === "no" && value}

                            {column.format &&
                              typeof value === "number" &&
                              column.format(value)}

                            {column.formatImage && (
                              <img width={30} height={30} alt="" src={value} />
                            )}

                            {column.formatSTT === "status" &&
                              (value === true ? (
                                <Chip
                                  label={textTranslate("buy")}
                                  className={classNames(
                                    classes.tableChip,
                                    getStatus(true)
                                  )}
                                />
                              ) : (
                                <Chip
                                  label={textTranslate("sell")}
                                  className={classNames(
                                    classes.tableChip,
                                    getStatus(false)
                                  )}
                                />
                              ))}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        {/* </TableContainer> */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={paginationPage}
        />
      </div>
    </PapperBlock>
  );
};
HistoryTableContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string
};
export default withStyles(styles)(HistoryTableContainer);
