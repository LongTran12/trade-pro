import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PapperBlock from '../PapperBlock/PapperBlock';

const InfoGrid = ({
    name, price, onClick, button
}) => (
        <div>
            <div>{name}</div>
            {price && <div>{price}</div>}
            <Button onClick={onClick} variant="contained" color="primary">{button}</Button>
        </div>

    );
const BlackListInfomation = () => {
    const dataList = [
        {
            name: 'm6',
            price: 100,
            button: 'Bonus'
        },
        {
            name: 'm12',
            price: 100,
            button: 'Change Price'
        },
        {
            name: 'm18',
            price: 100,
            button: 'Change Percent'
        }
    ];
    return (
        <PapperBlock

            noMargin
            title="BlackList Infomation"
            icon="ios-basket-outline"
            whiteBg
            desc=""
        >

            <Grid container spacing={3}>
                {dataList.map((item, i) => (
                    <Grid md={4} key={i}>
                        <InfoGrid {...item} />
                    </Grid>
                ))}

            </Grid>
        </PapperBlock>

    );
};

export default BlackListInfomation;
