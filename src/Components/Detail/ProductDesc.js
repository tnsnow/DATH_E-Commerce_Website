import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, InputNumber, Rate, Space, Typography } from "antd";
import {
  AppstoreAddOutlined,
  CopyOutlined,
  FacebookOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useNotification, usePriceFormat } from "../../hooks";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentHit } from "recoil/product/product";
import { editProduct } from "./apis";

const { Text, Link } = Typography;
ProductDesc.propTypes = {
  data: PropTypes.object,
};

function ProductDesc({ data }) {
  const { _id, name, sold, available, rating, price, like, brand } = data;
  const hit = useRecoilValue(currentHit);
  const [cookies] = useCookies(["accessToken"]);
  const [isLogin, setIsLogin] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();
  const formatter = usePriceFormat();
  const notificate = useNotification();
  const sendEvent = (eventName) => {
    window.aa("convertedObjectIDsAfterSearch", {
      index: "dev_cartya",
      eventName,
      queryID: hit.__queryID,
      objectIDs: [hit.objectID],
    });
  };
  const mutateAddToCart = async ({ id }) => {
    return axios
      .post(
        `${process.env.REACT_APP_URL}/products/add-to-cart/${id}`,
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
  const { isLoading, mutate, error, isError, isFetching } = useMutation(
    mutateAddToCart,
    {
      onSuccess: (data) => {
        if (data.status == 200 && data.data.success) {
          notificate("success", "Added Success ✅");
        }
      },
    }
  );

  const handleAddToCart = () => {
    // console.log(data);
    if (isLogin) {
      mutate({ id: _id });
      sendEvent("Product add to cart");
    } else {
      history.push("/login");
    }
  };
  const handleBuy = () => {
    sendEvent("Product Buy");
    history.push("/home/cart");
    mutate({ id: _id });
  };
  const handleLike = () => {};
  if (isError) {
    notificate("error", error.response.data.error);
  }
  useEffect(() => {
    cookies.accessToken !== "undefined" ? setIsLogin(true) : setIsLogin(false);
  }, [cookies]);
  return (
    <div className="section-product-detail__content">
      <Space size="large" direction="vertical">
        <div className="content-title">
          <h1>{name}</h1>
          <div className="content-rating">
            <Space size="small" direction="vertical">
              <Rate defaultValue={rating} allowHalf disabled />
              <Space
                size="large"
                style={{ marginTop: 5, fontSize: 16 }}
                split={"|"}
              >
                <Link target="_blank">100 Reviews</Link>
                <Text>{available} Available</Text>
                <Text>{sold} Sold</Text>
                <Text>From : {brand}</Text>
              </Space>
            </Space>
          </div>
        </div>

        <div className="content-price">
          <h1 style={{ fontSize: 32 }}>{formatter(price)}</h1>
        </div>
        <div style={{ maxWidth: 300 }}>
          <Space direction="vertical" size="middle">
            <Space>
              <h3>Quantity : </h3>
              <InputNumber
                style={{ width: 100 }}
                defaultValue={1}
                onStep={(value) => setQuantity(value)}
                min={1}
                max={99}
                size="large"
              />
              <Text style={{ fontSize: 16 }} type="secondary">
                {available} available
              </Text>
            </Space>

            <Space size="middle">
              <Button
                disabled={available == 0}
                onClick={handleBuy}
                size="large"
                type="primary"
                danger
              >
                Buy now
              </Button>
              <Button
                className={"d-flex align-items-center"}
                size="large"
                onClick={handleAddToCart}
                type="default"
                danger
                disabled={available == 0}
                loading={isLoading || isFetching}
                icon={<AppstoreAddOutlined />}
              >
                Add to cart
              </Button>
            </Space>
          </Space>
        </div>
        <hr />
        <Space split={"|"} size={100}>
          <Space>
            <Text style={{ fontSize: 16 }} type="secondary">
              Everyone like this : {like}
            </Text>
            <HeartOutlined style={{ fontSize: 24 }} onClick={handleLike} />
          </Space>
          <Space>
            <Text strong style={{ fontSize: 16 }}>
              Share :
            </Text>
            <FacebookOutlined style={{ fontSize: 24 }} />
            <CopyOutlined style={{ fontSize: 24 }} />
          </Space>
        </Space>
      </Space>
    </div>
  );
}

export default ProductDesc;
