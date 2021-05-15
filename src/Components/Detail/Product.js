import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

Product.propTypes = {
  data: PropTypes.object,
};

function Product({ data }) {
  const { images } = data;
  return (
    <div className="section-product-detail__content">
      <Row gutter={24}>
        <Col span="10">
          <ProductLeft images={images} data={data} />
        </Col>
        <Col span="14">
          <ProductRight data={data} />
        </Col>
      </Row>
    </div>
  );
}

export default Product;
