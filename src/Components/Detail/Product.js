import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";

Product.propTypes = {};

function Product(props) {
    return (
        <div className="section-product-detail">
            <Row gutter={24}>
                <Col span="10">
                    <ProductImage />
                </Col>
                <Col span="14">
                    <ProductDesc />
                </Col>
            </Row>

        </div>
    );
}

export default Product;