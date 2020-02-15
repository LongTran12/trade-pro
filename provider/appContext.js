/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { contractPublic } from "./web3Public";
import coinAddressValidator from "coin-address-validator";
import * as qs from "query-string";
import { config } from "../config";

const AppContext = React.createContext();

const AppWrap = ({ children }) => {
  const [appState, setAppState] = useState({
    oteSeller: 0,
    oteStacking: 0,
    otePrice: 0,
    chart: []
  });
  const [ref, setRef] = useState(config.oteex);
  useEffect(() => {
    const parsed = qs.parse(window.location.search);
    if (
      parsed.ref &&
      parsed.ref &&
      coinAddressValidator.validate(parsed.ref, "eth", "prod")
    ) {
      setRef(parsed.ref);
      if (window.localStorage) {
        window.localStorage.setItem("ref", parsed.ref);
      }
    }
  }, []);
  useEffect(() => {
    const getDetail = async () => {
      const [stacking, chart, price] = await Promise.all([
        contractPublic.methods.getStackingStats().call(),
        contractPublic.methods.getChart().call(),
        contractPublic.methods.getPrice().call()
      ]);
      let totalSeller = 0;
      chart.order.map(item => (totalSeller += Number(item)));
      setAppState({
        ...appState,
        otePrice: price,
        oteStacking: stacking.total / 10 ** 18,
        chart: chart,
        oteSeller: totalSeller / 10 ** 18,
        totalMemberStacking: stacking.totalMem
      });
    };
    getDetail();
  }, []);
  return (
    <AppContext.Provider value={{ ...appState, ref }}>
      {children}
    </AppContext.Provider>
  );
};
AppWrap.propTypes = {
  children: PropTypes.element.isRequired
};
export default AppWrap;
export { AppContext };
