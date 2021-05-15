import React from "react";
import { Button, Space, Spin, Empty } from "antd";
import { usePriceFormat } from "../hooks";

export default function MiniCartItem({ items, isLoading }) {
  const formatter = usePriceFormat();
  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        {/* <Spin size="large" /> */}
        <Empty />
      </div>
    );
  return (
    <div>
      <Space direction="vertical" size="large">
        {items.map((item, i) => (
          <div key={i}>
            <Space size="middle" align="start" direction="horizontal">
              <img src={item.image} width={50} height={50} />
              <h4 style={{ maxWidth: 200, wordBreak: "break-word" }}>
                {item.name}
              </h4>
              <span>{formatter(item.price)}</span>
            </Space>
          </div>
        ))}
        <Button type="primary">Your Cart</Button>
      </Space>
    </div>
  );
}
