import { Button, Image, List, Space } from "antd";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { usePriceFormat } from "../../hooks";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import { TypeTag } from "./components/TypeTag";
import IconText from "./components/IconText";
import ButtonCustom from "./components/ButtonCustom";

const { Item } = List;
export default function CustomListItem({ data, handleReview }) {
  const priceFormat = usePriceFormat();
  // console.log("Data Item ", dauantity , order , orderStatus, isCheckout , product})
  const { _id, amount, quantity, order, orderStatus, isCheckout, product } =
    data;
  return (
    <Item
      style={{ padding: "5px 20px" }}
      className={"d-flex align-items-center"}
      // style={{padding : 10}}
      actions={[
        <IconText
          icon={
            <LikeOutlined
              className={"d-flex align-items-end"}
              style={{ fontSize: 20 }}
            />
          }
          text={product.like}
        />,
        <IconText
          icon={
            <StarOutlined
              className={"d-flex align-items-end"}
              style={{ fontSize: 20 }}
            />
          }
          text={product.rating}
        />,
        <ButtonCustom
          type="primary"
          href={`/home/product-detail/${product._id}`}
          size="middle"
          text={"Buy Again"}
        />,
        <ButtonCustom
          type="ghost"
          // href={`/home/shop/${product.seller._id}`}
          onClick={() => handleReview(product._id)}
          size="middle"
          text={"Review"}
        />,
      ]}
      extra={
        <Space direction={"vertical"} style={{ padding: "5px 0" }} size={0}>
          <p style={{ fontSize: 14, fontWeight: "normal", color: "gray" }}>
            {moment(product.createdAt).format("DD-MM-YYYY")}
          </p>
          <Image width={80} src={product.images[0]} />
          <TypeTag className={"d-flex align-items-center"} type={orderStatus} />
        </Space>
      }
    >
      <Item.Meta
        title={<>{product.name}</>}
        description={
          <>
            <div>
              {priceFormat(product.price)} x{quantity}
            </div>
            <div>
              Total Amount :{" "}
              {
                <Text style={{ color: "#1890ff" }} strong>
                  {priceFormat(amount)}
                </Text>
              }{" "}
            </div>
          </>
        }
      />
    </Item>
  );
}
