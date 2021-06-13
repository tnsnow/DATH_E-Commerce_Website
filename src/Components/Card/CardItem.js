import React from "react";
import { Card, Rate, Space, Tag, Typography } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Paragraph from "antd/lib/typography/Paragraph";
import { usePriceFormat } from "../../hooks";

const { Text } = Typography;
const Meta = Card.Meta;

export default function CardItem({ dataProduct }) {
  console.log("dataProduct:", dataProduct);

  const { _id, name, rating, images, price, sold, like, available } =
    dataProduct;

  let historyDetailProduct = useHistory();
  const format = usePriceFormat();
  const handleLinkDetailProduct = () => {
    historyDetailProduct.push(`/home/product-detail/${_id}`);
  };

  return (
    <div onClick={handleLinkDetailProduct} className="">
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt={name} style={{ padding: 10 }} src={images[0]} />}
        actions={[
          <Space>
            <EyeOutlined className="font-16 p-2" />
          </Space>,
          <Space>
            <HeartOutlined className="font-16 p-2" />
            {like}
          </Space>,
        ]}
      >
        <Meta
          title={
            available == 0 ? <Tag color="warning">Out of stock</Tag> : null
          }
          description={
            <Space size={0} direction="vertical">
              <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                {name}
              </Paragraph>
              <Text style={{ color: "#1890ff" }} strong className="font-16">
                {format(price)}
              </Text>
              <div className="mt-2 mb-2 d-flex justify-content-between">
                <div>
                  <Space size="small">
                    <Rate
                      style={{ fontSize: "1.25rem" }}
                      disabled
                      defaultValue={rating}
                    />
                  </Space>
                </div>
                <p>Sold {sold}</p>
              </div>
            </Space>
          }
        />
      </Card>
    </div>
  );
}
