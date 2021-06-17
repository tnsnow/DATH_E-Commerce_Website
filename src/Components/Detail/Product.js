import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Space } from "antd";

<<<<<<< HEAD
import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";
import Shop from "../Shop/Shop";
import ProductInfo from "./ProductInfo";
=======
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
>>>>>>> 84ac07fb5aaf582e501968eb1c7729016e2a5756

Product.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

function Product({ data, isLoading }) {
  if (isLoading) return "";
  return (
<<<<<<< HEAD
    <div className="section-product-detail">
      <Space size="large" direction="vertical" style={{ width: "100%" }}>
        <Row gutter={24}>
          <Col span="10">
            <ProductImage images={data.images} />
          </Col>
          <Col span="14">
            <ProductDesc data={data} />
          </Col>
        </Row>
        <Row gutter={24}>
          <Space size="large" className="w-100" direction="vertical">
            <Shop seller={data.seller} />
            <ProductInfo data={data.desc} />
          </Space>
        </Row>{" "}
      </Space>
=======
    <div className="section-product-detail__content">
      <Row gutter={24}>
        <Col span="10">
          <ProductLeft images={images} data={data} />
        </Col>
        <Col span="14">
          <ProductRight data={data} />
        </Col>
      </Row>
>>>>>>> 84ac07fb5aaf582e501968eb1c7729016e2a5756
    </div>
  );
}

export default Product;
