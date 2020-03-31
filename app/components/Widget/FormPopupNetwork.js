/* eslint-disable */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    PapperBlock,
    NetworkWidgetContainer,
    NetworkWidgetListContainer,
    InfoUserReferenceAddress,
    NetworkWidgetAddress
} from "dan-components";
import { useTranslation } from "react-i18next";
import Divider from "@material-ui/core/Divider";

const FormPopupNetwork = ({ classes, open, onOpen, onClose, address }) => {
    const { t, i18n } = useTranslation();
    const textTran = text => {
        return i18n.exists(text) ? t(text) : text;
    };
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth={false}
        >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                {/* <DialogContentText> */}
                <PapperBlock
                    title={textTran("userInfo")}
                    desc=""
                    icon="ios-stats-outline"
                    noMargin
                    whiteBg
                >
                    <InfoUserReferenceAddress address={address} />
                </PapperBlock>
                {/* <Divider className={classes.divider} /> */}
                <PapperBlock
                    title={textTran("Network")}
                    desc=""
                    icon="ios-stats-outline"
                    noMargin
                    whiteBg
                >
                    <NetworkWidgetAddress address={address} />
                </PapperBlock>
                {/* </DialogContentText> */}
                {/* fdsafas */}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Exit
              </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormPopupNetwork;