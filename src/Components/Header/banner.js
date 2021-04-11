import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from "../../assets/images/background_image/landscape.jpg";



function Banner(props) {
    const settingSlick = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (

        <div id="banner" className="section-banner" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-banner__item section-banner__left">
                            <Slider {...settingSlick}>
                                <div className="slider-item">
                                    <a href="/">
                                        <img src={bannerImg} className="img-fluid" alt="Banner 1" />
                                    </a>
                                </div>
                                <div className="slider-item">
                                    <a href="/">
                                        <img src={bannerImg} className="img-fluid" alt="Banner 1" />
                                    </a>
                                </div>
                                <div className="slider-item">
                                    <a href="/">
                                        <img src={bannerImg} className="img-fluid" alt="Banner 1" />
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-banner__item section-banner__right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;