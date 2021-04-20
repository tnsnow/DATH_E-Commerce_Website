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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  // const { isLoading, isError, data, error } = useQuery('bannerItem', fetchBanner);
  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  // if (isError) {
  //   return <p>Error...</p>
  // }

  return (
    <div id="banner" className="section-banner" >
      <div className="container">
        <div className="banner-content">
          <div className="banner-content__item banner-content__left">
            <Slider className="content-left" {...settingSlick}>
              {/* {
                data.data.data.map(bannerItem =>
                  bannerItem.images.map(i =>
                    <div className="slider-item">
                      <a href="/">
                        <img src={i} alt="Banner 1" />
                      </a>
                    </div>
                  )
                )
              } */}

              <div className="slider-item">
                <a href="/">
                  <img src={bannerImg} alt="Banner 1" />
                </a>
              </div>
              <div className="slider-item">
                <a href="/">
                  <img src={bannerImg} alt="Banner 1" />
                </a>
              </div>
              <div className="slider-item">
                <a href="/">
                  <img src={bannerImg} alt="Banner 1" />
                </a>
              </div>
            </Slider>
          </div>

          <div className="banner-content__item banner-content__right">
            <div className="content-right">
              <div className="content-right__item content-right__top">
                <a href="/">
                  <img src={bannerImg} />
                </a>
              </div>
              <div className="content-right__item content-right__bottom">
                <a href="/">
                  <img src={bannerImg} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverBanner;
