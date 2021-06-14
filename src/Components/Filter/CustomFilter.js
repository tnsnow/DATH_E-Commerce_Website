import { Card, Checkbox, Space, Tag } from "antd";
import React from "react";
import { connectHierarchicalMenu } from "react-instantsearch-core";

const Filter = ({ items, refine }) => {
  return (
    <Space direction="vertical">
      {items.map((item) => (
        <Checkbox
          checked={item.isRefined}
          onChange={() => {
            refine(item.value);
          }}
          key={item.label}
          value={item.label}
        >
          {item.label}{" "}
          <Tag color={"blue"}>
            <p>{item.count}</p>
          </Tag>
        </Checkbox>
      ))}
    </Space>
  );
};
const CustomFilter = connectHierarchicalMenu(Filter);
export default CustomFilter;
