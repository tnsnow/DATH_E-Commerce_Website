import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

ProductImage.propTypes = {
  images: PropTypes.array,
};

function ProductImage({ images }) {
  console.log({ images });
  const settings = {
    // dots: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true, //
    infinite: true,
  };

  return (
    <div className="section-product-detail__img">
      {/* <div className="img-active">
        <img src="../logo512.png" />
      </div> */}

      <div className="img-list-child">
        <Slider {...settings}>
          {images
            ? images.map((image, i) => (
                <div className="img-list-child__item">
                  <img src={image} alt={i} />
                </div>
              ))
            : null}
        </Slider>
      </div>
    </div>
  );
}

export default ProductImage;
