/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Web3 from "web3";
import { config } from "../config";
const Web3Context = React.createContext();
const WrapWeb3 = ({ children }) => {
  const [web3State, setState] = useState({
    loading: false,
    installed: false,
    loggedIn: false,
    address: undefined,
    web3: undefined,
    contract: undefined,
    usdt: undefined,
    usdi: undefined,
    ote: undefined
  });

  useEffect(() => {
    const checkWeb3 = () => {
      if (window.ethereum) {
        let web3 = new Web3(window.ethereum);
        try {
          window.ethereum
            .enable()
            .then(function(accounts) {
              // User has allowed account access to DApp...
              let w3contract = window.web3.eth
                .contract(config.oteexAbi)
                .at(config.oteex);
              let usdi = window.web3.eth
                .contract(config.usdiAbi)
                .at(config.usdi);
              let member = window.web3.eth
                .contract(config.memberAbi)
                .at(config.memberAddress);
              let usdt = window.web3.eth
                .contract(config.usdtAbi)
                .at(config.usdt);
              let ote = window.web3.eth.contract(config.usdiAbi).at(config.ote);
              setState({
                loading: false,
                installed: true,
                loggedIn: true,
                address: accounts[0],
                web3: web3,
                contract: w3contract,
                usdt,
                usdi,
                ote,
                member
              });
            })
            .catch(e => {
              setState({
                loading: false,
                installed: true,
                loggedIn: false,
                web3: undefined,
                contract: undefined,
                usdt: undefined,
                usdi: undefined
              });
              setTimeout(() => !web3State.loading && checkWeb3(), 1000);
            });
        } catch (e) {
          setState({
            loading: false,
            installed: true,
            loggedIn: false,
            web3: undefined,
            contract: undefined,
            usdt: undefined,
            usdi: undefined
          });
        }
      }
      // Legacy DApp Browsers
      else if (window.web3) {
        let web3 = new Web3(window.web3.currentProvider);
        let w3contract = window.web3.eth
          .contract(config.oteex)
          .at(config.oteexAbi);
        let usdi = window.web3.eth.contract(config.usdi).at(config.usdiAbi);
        let usdt = window.web3.eth.contract(config.usdt).at(config.usdtAbi);
        let ote = window.web3.eth.contract(config.usdiAbi).at(config.ote);
        let member = window.web3.eth
          .contract(config.memberAbi)
          .at(config.memberAddress);
        setState({
          loading: false,
          installed: true,
          loggedIn: true,
          address: web3.eth.accounts[0] || window.web3.eth.accounts[0],
          web3: web3,
          contract: w3contract,
          usdi,
          usdt,
          ote,
          member
        });
      }
      // Non-DApp Browsers
      else {
        setTimeout(() => {
          !web3State.loading && checkWeb3();
        }, 1000);
      }
    };
    !web3State.loading && checkWeb3();
  }, []);
  return (
    <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
  );
};
WrapWeb3.propTypes = {
  children: PropTypes.element.isRequired
};
export default WrapWeb3;
export { Web3Context };
