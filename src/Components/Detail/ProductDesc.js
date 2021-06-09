import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, InputNumber, Rate, Space } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { useNotification, usePriceFormat } from "../../hooks";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

ProductDesc.propTypes = {
  data: PropTypes.object,
};

function ProductDesc({ data }) {
  const { _id, name, sold, available, rating, price, desc, brand } = data;
  const [cookies] = useCookies(["accessToken"]);
  const [isLogin, setIsLogin] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();
  const formatter = usePriceFormat();
  const notificate = useNotification();
  const mutateAddToCart = async ({ id }) => {
    return axios
      .post(
        `http://localhost:4001/products/add-to-cart/${id}`,
        {
          quantity,
          amount: Number(price),
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.response.data;
        }
      });
  };
  const { isLoading, mutate, error, isError, isFetching } = useMutation(mutateAddToCart, {
    onSuccess: (data) => {
      if (data.status == 200 && data.data.success) {
        notificate("success", "Added Success ✅");
      }
    },
  });
  const handleAddToCart = () => {
    // console.log(data);
    if (isLogin) {
      mutate({ id: _id });
    } else {
      history.push("/login");
    }
  };
  const handleBuy = () => {
    mutate({ id: _id }, {
      onSuccess : () => {
        history.push("/home/cart");
      }
    });
  };
  if (isError) {
    notificate("error", error.response.data.error);
  }
  useEffect(() => {
    cookies.accessToken !== "undefined" ? setIsLogin(true) : setIsLogin(false);
  }, [cookies]);
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
          <div className="content-rating__item--content content-rating__item--numb">
            {available}
          </div>
          <div className="content-rating__item--content content-rating__item--text">
            Số lượng còn
          </div>
        </div>
      </div>

      <div className="content-price" style={{ margin: 15 }}>
        <h1 style={{ fontSize: 32 }}>{formatter(price)}</h1>
      </div>
      <div style={{ margin: 10, maxWidth: 300 }}>
        <Space size="large">
          <h3>So luong : </h3>
          <InputNumber
            defaultValue={1}
            onStep={(value) => setQuantity(value)}
            min={1}
            max={99}
            size="large"
          />
        </Space>
      </div>
      <div className="content-btn">
        <Space>
          <Button onClick={handleBuy} size="large" type="primary" danger>
            Mua ngay
          </Button>
          <Button
            size="large"
            onClick={handleAddToCart}
            type="ghost"
            danger
            loading={isLoading ||isFetching}
            icon={<AppstoreAddOutlined />}
          >
            Thêm vào giỏ hàng
          </Button>
        </Space>
      </div>
      {/* <div className="content-desc">
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
      </div> */}
    </div>
  );
}

export default ProductDesc;
