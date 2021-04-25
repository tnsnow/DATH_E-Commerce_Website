import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import iconCategory from '../../assets/images/icon/shop-icon.jpg';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

CategoryLine.propTypes = {};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <RightOutlined />
        </div>
    );
}
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <LeftOutlined />
        </div>
    );
}

function CategoryLine(props) {
    const settings = {
        slidesPerRow: 6,
        slidesToShow: 1,
        infinite: true,
        // rows: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <div className="section-categoryLine">
            <div className="container">
                <div className="categoryLine">
                    <div className="categoryLine__title">
                        <h1>Danh mục sản phẩm</h1>
                    </div>

                    <div className="categoryLine__content">
                        <Slider {...settings}>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Thời trang nam</div>
                                    </div>
                                </a>
                            </div>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Thời trang nữ</div>
                                    </div>
                                </a>
                            </div>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Giày thể thao</div>
                                    </div>
                                </a>
                            </div>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Phụ kiện</div>
                                    </div>
                                </a>
                            </div>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Đồng hồ</div>
                                    </div>
                                </a>
                            </div>
                            <div className="slide-item">
                                <a href="#">
                                    <div className="slide-item__content">
                                        <div className="slide-item__content--icon">
                                            <img className="img-fluid" src={iconCategory} alt="" />
                                        </div>
                                        <div className="slide-item__content--decs">Nước hoa</div>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryLine;