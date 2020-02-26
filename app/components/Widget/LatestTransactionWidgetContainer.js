/* eslint-disable */
import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import oteLogo from "dan-images/crypto/ote.png";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import styles from "dan-components/Tables/tableStyle-jss";
import messageStyles from "dan-styles/Messages.scss";
import PapperBlock from "../PapperBlock/PapperBlock";
import { contractPublic } from "../../../provider/web3Public";
import { Web3Context } from "../../../provider/web3";

function LatestTransactionWidgetContainer({ classes }) {
  const getStatus = status => {
    if (status === false) {
      return messageStyles.bgError;
    }
    if (status === true) {
      return messageStyles.bgSuccess;
    }
  };
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const columns = [
    {
      id: "tokenIcon",
      label: textTranslate("currency"),
      formatImage: "image"
    },
    {
      id: "tokenStatus",
      label: textTranslate("status"),
      formatSTT: "status"
    },
    {
      id: "tokenPrice",
      label: textTranslate("price"),
      format: value => value.toFixed(2)
    },
    {
      id: "total",
      label: textTranslate("total"),
      align: "right",
      format: value => value.toFixed(2)
    }
  ];
  const { address } = useContext(Web3Context);
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    address &&
      contractPublic &&
      contractPublic.getPastEvents(
        "allEvents",
        {
          fromBlock: 0,
          toBlock: "latest"
        },
        function(error, result) {
          if (!error) {
            let lastEvent = result
              .filter(
                item =>
                  item.returnValues["0"].toLowerCase() === address.toLowerCase()
              )
              .map(item => ({
                tokenIcon:
                  item.returnValues.currency === "1" ? oteLogo : oteLogo,
                tokenName: item.returnValues.currency === "1" ? "USDI" : "USDT",
                tokenStatus: item.event === "Buy",
                tokenPrice: item.returnValues.price / 10 ** 6,
                tokenAmount: item.returnValues.amount / 10 ** 18,
                total:
                  (item.returnValues.price / 10 ** 6) *
                  (item.returnValues.amount / 10 ** 18)
              }));
            setEvents(lastEvent);
          } else {
            console.log(error);
          }
        }
      );
  }, [address]);

  return (
    <PapperBlock
      whiteBg
      noMargin
      title={textTranslate("recentTrade")}
      icon="ios-time-outline"
      desc=""
    >
      <div className={classes.rootTable}>
        <Table padding="default" className={classes.tableSmall}>
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={i}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((row, index) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  key={"row-" + index}
                >
                  {columns.map((column, i) => {
                    const value = row[column.id];
                    // console.log(column.formatSTT)
                    return (
                      <TableCell
                        key={`p-${i}`}
                        align={column.align}
                        padding="default"
                      >
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
    </PapperBlock>
  );
}

LatestTransactionWidgetContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LatestTransactionWidgetContainer);
