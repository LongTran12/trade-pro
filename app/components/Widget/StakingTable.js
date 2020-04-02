/* eslint-disable */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import PapperBlock from "../PapperBlock/PapperBlock";
import styles from "../Tables/tableStyle-jss";
//translate
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { Chip, Button } from "@material-ui/core";
import messageStyles from "dan-styles/Messages.scss";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import { web3Public, contractPublic } from "../../provider/web3Public";
import { Web3Context } from "../../provider/web3";
import { config } from "../../config";
import BigNumber from "bignumber.js";
import Swal from "sweetalert2";
const StakingTable = ({ classes }) => {
    // const { getLang } = useContext(LanguageContext)
    const { address, contract } = useContext(Web3Context);
    const [events, setEvents] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { t, i18n } = useTranslation();
    const getStaking = async () => {
        let oteEX = new web3Public.eth.Contract(config.oteexAbi, config.oteex);
        let data = [];
        let dataContract = await oteEX.methods.getStakingList(address).call();
        dataContract.amount.forEach((item, index) => {
            data.push({
                id: index,
                amount: new BigNumber(item).dividedBy(10 ** 18).toNumber(),
                term: dataContract.term[index],
                timeStart: Number(dataContract.timeStart[index]) * 1000,
                lastDay:
                    (Number(dataContract.timeStart[index]) +
                        dataContract.term[index] * 30 * 24 * 60 * 60) *
                    1000,
                status: Number(dataContract.status[index])
            });
        });
        setEvents(data);
    };
    useEffect(() => {
        getStaking();
    }, []);
    const textTranslate = text => {
        return i18n.exists(text) ? t(text) : text;
    };
    const getStatus = status => {
        if (status === 2) {
            return messageStyles.bgError;
        }
        if (status === 0) {
            return messageStyles.bgSuccess;
        }
        if (status === 1) {
            return messageStyles.bgInfo;
        }
    };
    const paginationPage = <div>{textTranslate("rowsPerPage")}</div>;
    const columns = [
        {
            id: "id",
            label: textTranslate("ID"),
            event: "event"
        },
        {
            id: "amount",
            label: textTranslate("amount"),
            format: value => value,
            align: "center"
        },
        {
            id: "term",
            label: textTranslate("term"),
            align: "center"
        },
        {
            id: "timeStart",
            label: textTranslate("timeStart"),
            format: value => moment(value).format("MMM Do YY"),
            align: "center"
        },
        {
            id: "lastDay",
            label: textTranslate("lastDay"),
            format: value => moment(value).format("MMM Do YY"),
            align: "center"
        },
        {
            id: "status",
            label: textTranslate("status"),
            status: "status",
            align: "center"
        },
        {
            id: "id",
            label: textTranslate("action"),
            action: "event",
            align: "center"
        }
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleUserInput = value => {
        // Show result base on keyword
        setFilterText(value.toLowerCase());
    };

    const cancelStaking = async id => {
        let idStack = await contractPublic.methods
            .getStackMember(address, id)
            .call();
        contract.cancelStacking(idStack, { value: 0 }, err => {
            if (err) {
                console.log(err.message);
                message.error(err.message);
            } else {
                message.info("Cancel Staking Success!");
                console.log("Cancel Staking Success!");
            }
        });
    };
    const datas = [
        {
            id: 2,
            amount: 1000,
            term: 6,
            timeStart: 1579487117000,
            lastDay: 1584671117000,
            status: 0
        }
    ];

    return (
        <PapperBlock
            className={classes.root}
            noMargin
            title={textTranslate("stakingTable")}
            icon="ios-basket-outline"
            whiteBg
            desc=""
        >
            <div className={classes.rootTable}>
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
                                    <TableCell key={"column" + column.id} align={column.align}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, i) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                            {columns.map((column, is) => {
                                                const value = row[column.id];
                                                let status = column.status && value;
                                                let elementStatus;
                                                switch (status) {
                                                    case 0: //active
                                                        elementStatus = (
                                                            <Chip
                                                                label={textTranslate("active")}
                                                                className={classNames(
                                                                    classes.tableChip,
                                                                    getStatus(0)
                                                                )}
                                                            />
                                                        );
                                                        break;
                                                    case 1: //cancel
                                                        elementStatus = (
                                                            <Chip
                                                                label={textTranslate("cancel")}
                                                                className={classNames(
                                                                    classes.tableChip,
                                                                    getStatus(1)
                                                                )}
                                                            />
                                                        );
                                                        break;
                                                    case 2: //end
                                                        elementStatus = (
                                                            <Chip
                                                                label={textTranslate("end")}
                                                                className={classNames(
                                                                    classes.tableChip,
                                                                    getStatus(2)
                                                                )}
                                                            />
                                                        );
                                                        break;

                                                    default:
                                                        break;
                                                }
                                                const btnID = column.event && value;
                                                console.log("data id s", btnID);
                                                const onSubmit = e => {
                                                    // console.log('data id', e)
                                                };
                                                const buttonFire = (idFire, term) => {
                                                    const percent = {
                                                        "6": 10,
                                                        "12": 15,
                                                        "18": 30
                                                    };
                                                    Swal.fire({
                                                        title: `${textTranslate("areYouSure")}`,
                                                        text: `${textTranslate("cancelStakingif")} ${
                                                            percent[term]
                                                            }% ${textTranslate("cancelStakingamount")}`,
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: `${textTranslate("confimYesDelete")}`
                                                    }).then(result => {
                                                        if (result.value) {
                                                            cancelStaking(idFire);
                                                        }
                                                    });
                                                };
                                                const elementButton =
                                                    row.status === 0 ? (
                                                        <Button
                                                            startIcon={<DeleteIcon />}
                                                            variant="contained"
                                                            color="secondary"
                                                            onClick={() => {
                                                                buttonFire(row.id, row.term);
                                                            }}
                                                        >
                                                            {textTranslate("cancel")}
                                                        </Button>
                                                    ) : (
                                                            <div />
                                                        );

                                                return (
                                                    <TableCell key={is} align={column.align}>
                                                        <form
                                                            onSubmit={e => {
                                                                e.preventDefault();
                                                                onSubmit(value);
                                                            }}
                                                        >
                                                            {column.action
                                                                ? elementButton
                                                                : column.format
                                                                    ? column.format(value)
                                                                    : column.status
                                                                        ? elementStatus
                                                                        : value}
                                                        </form>
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
StakingTable.propTypes = {
    classes: PropTypes.object.isRequired,
    filterText: PropTypes.string
};
export default withStyles(styles)(StakingTable);
