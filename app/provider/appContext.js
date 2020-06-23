/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { contractPublic } from "./web3Public";
import coinAddressValidator from "coin-address-validator";
import * as qs from "query-string";
import { config } from "../config";
import { memberPublic } from "../provider/web3Public";
import web3 from "web3";
const AppContext = React.createContext();

const AppWrap = ({ children }) => {
  const [appState, setAppState] = useState({
    oteSeller: 0,
    oteStacking: 0,
    otePrice: 0,
    chart: []
  });
  const [ref, setRef] = useState(
    web3.utils.toChecksumAddress("0x0000000000000000000000000000000000000000")
  );
  useEffect(() => {
    const getUser = async username => {
      let getAddress = await memberPublic.methods.getAddress(username).call();
      console.log("fsdhjfs", getAddress);
      setRef(getAddress);
    };
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
    if (parsed.user && parsed.user !== "") {
      console.log("hahaha");
      getUser(parsed.user);
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
        otePrice: 0.75 * 10 ** 6,
        oteStacking: stacking.total / 10 ** 18,
        chart: chart,
        oteSeller: totalSeller / 10 ** 18,
        totalMemberStacking: 203
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
