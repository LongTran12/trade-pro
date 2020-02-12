/*
 *
 * LanguageToggle
 *
 */
/* eslint-disable */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import { LanguageContext } from '../../../contexts/LanguageContext';
import i18n from '../../../i18n'

const apps = [
    'en',
    'vi',
];
const LocaleToggle = () => {
    const { changeLang } = useContext(LanguageContext)
    const [locale, setLocale] = useState('en')

    const handleLocalToggle = (event) => {
        changeLang(event)
    }
    // const locale = "en"
    let initLang = i18n.languages
    console.log('lang', initLang)
    return (
        <Toggle
        />
    );
}

LocaleToggle.propTypes = {
    onLocaleToggle: PropTypes.func.isRequired,
    changeDirection: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default LocaleToggle;