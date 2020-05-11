import React, { useState } from 'react'
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgData from 'dan-api/images/imgData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styled from 'styled-components';


const carouselData = [
    {
        title: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
        link: "https://www.youtube.com/?gl=VN",
        img: `http://via.placeholder.com/1050x700/AD1457/FFFFFF/`

    },
    {
        title: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
        link: "https://www.w3schools.com",
        img: "http://via.placeholder.com/1050x700/558B2F/FFFFFF/"
    },
    {
        title: 'Vestibulum bibendum nisi eget magna malesuada',
        link: "https://www.w3schools.com",
        img: `http://via.placeholder.com/1050x700/607D8B/FFFFFF/`
    },
    {
        title: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
        link: "https://www.w3schools.com",
        img: "http://via.placeholder.com/1050x700/558B2F/FFFFFF/"
    },
    {
        title: 'Vestibulum bibendum nisi eget magna malesuada',
        link: "https://www.w3schools.com",
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
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const [visible, setVisible] = useState(-1)
    return (
        <Wrap className="container">
            <Slider {...settings}>
                {carouselData.map((item, index) => (
                    <>
                        <div key={index.toString()} className={classes.item} onClick={() => setVisible(index)}>
                            <img src={item.img} alt={item.title} />
                        </div>

                        {visible === index &&
                            <Row>
                                <iframe style={{ width: "80vw", height: "100vh" }} src={item.link}></iframe>
                            </Row>
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
`
const Row = styled.div`
    width:80vw;
    height:100vh;
    position:fixed;
    left:50%;
    transform:translateX(-50%);
    background:#111;
    top:300px;
    z-index:9999;
`