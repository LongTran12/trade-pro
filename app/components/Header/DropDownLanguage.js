/**
 *
 * LocaleToggle
 *
 */
/* eslint-disable */
import React, { useContext, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LanguageContext } from '../../contexts/LanguageContext';
import imgLangDefault from 'dan-images/vietnam.svg';
import '../../i18n';
// import { withStyles } from '@material-ui/core/styles';
// import styles from 'enl-components/Header/header-jss.js';

const DropDownLanguage = () => {
    const morelang = [
        {
            langImg: imgLangDefault,
            lang: "en"
        },
        {
            langImg: imgLangDefault,
            lang: "vi"
        }
    ];
    const { changeLang } = useContext(LanguageContext)
    // const { lang, setLang, changeLang } = useContext(LanguageContext)
    const changeLangi = (e) => {
        changeLang(e)
    }
    const [langs, setLangs] = useState(morelang[0].lang)
    const handleChange = event => {
        setLangs(event.target.value);
    };

    return (
        <FormControl>
            <Select
                value={langs}
                name="lang"
                onChange={handleChange}
            >
                {morelang && morelang.map(val => (
                    <MenuItem key={val} value={val} onClick={changeLangi(val)}>
                        {val.lang}
                    </MenuItem>
                ))}
            </Select>

        </FormControl>

    );
}


export default DropDownLanguage;