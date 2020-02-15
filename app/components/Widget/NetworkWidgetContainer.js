/* eslint-disable */
import React, { useContext, useState, useEffect, memo } from "react";
import { web3Public } from "../../../provider/web3Public";
import { config } from "../../../config";
import { Web3Context } from "../../../provider/web3";
import NetWorkWidgetTree from "./NetworkWidgetTree";
import styled from "styled-components";

const NetworkWidgetContainer = () => {
  const { address } = useContext(Web3Context);
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      let member = new web3Public.eth.Contract(
        config.memberAbi,
        config.memberAddress
      );
      let memberInfo = await member.methods.infoMember(address).call();
      let linaData = new web3Public.eth.Contract(
        config.linaDataAbi,
        config.linaData
      );
      let refs = [];
      console.log("membetr", memberInfo);
      for (let i = 0; i < memberInfo.refs.length; i++) {
        let agencyInfo = await linaData.methods
          .getUserInfo(memberInfo.refs[i])
          .call();
        refs.push({
          name: memberInfo.refs[i],
          title: (
            <div className="ref_title">
              <div className="ref_name">
                <span className="level__ref">F1</span>
                <span className="address__ref">{memberInfo.refs[i]}</span>
              </div>
              <div className="ref_stat">
                <span className="ref_user hidden-mobile">
                  [Total Invest: {agencyInfo.totalInvest / 10 ** 18}
                </span>
                <span className="hidden-mobile">|</span>
                <span className="ref_commission">
                  Total Token: <span>{agencyInfo.totalToken / 10 ** 18}</span>{" "}
                  LINA| Sale: {agencyInfo.totalSales / 10 ** 18}
                  <span className="hidden-mobile">]</span>
                </span>
              </div>
            </div>
          ),
          key: memberInfo.refs[i]
        });
      }
      setTreeData(refs);
    };
    if (address) {
      getInfo();
    }
  }, [address]);

  const onLoadData = async treeNode => {
    if (treeNode.props.children) {
      return;
    }
    let member = new web3Public.eth.Contract(
      config.memberAbi,
      config.memberAddress
    );
    let memberInfo = await member.methods
      .infoMember(treeNode.props.name)
      .call();
    treeNode.props.dataRef.children = [];
    let linaData = new web3Public.eth.Contract(
      config.linaDataAbi,
      config.linaData
    );
    for (let i = 0; i < memberInfo.refs.length; i++) {
      let agencyInfo = await linaData.methods
        .getUserInfo(memberInfo.refs[i])
        .call();
      treeNode.props.dataRef.children.push({
        name: memberInfo.refs[i],
        title: (
          <div className="ref_title">
            <div className="ref_name">
              <span className="level__ref">
                F{treeNode.props.eventKey.replace(/[^-]/g, "").length + 2}
              </span>
              <span className="address__ref">{memberInfo.refs[i]}</span>
            </div>
            <div className="ref_stat">
              <span className="ref_user hidden-mobile">
                [Total Invest: {agencyInfo.totalInvest / 10 ** 18}
              </span>
              <span className="hidden-mobile">|</span>
              <span className="ref_commission">
                Total Token: <span>{agencyInfo.totalToken / 10 ** 18}</span>{" "}
                LINA| Sale: {agencyInfo.totalSales / 10 ** 18}
                <span className="hidden-mobile">]</span>
              </span>
            </div>
          </div>
        ),
        key: `${treeNode.props.eventKey}-${memberInfo.refs[i]}`,
        level: treeNode.props.eventKey.replace(/[^-]/g, "").length + 2
      });
    }
    setTreeData([...treeData]);
  };
  return (
    <NetworkWrap>
      <NetWorkWidgetTree onLoadData={onLoadData} treeData={treeData} />
    </NetworkWrap>
  );
};

export default NetworkWidgetContainer;

const NetworkWrap = memo(styled.div`
  .ant-tree {
    .ant-tree-node-content-wrapper {
      width: 100%;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      padding: 12px 40px 12px 16px !important;
      height: inherit !important;
      .ant-tree-title {
        width: 100%;
        .ref_title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ref_name {
            .level__ref {
              font-size: 18px;
              font-weight: 500;
              margin-right: 10px;
            }
          }
        }
      }
    }
    ul {
      width: 100%;
      padding: 0 0 0 18px;
    }
    li {
      display: flex;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      /* padding:5px 0; */
      margin: 0;
      padding: 4px 0;
      white-space: nowrap;
      list-style: none;
      outline: 0;

      .ant-tree-switcher {
        position: absolute;
        top: 15px;
        right: 10px;
      }
    }
    & > li {
      & > .ant-tree-node-content-wrapper {
        background-color: rgb(83, 109, 254) !important;
        .level__ref,
        .address__ref,
        .ref_stat span {
          color: #fff;
        }
      }
      & > ul {
        & > li {
          & > .ant-tree-node-content-wrapper {
            background-color: rgb(0, 150, 136) !important;
            .level__ref,
            .address__ref,
            .ref_stat span {
              color: #fff;
            }
          }
          & > ul {
            & > li {
              & > .ant-tree-node-content-wrapper {
                background-color: rgb(251, 140, 0) !important;
                .level__ref,
                .address__ref,
                .ref_stat span {
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  .ant-collapse-borderless {
    background: none;
  }
  .ant-collapse-item {
    border-bottom: none !important;
    margin-bottom: 20px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    .ant-collapse-header {
      position: relative;
      padding: 12px 16px 12px 40px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      cursor: pointer;
      transition: all 0.3s;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      .panel_head {
        position: relative;
        padding-left: 50px;
      }
      .wrap-f__header {
        position: relative;
        .percentage {
          padding-left: 10px;
          font-size: 18px;
          font-weight: 500;
        }
      }
      .f__header {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 4px solid #fff;
        display: inline-block;
        position: absolute;
        text-align: center;
        top: -22px;
        padding-top: 16px;
        font-size: 18px;
        font-weight: 500;
        left: -68px;
        z-index: 9;
        padding-left: 0;
      }
    }
    &::selection {
      color: transparent;
      background: transparent;
    }
    &:first-child {
      .ant-collapse-header,
      .f__header {
        background: rgba(114, 192, 44, 0.1);
        color: #72c02c;
      }
      .f__header {
        background: #e5eee2;
        color: #72c02c;
      }
    }
    &:nth-child(2) {
      .ant-collapse-header,
      .f__header {
        background: rgba(0, 190, 214, 0.1);
        color: #00bed6 !important;
      }
      .f__header {
        background: #dbeef1;
        color: #00bed6;
      }
    }
  }
`);
