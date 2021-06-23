import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

ProductImage.propTypes = {
  images: PropTypes.array,
};

function ProductImage({ images }) {
  // console.log({ images });
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = [];
  let slider2 = [];
  const settings = {
    // dots: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true, //
  };

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className="section-product-detail__img">
      <div className="img-list-child">
        <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
          {images
            ? images.map((img, index) => (
                <div>
                  <img src={img} alt={index} />
                </div>
              ))
            : null}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2 = slider)}
          slidesToShow={3}
          arrows={false}
          centerMode={true}
          swipeToSlide={true}
          focusOnSelect={true}
          rows={1}
        >
          {images
            ? images.map((img, index) => (
                <div className="img-list-child__item">
                  <img src={img} alt={index + 1 + img} />
                </div>
              ))
            : null}
        </Slider>
      </div>
      {/* <div className="img-list-child">
        <Slider {...settings}>
          {images
            ? images.map((image, i) => (
                <div className="img-list-child__item">
                  <img src={image} alt={i} />
                </div>
              ))
            : null}
        </Slider>
      </div> */}
    </div>
  );
}

export default ProductImage;
