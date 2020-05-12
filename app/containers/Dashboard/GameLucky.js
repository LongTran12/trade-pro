import React, { useState } from 'react'
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgData from 'dan-api/images/imgData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styled from 'styled-components';
import Iframe from 'react-iframe'


const carouselData = [
    {
        title: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
        link: "http://www.youtube.com/embed/xDMP3i36naA",
        img: `http://via.placeholder.com/1050x700/AD1457/FFFFFF/`

    },
    {
        title: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
        link: "http://www.youtube.com/embed/xDMP3i36naA",
        img: "http://via.placeholder.com/1050x700/558B2F/FFFFFF/"
    },
    {
        title: 'Vestibulum bibendum nisi eget magna malesuada',
        link: "http://www.youtube.com/embed/xDMP3i36naA",
        img: `http://via.placeholder.com/1050x700/607D8B/FFFFFF/`
    },
    {
        title: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
        link: "http://www.youtube.com/embed/xDMP3i36naA",
        img: "http://via.placeholder.com/1050x700/558B2F/FFFFFF/"
    },
    {
        title: 'Vestibulum bibendum nisi eget magna malesuada',
        link: "http://www.youtube.com/embed/xDMP3i36naA",
        img: `http://via.placeholder.com/1050x700/607D8B/FFFFFF/`
    },
];
const styles = ({
    item: {
        textAlign: 'center',
        '& img': {
            margin: '10px auto'
        }
    }
});
const GameLucky = ({ classes }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        autoplay: false,
        focusOnSelect: true

    };
    const [visible, setVisible] = useState(-1)
    return (
        <Wrap className="container">
            <Slider {...settings} >
                {carouselData.map((item, index) => (
                    <>
                        <div key={index.toString()} className={classes.item} onClick={() => setVisible(index)}>
                            <img src={item.img} alt={item.title} />
                        </div>

                        {visible === index &&
                            <Column>
                                <Iframe
                                    style={{ width: "80vw", height: "100vh" }}
                                    url={item.link}
                                    width="100%"
                                    height="100%"
                                    id="myId"
                                    className="myClassname"
                                    display="initial"
                                    position="relative"
                                    frameBorder={0}
                                />
                            </Column>

                        }
                    </>
                ))}
            </Slider>
        </Wrap>
    );
}
GameLucky.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameLucky)
const Wrap = styled.div`
    /* position:relative; */
    .slick-list{
        overflow:unset;
    }
    margin-bottom:120vh;
    @media (max-width:1024px){
        margin-bottom:50vh;
    }
`

const Column = styled.div`
    width:72vw;
    height:100vh;
    position:fixed;
    left:50%;
    transform:translateX(-50%);
    background:#111;
    top:400px;
    z-index:9999;
    @media (max-width:1024px){
        top:250px;
        height:50vh;
    }
    @media (max-width:1024px){
        top:100px;
        height:30vh;
    }
`