import React from "react";
import PropTypes from "prop-types";
import { Button, InputNumber } from "antd";
import { StarOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import { usePriceFormat } from "../../hooks";

ProductDesc.propTypes = {
  data: PropTypes.object,
};

function ProductDesc({ data }) {
  const { price, desc, brand } = data;

  const formatter = usePriceFormat();

  const amountProduct = (value) => {
    console.log('amountProduct: ', value);
  }

  return (
    <div className="section-product-detail__right">
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

      <div className="section-product-detail__right--amount">
        <p>Số lượng: </p>
        <InputNumber
          amountProduct={amountProduct}
          min={1}
          defaultValue={1}
        />
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
