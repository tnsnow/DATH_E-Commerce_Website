import React from "react";
import { Card, Rate, Space } from "antd";

const Meta = Card.Meta;

export default function CardItem({ dataProduct }) {
  const { name, rating, images, price, sold } = dataProduct;
  console.log('product cart:', dataProduct);
  return (
    <a href="#" className="">
      <Card
<<<<<<< HEAD
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="" src={images[0]} />}
=======
        style={{ width: 200, padding: "0.25rem", margin: "0.5rem" }}
        loading={isLoading}
        hoverable={true}
        cover={isLoading ? "" : <img alt="image-product" src={images[0]} />}
>>>>>>> ken
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
                <div>
                  <Space size="middle">
                    <Rate
                      style={{ fontSize: "1.25rem" }}
                      disabled
                      defaultValue={rating}
                    />
                    <p>{rating}</p>
                  </Space>
                </div>
                <p>Sold {sold}</p>
              </div>
            </div>
          }
        />
      </Card>
    </a>
  );
}
