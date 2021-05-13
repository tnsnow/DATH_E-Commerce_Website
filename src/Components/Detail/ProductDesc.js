import React from "react";
import PropTypes from "prop-types";
import { Button, Rate } from "antd";
import { StarOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import { usePriceFormat } from "../../hooks";

ProductDesc.propTypes = {
  data: PropTypes.object,
};

function ProductDesc({ data }) {
  const { name, sold, available, rating, price, desc, brand } = data;
  const formatter = usePriceFormat();
  return (
    <div className="section-product-detail__content">
      <div className="content-title">
        <h1>{name}</h1>
      </div>

      <div className="content-rating">
        <a className="content-rating__item content-rating__star" href="#">
          <div className="content-rating__item--content content-rating__item--numb">
            {rating}
          </div>
          <div className="content-rating__item--content content-rating__item--icon">
            {/* <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined /> */}
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

      <div className="content-price">
        <h1>{formatter(price)}</h1>
      </div>

      <div className="content-desc">
        <div className="content-desc__item content-desc__description">
          <div className="content-desc__description--item content-desc__description--left">
            Mô tả sản phẩm:{" "}
          </div>
          <div className="content-desc__description--item content-desc__description--right">
            {desc}
          </div>
        </div>
        <div className="content-desc__item content-desc__product-branch">
          <div className="content-desc__description--item content-desc__product-branch--left">
            Thương hiệu:{" "}
          </div>
          <div className="content-desc__description--item content-desc__product-branch--right">
            {brand}
          </div>
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
