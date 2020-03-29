/* eslint-disable */
import React, { useContext, useState, useEffect, memo } from "react";
import { web3Public, contractPublic } from "../../provider/web3Public";
import { config } from "../../config";
import { Web3Context } from "../../provider/web3";
import NetWorkWidgetTree from "./NetworkWidgetTree";
import styled from "styled-components";
import BigNumber from "bignumber.js";

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
      let currentSales = await contractPublic.methods
        .getCurrentSales(memberInfo.refs)
        .call();
      let refs = [];
      let userInfo = {};
      await Promise.all(
        memberInfo.refs.map(async item => {
          console.log(item);
          return (userInfo[item] = await member.methods
            .infoMember(item)
            .call());
        })
      );
      for (let i = 0; i < memberInfo.refs.length; i++) {
        //TODO
        let totalInvest = 0;
        // let totalInvest = await contractPublic.methods
        //   .getMemberActiveStacking(memberInfo.refs[i])
        //   .call();
        let totalSales = currentSales[i];
        let agencyInfo = {
          totalInvest,
          totalSales
        };
        refs.push({
          name: memberInfo.refs[i],
          title: (
            <div className="ref_title">
              <div className="ref_name">
                <span className="level__ref">F1</span>
                <span className="address__ref">
                  {userInfo[memberInfo.refs[i]] &&
                  userInfo[memberInfo.refs[i]].user
                    ? userInfo[memberInfo.refs[i]].user +
                      " " +
                      userInfo[memberInfo.refs[i]].phone
                    : memberInfo.refs[i]}
                </span>
              </div>
              <div className="ref_stat">
                <span className="hidden-mobile">|</span>
                <span className="ref_commission">
                  Doanh số:{" "}
                  <span>
                    {new BigNumber(agencyInfo.totalSales)
                      .dividedBy(10 ** 18)
                      .toString()}
                  </span>
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
    let currentSales = await contractPublic.methods
      .getCurrentSales(memberInfo.refs)
      .call();
    let userInfo = {};
    await Promise.all(
      memberInfo.refs.map(async item => {
        return (userInfo[item] = await member.methods.infoMember(item).call());
      })
    );
    console.log("currentSales", memberInfo.refs, currentSales);
    treeNode.props.dataRef.children = [];
    for (let i = 0; i < memberInfo.refs.length; i++) {
      //TODO
      let totalInvest = 0;
      // let totalInvest = await contractPublic.methods
      //   .getMemberActiveStacking(memberInfo.refs[i])
      //   .call();
      let totalSales = currentSales[i];
      let agencyInfo = {
        totalInvest,
        totalSales
      };
      treeNode.props.dataRef.children.push({
        name: memberInfo.refs[i],
        title: (
          <div className="ref_title">
            <div className="ref_name">
              <span className="level__ref">
                F{treeNode.props.eventKey.replace(/[^-]/g, "").length + 2}
              </span>
              <span className="address__ref">
                {userInfo[memberInfo.refs[i]] &&
                userInfo[memberInfo.refs[i]].user
                  ? userInfo[memberInfo.refs[i]].user +
                    " " +
                    userInfo[memberInfo.refs[i]].phone
                  : memberInfo.refs[i]}
              </span>
            </div>
            <div className="ref_stat">
              <span className="hidden-mobile">|</span>
              <span className="ref_commission">
                Doanh số:{" "}
                <span>
                  {new BigNumber(agencyInfo.totalSales)
                    .dividedBy(10 ** 18)
                    .toString()}
                </span>
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
      background: #3d7cb3;
      color: #fff;
      :hover {
        background: #3d7cb3;
      }
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
        i {
          font-size: 1.2em !important;
        }
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
              & > ul {
                & > li {
                  & > .ant-tree-node-content-wrapper {
                    background-color: rgb(3, 169, 244) !important;
                    .level__ref,
                    .address__ref,
                    .ref_stat span {
                      color: #fff;
                    }
                  }
                  & > ul {
                    & > li {
                      & > .ant-tree-node-content-wrapper {
                        background-color: rgb(156, 39, 176) !important;
                        .level__ref,
                        .address__ref,
                        .ref_stat span {
                          color: #fff;
                        }
                      }
                      & > ul {
                        & > li {
                          & > .ant-tree-node-content-wrapper {
                            background-color: rgb(236, 64, 122) !important;
                            .level__ref,
                            .address__ref,
                            .ref_stat span {
                              color: #fff;
                            }
                          }
                          & > ul {
                            & > li {
                              & > .ant-tree-node-content-wrapper {
                                background-color: #2196f3 !important;
                                .level__ref,
                                .address__ref,
                                .ref_stat span {
                                  color: #fff;
                                }
                              }
                            }
                          }
                          & > ul {
                            & > li {
                              & > .ant-tree-node-content-wrapper {
                                background-color: #36b2be !important;
                                .level__ref,
                                .address__ref,
                                .ref_stat span {
                                  color: #fff;
                                }
                              }
                              & > ul {
                                & > li {
                                  & > .ant-tree-node-content-wrapper {
                                    background-color: #b16cbd !important;
                                    .level__ref,
                                    .address__ref,
                                    .ref_stat span {
                                      color: #fff;
                                    }
                                  }
                                  & > ul {
                                    & > li {
                                      & > .ant-tree-node-content-wrapper {
                                        background-color: #92691a !important;
                                        .level__ref,
                                        .address__ref,
                                        .ref_stat span {
                                          color: #fff;
                                        }
                                      }
                                      & > ul {
                                        & > li {
                                          & > .ant-tree-node-content-wrapper {
                                            background-color: #0d273c !important;
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
                            }
                          }
                        }
                      }
                    }
                  }
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
