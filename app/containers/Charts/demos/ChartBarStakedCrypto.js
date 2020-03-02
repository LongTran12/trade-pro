/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import ThemePallete from "dan-api/palette/themePalette";
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
} from "recharts";
import styles from "./fluidChart-jss";
import { AppContext } from "../../../provider/appContext";
import { useTranslation } from "react-i18next";

const theme = createMuiTheme(ThemePallete.orangeTheme);
const color = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main
};

const ChartBarStakedCrypto = ({ classes }) => {
  const { chart } = useContext(AppContext);
  // console.log('chart', chart)
  const { t, i18n } = useTranslation();
  const textTran = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const name = ["0.5$", "0.75$", "1$"];
  let chartData =
    chart && chart.order
      ? chart.order.map((item, index) => ({
          name: name[index],
          seller: item / 10 ** 18,
          company: chart.company[index] / 10 ** 18
        }))
      : [];
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <BarChart
          width={800}
          height={450}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            axisLine={false}
            tickSize={3}
            tickLine={false}
            tick={{ stroke: "none" }}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="company"
            name={textTran("company")}
            stackId="a"
            fillOpacity="0.8"
            fill={color.secondary}
          />
          <Bar
            dataKey="seller"
            name={textTran("seller")}
            stackId="a"
            fillOpacity="0.8"
            fill={color.primary}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ChartBarStakedCrypto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChartBarStakedCrypto);
