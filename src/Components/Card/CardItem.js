import React from "react";
import { Skeleton, Switch, Card, Avatar, Rate, Button, Space } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const Meta = Card.Meta;

export default function CardItem({ isLoading, product }) {
  const { name, description, rating, like, images, price, sold } = product;
  return (
    <div>
      <Card
        style={{ width: "100%", padding: "0.25rem" }}
        loading={isLoading}
        hoverable={true}
        cover={
          isLoading ? (
            <Skeleton.Image />
          ) : (
            <img alt="image-product" src={images} />
          )
        }
      >
        <Meta
          style={{ padding: "-20px" }}
          title={name}
          description={
            <div>
              <span style={{ fontSize: "2rem", color: "#1890ff" }}>
                {price + " đ"}
              </span>
              <div className="mt-2 mb-2 d-flex justify-content-between">
                <Rate
                  style={{ fontSize: "1.25rem" }}
                  disabled
                  defaultValue={rating}
                />
                <span>{rating}</span>
                <p>Sold {sold}</p>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
}
