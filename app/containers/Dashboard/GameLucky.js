import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import imgData from "dan-api/images/imgData";
import "dan-styles/vendors/slick-carousel/slick-carousel.css";
import "dan-styles/vendors/slick-carousel/slick.css";
import "dan-styles/vendors/slick-carousel/slick-theme.css";
import styled from "styled-components";
import Iframe from "react-iframe";
import imgBinance from "dan-images/bo/BinanceFuture1.png";
import imgExness from "dan-images/bo/exness1.png";
import imgNaga from "dan-images/bo/naga1.png";
import imgWefinex from "dan-images/bo/wefinex1.png";
import axios from "axios";

const image = {
  imgExness,
  imgWefinex,
  imgBinance,
  imgNaga,
  youtube:
    "https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/naga.png",
};
const styles = {
  item: {
    textAlign: "center",
    "& img": {
      // margin: "10px auto",
    },
  },
};
const GameLucky = ({ classes }) => {
  const [link, setLink] = useState("");

  const [carouselData, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/otfund/disk/master/ref.json")
      .then((result) => {
        setData(result.data);
      });
  }, []);
  return (
    <Wrap className="container">
      <div className="sort">
        {carouselData.map((item, index) => (
          <div
            key={index.toString()}
            className={`${classes.item} item-${index}`}
            onClick={() => {
              if (item.blank) {
                window.location.href = item.link;
              } else {
                setLink(item.link);
              }
            }}
          >
            {item.youtube ? (
              <div className="video">
                <Iframe
                  url={item.link}
                  frameBorder={0}
                  onClick={() => {
                    setLink(item.link);
                  }}
                />
              </div>
            ) : (
              <img src={image[item.img]} alt={item.title} />
            )}
          </div>
        ))}
      </div>
      {!(link === "") && (
        <Row>
          <Column>
            <Iframe url={link} />
          </Column>
        </Row>
      )}
    </Wrap>
  );
};

GameLucky.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameLucky);
const Wrap = styled.div`
  .video {
    border: 2px solid #fff;
    margin-top: 0;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
  img {
    border: 2px solid #fff;
  }
  .sort {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    .item-0,
    .item-1 {
      grid-row: 1;
    }
    .item-2 {
      grid-area: 1/2/3;
    }
  }
`;

const Row = styled.div`
  position: relative;
  margin-top: 20px;
`;
const Column = styled.div`
  width: 100%;
  height: 100vh;
  /* border:2px solid #fff; */
  margin-top: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .close {
    position: absolute;
    right: 0;
    top: -50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #fff;
    color: #111;
    border-radius: 999px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }
`;
