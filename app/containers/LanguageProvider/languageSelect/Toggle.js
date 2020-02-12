/**
 *
 * LocaleToggle
 *
 */
/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LanguageContext } from '../../../contexts/LanguageContext';
import i18n from '../../../i18n'
import { withNamespaces } from 'react-i18next';

const Toggle = () => {
    const values = [
        'en',
        'vi',
    ];
    const { changeLang } = useContext(LanguageContext)
    const [lang, setLang] = useState('vi')

    const handleChange = (event) => {
        setLang(event.target.value)
        changeLang(event.target.value)
    }
    useEffect(() => {
        changeLang(lang)
    }, [lang])
    console.log('lang chang', lang)
    let initLang = i18n.languages
    console.log('lang', initLang)
    return (
        <div>
            <FormControl>
                <Select
                    value={lang}
                    name="lang"
                    onChange={handleChange}
                >
                    {values && values.map(val => (
                        <MenuItem key={val} value={val}>
                            <i className={val} />
                            {val}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );

}


export default (Toggle);