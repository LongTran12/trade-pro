
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types';
import i18n from 'i18next'
import '../i18ns'
import En from '../translations/En'
import Vi from '../translations/Vi'


const LanguageContext = createContext()

const WrapLangContext = ({ children }) => {

    const changeLang = lng => {
        i18n.changeLanguage(lng)
    }
    // const getLang = (text) => {
    //     switch (lang) {
    //         case 'vi':
    //             if (Vi[text]) {
    //                 return Vi[text]
    //             } else {
    //                 return En[text]
    //             }
    //         default:
    //             return En[text]
    //     }
    // }
    return <LanguageContext.Provider value={{
        // lang,
        // setLang,
        // getLang,
        changeLang
    }}>
        {children}
    </LanguageContext.Provider>
}

export default WrapLangContext

WrapLangContext.propTypes = {
    children: PropTypes.object.isRequired,

};
export { LanguageContext, WrapLangContext }