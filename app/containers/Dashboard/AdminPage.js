import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import brand from "dan-api/dummy/brand";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
    CounterCryptoWidgetContainer,
    PapperBlock,
    TradingFormWidgetContainer,
    FormWithdraw
} from "dan-components";
import styles from "./dashboard-jss";
import ChartBarStakedCrypto from "../Charts/demos/ChartBarStakedCrypto";
import HistoryTableContainer from "../../components/Widget/HistoryTableContainer";

import LatestTransactionWidgetContainer from "../../components/Widget/LatestTransactionWidgetContainer";
import InputCopyAddress from "../../components/Widget/InputCopyAddress";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Web3Context } from "../../provider/web3";

const AdminPage = ({ classes }) => {
    const { isAdmin } = useContext(Web3Context)
    const title = brand.name + " - Admin Dashboard";
    const description = brand.desc;
    const { t, i18n } = useTranslation();
    const textTran = text => {
        return i18n.exists(text) ? t(text) : text;
    };
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Helmet>
            {isAdmin &&
                <PapperBlock
                    title={textTran("widthDraw")}
                    icon="ios-stats-outline"
                    whiteBg
                    overflowX
                    desc=""
                >
                    <FormWithdraw />
                </PapperBlock>
            }
        </div>
    );
};

AdminPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminPage);
