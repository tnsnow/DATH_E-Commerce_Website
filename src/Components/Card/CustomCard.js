import React from "react";
import { connectHits } from "react-instantsearch-core";

const Card = ({ hits }) => {
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <img alt={hits.name} style={{ padding: 10 }} src={hits.images[0]} />
      }
      actions={[
        <Space>
          <EyeOutlined className="font-16 p-2" />
        </Space>,
        <Space>
          <HeartOutlined className="font-16 p-2" />
          {hits.like}
        </Space>,
      ]}
    >
      <Meta
        title={
          hits.available == 0 ? <Tag color="warning">Out of stock</Tag> : null
        }
        description={
          <Space size={0} direction="vertical">
            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
              {hits.name}
            </Paragraph>
            <Text style={{ color: "#1890ff" }} strong className="font-16">
              {format(hits.price)}
            </Text>
            <div className="mt-2 mb-2 d-flex justify-content-between">
              <div>
                <Space size="small">
                  <Rate
                    style={{ fontSize: "1.25rem" }}
                    disabled
                    defaultValue={hits.rating}
                  />
                </Space>
              </div>
              <p>Sold {hits.sold}</p>
            </div>
          </Space>
        }
      />
    </Card>
  );
};

const CustomCard = connectHits(Card);
export default CustomCard;
