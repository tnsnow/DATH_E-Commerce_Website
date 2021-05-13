import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";

Product.propTypes = {
  data: PropTypes.object,
};

function Product({ data }) {
  const { images } = data;
  return (
    <div className="section-product-detail">
      <Row gutter={24}>
        <Col span="10">
          <ProductImage images={images} />
        </Col>
        <Col span="14">
          <ProductDesc data={data} />
        </Col>
      </Row>
    </div>
  );
}

export default Product;
