/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import {
    PapperBlock,
    NetworkWidgetContainer
} from 'dan-components';
import styles from './dashboard-jss';

const NetWork = ({ classes }) => {

    const title = brand.name + ' - Cryptocurrency Dashboard';
    const description = brand.desc;
    const { t, i18n } = useTranslation();
    const textTran = (text) => {
        return i18n.exists(text)
            ? t(text) : text;
    }
    return (
        <div>
            <PapperBlock title={textTran('Network')} icon="ios-stats-outline" noMargin whiteBg>
                <NetworkWidgetContainer />
            </PapperBlock>

        </div>
    );

}

NetWork.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NetWork);
