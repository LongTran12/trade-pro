/* eslint-disable */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    CartesianAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import styles from './fluidChart-jss';
import { AppContext } from '../../../../provider/appContext';

const theme = createMuiTheme(ThemePallete.orangeTheme);
const color = ({
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
});

const ChartBarStakedCrypto = ({ classes }) => {
    const { chart } = useContext(AppContext);
    console.log('chart', chart)
    // const schart = [...chart]
    const value = [
        {
            line: "0.5$",
        },
        {
            line: "0.75$",
        },
        {
            line: "1$",
        }
    ]
    const data1 = [
        {
            name: 'Page A',
            uv: (chart &&
                chart.company &&
                chart.company.map((item) => item / 10 ** 18)) ||
                [],
            pv:
                (chart &&
                    chart.order &&
                    chart.order.map(item => item / 10 ** 18)) ||
                [],
            amt: 2400
        },
    ]
    const company = (chart &&
        chart.company &&
        chart.company.map((item) => item / 10 ** 18)) ||
        []
    const order = (chart &&
        chart.company &&
        chart.company.map((item) => item / 10 ** 18)) ||
        []
    console.log('data1', data1)
    const datax = company.map((index, i) => {
        let name = '0.5$'
        let pv = order.map(index => index)
        let datar = [name, ...pv, uv]
        let uv = index[0]
        console.log('datar', datar)
        return datar
    }
    )
    return (
        <div className={classes.chartFluid}>
            <ResponsiveContainer>
                <BarChart
                    width={800}
                    height={450}
                    data={data1}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <CartesianAxis vertical={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fillOpacity="0.8" fill={color.secondary} />
                    <Bar dataKey="uv" stackId="a" fillOpacity="0.8" fill={color.primary} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

ChartBarStakedCrypto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartBarStakedCrypto);
