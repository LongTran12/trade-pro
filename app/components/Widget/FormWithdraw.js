import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 0,
        label: 'OTE',
    },
    {
        value: 1,
        label: 'USDI',
    },
    {
        value: 2,
        label: 'USDT',
    },
    {
        value: 3,
        label: 'ETH',
    },
];
const [first] = currencies

const FormWithdraw = ({ classes }) => {
    const [currency, setCurrency] = useState(first.value)
    const [amount, setAmount] = useState(100)
    const handleChangeCurrency = (e) => {
        setCurrency(e.target.value)
    }
    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }
    const onSubmit = () => {
        console.log('amount', amount)
        console.log('currency', currency)
    }
    return (
        <Wrap>
            <TextField
                id="filled-select-currency"
                select
                label="Select Currency"
                className={classes.textField}
                value={currency}
                onChange={handleChangeCurrency}
                // helperText="Please select your currency"
                margin="normal"
                variant="outlined"
            >
                {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            {/* <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                <Input
                    id="adornment-amount"
                    value={amount}
                    onChange={handleChangeAmount}
                />
            </FormControl> */}
            <TextField
                id="filled-uncontrolled"
                label="Amount"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={amount}
                onChange={handleChangeAmount}
                type="number"
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={onSubmit}>
                Widthdraw
              {/* <Icon className={classes.rightIcon}>send</Icon> */}
            </Button>
        </Wrap>
    )
}
FormWithdraw.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormWithdraw)
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    >div{
        flex-basis:40%;
    }
    >button{
        background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
        border-radius: 3;
        border: 0;
        /* height: 48; */
        padding: 11px 30px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
    }
    @media (max-width:768px){
        justify-content:center;
        >div{
            flex-basis:100%;
        }
        >button{
            margin-top:20px;
        }
    }
`