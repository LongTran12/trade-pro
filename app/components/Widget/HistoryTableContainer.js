/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import binanceLogo from 'dan-images/crypto/binance.png';
import bitcoinLogo from 'dan-images/crypto/bitcoin.png';
import { defineMessages } from 'react-intl';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import PapperBlock from '../PapperBlock/PapperBlock';
import EnhancedTableToolbar from '../Tables/tableParts/TableToolbar';
import EnhancedTableHead from '../Tables/tableParts/TableHeader';
// import TrendingUp from '@material-ui/icons/TrendingUp';
// import TrendingDown from '@material-ui/icons/TrendingDown';
// import TrendingFlat from '@material-ui/icons/TrendingFlat';
// import { cryptoData } from 'dan-api/chart/chartMiniData';
// import { BarChart, Bar } from 'recharts';
// import PapperBlock from '../PapperBlock/PapperBlock';
// import EnhancedTableToolbar from './tableParts/TableToolbar';
// import EnhancedTableHead from './tableParts/TableHeader';

import styles from '../Tables/tableStyle-jss';
import { contractPublic } from "../../../provider/web3Public";
//translate
import messages from './messages';
import { LanguageContext } from '../../contexts/LanguageContext';
import i18n from "i18next";

const columns = [
    {
        id: "tokenIcon",
        label: "Token",
        formatImage: "image"
    },
    {
        id: "tokenName",
        label: "Name",
        formatNo: "no"
    },
    {
        id: "tokenStatus",
        label: "Status",
        formatSTT: "status"
    },
    {
        id: "tokenPrice",
        label: "Price",
        align: "right",
        format: value => value.toFixed(2)
    },
    {
        id: "tokenAmount",
        label: "Amount",
        align: "right",
        format: value => value.toFixed(2)
    },
    {
        id: "historyDate",
        label: "Block",
        align: "right",
        format: value => value,
        disablePadding: false,
    },
    {
        id: "addressToken",
        label: "Address",
        align: "right",
        formatNo: "no",
        disablePadding: false,
    }
];



const HistoryTableContainer = ({ classes, intl }) => {
    // const { getLang } = useContext(LanguageContext)
    const [events, setEvents] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    useEffect(() => {
        contractPublic &&
            contractPublic.getPastEvents(
                "allEvents",
                {
                    fromBlock: 0,
                    toBlock: "latest"
                },
                function (error, result) {
                    if (!error) {
                        let lastEvent = result.map(item => ({
                            tokenIcon: item.returnValues.currency === "1" ? binanceLogo : bitcoinLogo,
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
    const [filterText, setFilterText] = useState('')
    const handleUserInput = (value) => {
        // Show result base on keyword
        setFilterText(value.toLowerCase())
    }
    return (

        <PapperBlock className={classes.root} noMargin title="Trade History" icon="ios-basket-outline" whiteBg >
            <div className={classes.rootTable}>

                <EnhancedTableToolbar
                    numSelected={0}
                    filterText={filterText}
                    onUserInput={(event) => handleUserInput(event)}
                    title={'history'}

                    // title={i18n.exists('history') ? i18n.t('history') : 'history'}
                    placeholder="Search Coin"
                />
                {/* <TableContainer className={classes.container}> */}
                <div className={classes.tableWrapper}>
                    <Table padding="default" className={classNames(classes.table, classes.stripped, classes.hover)}>
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

                                                        {column.formatImage && <img width={30} height={30} alt="" src={value} />}

                                                        {column.formatSTT === "status" &&
                                                            (value === true ? (
                                                                <span style={{ color: "#43a047" }}>Buy</span>
                                                            ) : (
                                                                    <span style={{ color: "#e53935" }}>Sell</span>
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
                />
            </div>
        </PapperBlock>
    );
};
HistoryTableContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    filterText: PropTypes.string,
}
export default withStyles(styles)(HistoryTableContainer);
