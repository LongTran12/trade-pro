
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import '../i18n';
const LanguageContext = createContext();

const WrapLangContext = ({ children }) => {
    const changeLang = lng => {
        i18next.changeLanguage(lng);
    };
    return (
        <LanguageContext.Provider value={{
            changeLang
        }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export default WrapLangContext;

WrapLangContext.propTypes = {
    children: PropTypes.object.isRequired,

};
export { LanguageContext, WrapLangContext };
