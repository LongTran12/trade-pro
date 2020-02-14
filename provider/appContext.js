/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { contractPublic, web3Public } from './web3Public';


const AppContext = React.createContext();

const AppWrap = ({ children }) => {
    const [appState, setAppState] = useState({
        oteSeller: 0,
        oteStacking: 0,
        otePrice: 0,
        chart: []
    });
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
    return <AppContext.Provider value={
        appState
    }> {children}</AppContext.Provider >;
};
AppWrap.propTypes = {
    children: PropTypes.element.isRequired
};
export default AppWrap;
export { AppContext };
