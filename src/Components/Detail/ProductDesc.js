import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { StarOutlined, AppstoreAddOutlined } from '@ant-design/icons'

ProductDesc.propTypes = {};

function ProductDesc(props) {
    return (
        <div className="section-product-detail__content">
            <div className="content-title">
                <h1>QUẦN ỐNG RỘNG CẠP CAO NAM NỮ -Meo4.store</h1>
            </div>

            <div className="content-rating">
                <a className="content-rating__item content-rating__star" href="#">
                    <div className="content-rating__item--content content-rating__item--numb">4.7</div>
                    <div className="content-rating__item--content content-rating__item--icon">
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                    </div>
                </a>

                <div className="content-rating__item content-rating__evaluate">
                    <div className="content-rating__item--content content-rating__item--numb">176</div>
                    <div className="content-rating__item--content content-rating__item--text">Đánh giá</div>
                </div>

                <div className="content-rating__item content-rating__sold">
                    <div className="content-rating__item--content content-rating__item--numb">399</div>
                    <div className="content-rating__item--content content-rating__item--text">Đã bán</div>
                </div>

                <div className="content-rating__item content-rating__warehouse">
                    <div className="content-rating__item--content content-rating__item--text">Số lượng còn</div>
                    <div className="content-rating__item--content content-rating__item--numb">50</div>
                </div>
            </div>

            <div className="content-price">
                <h1>155.000đ</h1>
            </div>

            <div className="content-desc">
                <div className="content-desc__item content-desc__description">
                    <div className="content-desc__description--item content-desc__description--left">Mô tả sản phẩm: </div>
                    <div className="content-desc__description--item content-desc__description--right">This is some description</div>
                </div>
                <div className="content-desc__item content-desc__product-branch">
                    <div className="content-desc__description--item content-desc__product-branch--left">Thương hiệu: </div>
                    <div className="content-desc__description--item content-desc__product-branch--right">LOL</div>
                </div>
            </div>

            <div className="content-btn">
                <Button type="dashed" danger icon={<AppstoreAddOutlined />}>
                    Thêm vào giỏ hàng
                </Button>
                <Button type="primary" danger>
                    Mua ngay
                </Button>
            </div>
        </div>
    );
}

export default ProductDesc;