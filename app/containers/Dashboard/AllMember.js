import React, { useContext, useEffect, Fragment } from "react";
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
    FormWithdraw,
    NetworkWidgetAddress
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
import styled from "styled-components";

const AllMember = ({ classes }) => {
    const { isAdmin } = useContext(Web3Context)
    const title = brand.name + " - All Member";
    const description = brand.desc;
    const { t, i18n } = useTranslation();
    const textTran = text => {
        return i18n.exists(text) ? t(text) : text;
    };
    const arrAddress = [
        {
            address: "0x6C1515A8861d825639378576d76494Cb303D3A97"
        },
        {
            address: ""
        },
    ]
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
                    title={textTran("network")}
                    icon="ios-stats-outline"
                    whiteBg
                    overflowX
                    desc=""
                >
                    {
                        arrAddress.map((item, index) =>
                            <Wrap key={index}>
                                <h5>Address:<span>{item.address}</span></h5>
                                <NetworkWidgetAddress address={item.address} />
                            </Wrap>
                        )
                    }
                </PapperBlock>
            }
        </div>
    );
};

AllMember.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllMember);
const Wrap = styled.div`
    margin-bottom:25px;
`