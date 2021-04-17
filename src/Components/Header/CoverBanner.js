import React from "react";
// import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from "../../assets/images/background_image/landscape.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function CoverBanner(props) {
  const settingSlick = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div id="banner" className="section-banner" >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-banner__item section-banner__left">
              <Slider className="banner-left" {...settingSlick}>
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
            <div className="section-banner__item section-banner__right">
              <div className="banner-right">
                <div className="banner-right__item banner-right__top">
                  <a href="/">
                    <img src={bannerImg} className="img-fluid" />
                  </a>
                </div>
                <div className="banner-right__item banner-right__bottom">
                  <a href="/">
                    <img src={bannerImg} className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverBanner;
