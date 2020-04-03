import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import brand from "dan-api/dummy/brand";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import { PapperBlock, NetworkWidgetAddress } from "dan-components";
import styles from "./dashboard-jss";
import { Web3Context } from "../../provider/web3";
import styled from "styled-components";
import { memberPublic } from "../../provider/web3Public";
const AllMember = ({ classes }) => {
  const { isAdmin } = useContext(Web3Context);
  const title = brand.name + " - All Member";
  const description = brand.desc;
  const { t, i18n } = useTranslation();
  const textTran = text => {
    return i18n.exists(text) ? t(text) : text;
  };

  const [root, setRoot] = useState([]);
  useEffect(() => {
    console.log(memberPublic);
    if (memberPublic) {
      memberPublic.methods
        .getRootMembers()
        .call()
        .then(add => {
          console.log(add);
          setRoot(add);
        });
    }
  }, [memberPublic]);
  console.log("errot", root);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {isAdmin && (
        <PapperBlock
          title={textTran("network")}
          icon="ios-stats-outline"
          whiteBg
          overflowX
          desc=""
        >
          {root.map((item, index) => (
            <Wrap key={index}>
              <h5>
                Address:<span>{item}</span>
              </h5>
              <NetworkWidgetAddress address={item} />
            </Wrap>
          ))}
        </PapperBlock>
      )}
    </div>
  );
};

AllMember.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllMember);
const Wrap = styled.div`
  margin-bottom: 25px;
`;
