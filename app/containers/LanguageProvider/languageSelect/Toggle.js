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
import flagEnglish from 'dan-images/english.png';
import flagVietName from 'dan-images/vietnam.svg';
import styled from 'styled-components';

const Toggle = () => {
    const values = [
        'en',
        'vi',
    ];
    const values1 = [
        {
            lang: 'en',
            img: flagEnglish,
            textLang: "English"
        },
        {
            lang: 'vi',
            img: flagVietName,
            textLang: "Vietnamese"
        },

    ];
    const { changeLang, lang, setLang } = useContext(LanguageContext)
    // const [lang, setLang] = useState('en')
    // console.log('lang', lang)
    const handleChange = (event) => {
        setLang(event.target.value)
        changeLang(event.target.value)
    }
    useEffect(() => {
        changeLang(lang)
    }, [lang])

    return (
        <Wrap>
            <FormControl>
                <Select
                    value={lang}
                    name="lang"
                    onChange={handleChange}
                >
                    {values1 && values1.map((val, i) => (
                        <MenuItem key={i} value={val.lang}>
                            <i className={val} />
                            <img src={val.img} width={20} height={15} />
                            <span style={{ marginRight: 7 }} />
                            {val.textLang}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Wrap>
    );

}


export default (Toggle);
const Wrap = styled.div`
    .MuiFormControl-root{
        .MuiInput-root{
            border:0;
            background:rgba(179,212,252,.7);
            .MuiSelect-select.MuiSelect-select{
                padding-left:30px;
                padding-right:40px;
                color:#fff;
            }
            .MuiSelect-icon{
                right:7px;
                color:#e2e2e2;
            }
        }
    }
`