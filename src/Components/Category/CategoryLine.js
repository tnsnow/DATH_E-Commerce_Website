import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import iconCategory from '../../assets/images/logo/logo_cartya_black.png';


CategoryLine.propTypes = {};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    )
}
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function CategoryLine(props) {
    const settings = {
        slidesToShow: 1,
        slidesPerRow: 4,
        infinite: true,
        // rows: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <div className="section-categoryLine">
            <div className="container">
                <div className="section-categoryLine__title">
                    <h1>Danh mục sản phẩm</h1>
                </div>

                <div className="section-categoryLine__content">
                    <Slider {...settings}>
                        <div className="slide-item">
                            <a href="#">
                                <div className="slide-item__icon">
                                    <img className="img-fluid" src={iconCategory} alt="" />
                                </div>
                                <div className="slide-item__desc">Thời trang nam</div>
                            </a>
                        </div>
                        <div className="slide-item">
                            <a href="#">
                                <div className="slide-item__icon">
                                    <img className="img-fluid" src={iconCategory} alt="" />
                                </div>
                                <div className="slide-item__desc">Thời trang nữ</div>
                            </a>
                        </div>
                        <div className="slide-item">
                            <a href="#">
                                <div className="slide-item__icon">
                                    <img className="img-fluid" src={iconCategory} alt="" />
                                </div>
                                <div className="slide-item__desc">Giày thể thao</div>
                            </a>
                        </div>
                        <div className="slide-item">
                            <a href="#">
                                <div className="slide-item__icon">
                                    <img className="img-fluid" src={iconCategory} alt="" />
                                </div>
                                <div className="slide-item__desc">Đồng hồ</div>
                            </a>
                        </div>
                        <div className="slide-item">
                            <a href="#">
                                <div className="slide-item__icon">
                                    <img className="img-fluid" src={iconCategory} alt="" />
                                </div>
                                <div className="slide-item__desc">Phụ kiện</div>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default CategoryLine;