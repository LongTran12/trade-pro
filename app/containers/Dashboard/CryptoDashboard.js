import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
    CounterCryptoWidgetContainer,
    PapperBlock,
    TradingFormWidgetContainer
} from 'dan-components';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputCopyAddress from '../../components/Widget/InputCopyAddress';
import LatestTransactionWidgetContainer from '../../components/Widget/LatestTransactionWidgetContainer';
import HistoryTableContainer from '../../components/Widget/HistoryTableContainer';
import ChartBarStakedCrypto from '../Charts/demos/ChartBarStakedCrypto';
import styles from './dashboard-jss';
import { Web3Context } from '../../provider/web3';

const CryptoDahboard = ({ classes }) => {
    const title = brand.name + ' - Cryptocurrency Dashboard';
    const description = brand.desc;
    const { t, i18n } = useTranslation();
    const textTran = text => (i18n.exists(text) ? t(text) : text);
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
            <InputCopyAddress />
            <Divider className={classes.divider} />
            <CounterCryptoWidgetContainer />
            <Divider className={classes.divider} />

            <PapperBlock
                title={textTran('oteBuySell')}
                icon="ios-stats-outline"
                whiteBg
                overflowX
                desc=""
            >
                <ChartBarStakedCrypto />
            </PapperBlock>
            <Divider className={classes.divider} />
            {/* <MarketPlaceWIdget /> */}
            {/* <HistoryTableContainer /> */}
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={12} xs={12}>
                    <TradingFormWidgetContainer />
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={12} xs={12}>
                    <HistoryTableContainer />
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.root}>
                <Grid item md={12} xs={12}>
                    <LatestTransactionWidgetContainer />
                </Grid>
            </Grid>
            {/* <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
        </Grid>
        <Grid item md={6} xs={12}>
          <LatestTransactionWidgetContainer />
        </Grid>
      </Grid> */}
            <AlertDialog />
        </div>
    );
};

const AlertDialog = () => {
    const { t, i18n } = useTranslation();
    const textTran = text => (i18n.exists(text) ? t(text) : text);
    const { address } = useContext(Web3Context);
    const [open, setOpen] = React.useState(!address);

    useEffect(() => {
        if (address) {
            setOpen(false);
        }
    }, [address]);

    function handleClose() {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {textTran('useMetamask')}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {textTran('warningPC')}

                    <br />
                    {textTran('warningMobile')}

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    {textTran('agree')}

                </Button>
            </DialogActions>
        </Dialog>
    );
};

CryptoDahboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CryptoDahboard);
