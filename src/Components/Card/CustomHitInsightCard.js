import React from "react";
import { connectHitInsights } from "react-instantsearch-dom";
import { Card, Col, Rate, Space, Tag } from "antd";
import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import { useHistory } from "react-router";
import { usePriceFormat } from "../../hooks";
import Highlight from "react-instantsearch-dom/dist/cjs/widgets/Highlight";
import { currentHit } from "../../recoil/product/product";
import { useSetRecoilState } from "recoil";
function HitInsightCard({ hit, insights }) {
  // const { hit } = props;
  const setHitState = useSetRecoilState(currentHit);
  let historyDetailProduct = useHistory();
  const format = usePriceFormat();
  const handleLinkDetailProduct = () => {
    console.log({ hit });
    setHitState(hit);
    insights("clickedObjectIDsAfterSearch", {
      eventName: "Product Clicked",
      index: "dev_cartya",
    });
    historyDetailProduct.push(`/home/product-detail/${hit.id}`);
  };
  return (
    <Col style={{ padding: "0 5px" }}>
      <div className="content-item">
        <div onClick={handleLinkDetailProduct} className="">
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt={hit.name}
                style={{
                  padding: 10,
                }}
                src={hit.images[0]}
              />
            }
            actions={[
              <Space>
                <EyeOutlined className="font-16 p-2" />
              </Space>,
              <Space>
                <HeartOutlined className="font-16 p-2" />
                {hit.like}
              </Space>,
            ]}
          >
            <Meta
              title={
                hit.available == 0 ? (
                  <Tag color="warning">Out of stock</Tag>
                ) : null
              }
              description={
                <Space size={0} style={{ width: "100%" }} direction="vertical">
                  <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                    <Highlight attribute="name" tagName="mark" hit={hit} />
                  </Paragraph>
                  <Text style={{ color: "#1890ff" }} strong className="font-16">
                    {format(hit.price)}
                  </Text>
                  <div className="mt-2 mb-2 d-flex justify-content-between">
                    <div>
                      <Space size="small">
                        <Rate
                          style={{ fontSize: "1.25rem" }}
                          disabled
                          defaultValue={hit.rating}
                        />
                      </Space>
                    </div>
                    <p>Sold {hit.sold}</p>
                  </div>
                </Space>
              }
            />
          </Card>
        </div>
      </div>
    </Col>
  );
}
const CustomHitInsightCard = connectHitInsights(window.aa)(HitInsightCard);
export default CustomHitInsightCard;
