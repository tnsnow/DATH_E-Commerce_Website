import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from 'react-query';
import axios from "axios";

import bannerImg from '../../assets/images/background_image/bg-01.jpg';

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

function fetchBanner() {
  return axios.get('http://localhost:4001/products');
}

function CoverBanner(props) {
  const settingSlick = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div id="banner" className="section-banner" >
      <Slider className="content" {...settingSlick}>
        <div className="slider-item">
          <a href="/">
            <img class="img-fluid" src={bannerImg} alt="Banner 1" />
          </a>
        </div>
        <div className="slider-item">
          <a href="/">
            <img class="img-fluid" src={bannerImg} alt="Banner 1" />
          </a>
        </div>
        <div className="slider-item">
          <a href="/">
            <img class="img-fluid" src={bannerImg} alt="Banner 1" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default CoverBanner;
