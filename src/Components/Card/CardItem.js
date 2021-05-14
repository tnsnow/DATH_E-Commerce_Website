import React from "react";
import { Card, Rate, Space } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import axios from 'axios';

const Meta = Card.Meta;

export default function CardItem({ dataProduct }) {
  console.log('dataProduct:', dataProduct);

  const { _id, name, rating, images, price, sold } = dataProduct;


  let historyDetailProduct = useHistory();
  let { idProduct } = useParams();

  console.log('idProduct:', idProduct);

  const handleLinkDetailProduct = () => {
    historyDetailProduct.push(`/home/product-detail/${_id}`);
  }

  return (
    <div onClick={handleLinkDetailProduct} className="">
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="" src={images[0]} />}
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
    </div>
  );
}
