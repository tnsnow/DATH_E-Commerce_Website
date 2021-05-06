import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

ProductImage.propTypes = {};

function ProductImage(props) {
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
    }

    return (
        <div className="section-product-detail__img">
            <div className="img-active">
                <img src="../logo512.png" />
            </div>

            <div className="img-list-child">
                <Slider {...settings}>
                    <div className="img-list-child__item">
                        <img src="../logo192.png" />
                    </div>
                    <div className="img-list-child__item">
                        <img src="../logo192.png" />
                    </div>
                    <div className="img-list-child__item">
                        <img src="../logo192.png" />
                    </div>
                    <div className="img-list-child__item">
                        <img src="../logo192.png" />
                    </div>
                    <div className="img-list-child__item">
                        <img src="../logo192.png" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ProductImage;