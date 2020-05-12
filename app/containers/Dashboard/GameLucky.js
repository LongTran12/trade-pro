import React, { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import imgData from "dan-api/images/imgData";
import "dan-styles/vendors/slick-carousel/slick-carousel.css";
import "dan-styles/vendors/slick-carousel/slick.css";
import "dan-styles/vendors/slick-carousel/slick-theme.css";
import styled from "styled-components";
import Iframe from "react-iframe";

const carouselData = [
  {
    title: "Wefinex",
    link: "https://wefinex.net/reg?r=4ADE545",
    img: `https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/wfn.png`,
  },
  // {
  //   title: "NagaTrade",
  //   link: "https://trade.nagatrade.com/authorize/register?ref=5ea284d2a2170",
  //   img: "https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/naga.png",
  // },
  {
    title: "Youtube",
    youtube: true,
    link: "https://www.youtube.com/embed/Zmh4oRhRh08",
    img: "https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/naga.png",
  },
  {
    title: "Wefinex",
    link: "https://wefinex.net/reg?r=4ADE545",
    img: `https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/wfn.png`,
  },
  // {
  //   title: "NagaTrade",
  //   link: "https://trade.nagatrade.com/authorize/register?ref=5ea284d2a2170",
  //   img: "https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/naga.png",
  // },
  {
    title: "Youtube",
    youtube: true,
    link: "https://www.youtube.com/embed/Zmh4oRhRh08",
    img: "https://s3-ap-southeast-1.amazonaws.com/ex.otfund.io/static/naga.png",
  },
];
const styles = {
  item: {
    textAlign: "center",
    "& img": {
      margin: "10px auto",
    },
  },
};
const GameLucky = ({ classes }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    autoplay: false,
    focusOnSelect: true,
  };
  const [link, setLink] = useState("");
  return (
    <Wrap className="container">
      <Slider {...settings}>
        {carouselData.map((item, index) => {
          return (
            <>
              <div
                key={index.toString()}
                className={classes.item}
                onClick={() => setLink(item.link)}
              >
                {item.youtube ? (
                  <div className="video">
                    <Iframe
                      style={{ width: "100%", height: "100%" }}
                      url={item.link}
                      width="100%"
                      height="100%"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      frameBorder={0}
                      onClick={() => {
                        setLink(item.link);
                      }}
                    />
                  </div>
                ) : (
                  <img src={item.img} alt={item.title} />
                )}
              </div>
            </>
          );
        })}
      </Slider>
      {!(link === "") && (
        <Row>
          <Column>
            <Iframe
              url={link}
              width="100%"
              height="100%"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              frameBorder={0}
            />
            <div className="close" onClick={() => setLink("")}>
              X
            </div>
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
    margin-top: 10px;
    iframe {
      height: 308px;
      @media (max-width: 1280px) {
        height: 188px;
      }
      @media (max-width: 1024px) {
        height: 82px;
      }
      @media (max-width: 991px) {
        height: 146px;
      }
      @media (max-width: 480px) {
        height: 82px;
      }
    }
  }
`;

const Row = styled.div`
  position: relative;
  margin-top: 70px;
`;
const Column = styled.div`
  width: 100%;
  height: 100vh;
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
