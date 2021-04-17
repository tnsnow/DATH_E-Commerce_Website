import React, { useState } from "react";
import { Button, Space, Rate } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export default function CardItemInCart({ product }) {
  const [qty, setQty] = useState(0);
  const { name, description, rating, images, price } = product;
  return (
    <div className="session-cart ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="left-cart centered">
            <Space size="small" direction="vertical">
              <div className="prod-img ">
                <img className="img-fluid" src={images} alt="image" />
              </div>
            </Space>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-12 ">
          <Space size="middle" direction="vertical">
            <h4>{name}</h4>
            <Space size="small" direction="vertical">
              <div className="button">
                <Space size="large">
                  <Button
                    className="centered"
                    type="danger"
                    ghost
                    onClick={() => setQty(qty - 1)}
                    icon={<MinusOutlined />}
                    size="small"
                  />
                  <h3>{qty < 0 ? "0" : qty}</h3>
                  <Button
                    className="centered"
                    type="primary"
                    ghost
                    onClick={() => setQty(qty + 1)}
                    icon={<PlusOutlined />}
                    size="small"
                  />
                </Space>
              </div>
              <Space
                className="justify-content-between"
                style={{ width: "100%" }}
              >
                <Rate
                  style={{ fontSize: "1.5rem" }}
                  allowHalf
                  disabled
                  defaultValue={rating}
                />
                <h2>{price}</h2>
              </Space>
              <p>{description}</p>
            </Space>
            <Space size="large" direction="horizontal">
              <Button type="primary">Remove</Button>
              <Button>Back</Button>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  );
}
