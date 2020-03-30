/* eslint-disable */
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import {
    PapperBlock,
    NetworkWidgetContainer,
    NetworkWidgetListContainer
} from 'dan-components';
import styles from './dashboard-jss';
import InputCopyAddress from '../../components/Widget/InputCopyAddress';
import Divider from "@material-ui/core/Divider";
import InfoUserReference from '../../components/Widget/InfoUserReference';

const NetWork = ({ classes }) => {

    const title = brand.name + ' - Cryptocurrency Dashboard';
    const description = brand.desc;
    const { t, i18n } = useTranslation();
    const textTran = (text) => {
        return i18n.exists(text)
            ? t(text) : text;
    }
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
            <InputCopyAddress />
            <Divider className={classes.divider} />
            <PapperBlock title={textTran('userInfo')} desc="" icon="ios-stats-outline" noMargin whiteBg>
                <InfoUserReference />
            </PapperBlock>
            <Divider className={classes.divider} />
            <PapperBlock title={textTran('Network')} desc="" icon="ios-stats-outline" noMargin whiteBg>
                {arrAddress.map((item, index) => {
                    <Fragment key={index}>
                        <NetworkWidgetListContainer address={item.address} />
                    </Fragment>
                })}
            </PapperBlock>
        </div>
    );

}

NetWork.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NetWork);
