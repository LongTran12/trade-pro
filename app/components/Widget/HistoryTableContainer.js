/* eslint-disable */
import React, { useState, useEffect } from 'react';
import binanceLogo from 'dan-images/crypto/binance.png';
import bitcoinLogo from 'dan-images/crypto/bitcoin.png';
import bytecoinLogo from 'dan-images/crypto/bytecoin.png';
import cardanoLogo from 'dan-images/crypto/cardano.png';
import decredLogo from 'dan-images/crypto/decred.png';
import iconLogo from 'dan-images/crypto/icon.png';
import iotaLogo from 'dan-images/crypto/iota.png';
import litecoinLogo from 'dan-images/crypto/litecoin.png';
import moneroLogo from 'dan-images/crypto/monero.png';
import nanoLogo from 'dan-images/crypto/nano.png';
import nemLogo from 'dan-images/crypto/nem.png';
import papulousLogo from 'dan-images/crypto/papulous.png';
import rippleLogo from 'dan-images/crypto/ripple.png';
import stellarLogo from 'dan-images/crypto/stellar.png';
import stratisLogo from 'dan-images/crypto/stratis.png';
import tronLogo from 'dan-images/crypto/tron.png';
import TradingTable from '../Tables/TradingTable';
import { contractPublic } from "../../../provider/web3Public";
let counter = 0;
// function createData(tokenIcon, tokenName, tokenStatus, tokenPrice, tokenAmount, tokenBlock, tokenAddress) {
//     counter += 1;
//     return {
//         id: counter,
//         tokenIcon,
//         tokenName,
//         tokenStatus,
//         tokenPrice,
//         tokenAmount,
//         tokenBlock,
//         tokenAddress,
//     };
// }

const HistoryTableContainer = () => {
    const [events, setEvents] = React.useState([]);
    useEffect(() => {
        contractPublic &&
            contractPublic.getPastEvents(
                "allEvents",
                {
                    fromBlock: 0,
                    toBlock: "latest"
                },
                function (error, result) {
                    if (!error) {
                        let lastEvent = result.map(item => ({
                            tokenIcon: item.returnValues.currency === "1" ? binanceLogo : tronLogo,
                            tokenName: item.returnValues.currency === "1" ? "USDI" : "USDT",
                            tokenStatus: item.event === "Buy",
                            tokenPrice: item.returnValues.price / 10 ** 6,
                            tokenAmount: item.returnValues.amount / 10 ** 18,
                            tokenBlock: item.blockNumber,
                            tokenAddress: item.returnValues["0"]
                        }));
                        setEvents(lastEvent);
                    } else {
                        console.log(error);
                    }
                }
            );
    }, [contractPublic]);
    console.log('events', events)
    const states = {
        order: 'asc',
        orderBy: 'tokenPrice',
        columnData: [
            {
                id: 'tokenIcon',
                // numeric: false,
                disablePadding: true,
                label: 'Token Icon'
            },
            {
                id: 'tokenName',
                // numeric: false,
                disablePadding: true,
                label: 'Token Name'
            }, {
                id: 'tokenStatus',
                // numeric: true,
                disablePadding: false,
                label: 'Token Status'
            }, {
                id: 'tokenPrice',
                // numeric: true,
                disablePadding: false,
                label: 'Token Price'
            }, {
                id: 'tokenAmount',
                // numeric: false,
                disablePadding: false,
                label: 'Amount'
            }, {
                id: 'tokenBlock',
                // numeric: true,
                disablePadding: false,
                label: 'Block'
            }, {
                id: 'tokenAddress',
                // numeric: true,
                disablePadding: false,
                label: 'Address'
            },
        ],
        data: events.sort((a, b) => (a.tokenPrice < b.tokenPrice ? -1 : 1)),
        // createData(binanceLogo, 'BNB', 'Binance', 2.5, 4.3, 'up', 'ltc', 341, 0),
        page: 0,
        rowsPerPage: 5,
        defaultPerPage: 5,
        filterText: '',
    };
    // const data = events
    console.log('datap', states.data)
    return (
        <TradingTable
            order={states.order}
            orderBy={states.orderBy}
            data={states.data}
            page={states.page}
            rowsPerPage={states.rowsPerPage}
            defaultPerPage={states.defaultPerPage}
            filterText={states.filterText}
            columnData={states.columnData}
        />
    );
}


export default HistoryTableContainer;
