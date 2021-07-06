import { Col, Row, Space } from "antd";
import PropTypes from "prop-types";
import React from "react";
import {
  ExperimentalConfigureRelatedItems,
  Hits,
  Index,
} from "react-instantsearch-dom";
import { useRecoilValue } from "recoil";
import { currentHit } from "../../recoil/product/product";
import CustomHitCart from "../Card/CustomHitCard";
import Shop from "../Shop/Shop";
import CustomTitle from "./components/CustomTitle";
import ProductDesc from "./ProductDesc";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
Product.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

function Product({ data, isLoading }) {
  const currentProduct = useRecoilValue(currentHit);
  if (isLoading) return "";
  return (
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
        <Row gutter={24}>
          <Col span={16} style={{ padding: "10px 5px" }}>
            <CustomTitle text={"Related Products"} />
            <div>
              <Index indexName="most_buy">
                <ExperimentalConfigureRelatedItems
                  hit={currentProduct}
                  matchingPatterns={{
                    "seller._id" : {score : 1},
                    categories: { score: 2},
                    brand: { score: 3 },
                  }}
                />
                <Hits hitComponent={CustomHitCart} />
              </Index>
            </div>
          </Col>
          <Col span={8} style={{ padding: 10 }}>
            <CustomTitle text={"Categories"} />
            <div className="content-categories-2">
              <div className="title">
                <h3>Technologies</h3>
                <p>Show more</p>
              </div>
            </div>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default Product;
