import React from "react";
import { Skeleton, Switch, Card, Avatar, Rate, Button, Space } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const Meta = Card.Meta;

export default function CardItem({ isLoading, product }) {
  const { name, description, rating, like, images, price, sold } = product;
  return (
    <div>
      <Card
        style={{ width: "100%", padding: "1rem" }}
        loading={isLoading}
        hoverable={true}
        cover={<img alt="image-product" src={images} />}
      >
        <Meta
          title={price + " vnd"}
          description={
            <div>
              <h5>{name}</h5>
              <div className="mt-3 mb-3">
                <Rate
                  style={{ fontSize: "1.25rem" }}
                  disabled
                  defaultValue={rating}
                />
                <span>{rating}</span>
              </div>
              <div>
                <Space size="middle">
                  <Button size="large" type="primary">
                    Buy
                  </Button>
                  <Button
                    className="d-flex justify-content-center align-items-center"
                    type="danger"
                    size="large"
                    icon={<HeartOutlined />}
                  />
                </Space>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
}
