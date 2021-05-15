import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Rate } from "antd";

ProductImage.propTypes = {
  images: PropTypes.array,
};

function ProductImage({ images, data }) {
  console.log({ images });

  const { name, sold, available, rating, price, desc, brand } = data;


  const settings = {
    // dots: true,
    // slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    infinite: true,
  };

  return (
    <div className="section-product-detail__left">
      <div className="section-product-detail__left--img">
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

      <div className="section-product-detail__left--rating">
        <a className="content-rating__item content-rating__star" href="#">
          <div className="content-rating__item--content content-rating__item--numb">
            {rating}
          </div>
          <div className="content-rating__item--content content-rating__item--icon">
            {<Rate defaultValue={rating} allowHalf disabled />}
          </div>
        </a>

        <div className="content-rating__item content-rating__evaluate">
          <div className="content-rating__item--content content-rating__item--numb">
            176
          </div>
          <div className="content-rating__item--content content-rating__item--text">
            Đánh giá
          </div>
        </div>

        <div className="content-rating__item content-rating__sold">
          <div className="content-rating__item--content content-rating__item--numb">
            {sold}
          </div>
          <div className="content-rating__item--content content-rating__item--text">
            Đã bán
          </div>
        </div>

        <div className="content-rating__item content-rating__warehouse">
          <div className="content-rating__item--content content-rating__item--text">
            Số lượng còn
          </div>
          <div className="content-rating__item--content content-rating__item--numb">
            {available}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
