import { Select } from "antd";
import React from "react";
import { connectSortBy } from "react-instantsearch-core";
const { Option } = Select;
const SortDropdown = ({ items, refine, defaultRefinement }) => {
  const handleSelect = (value) => {
    console.log(value);
    refine(value);
  };
  return (
    <div>
      <Select
        defaultValue={defaultRefinement}
        onSelect={handleSelect}
        style={{ margin: "0 10px", width: 200 }}
      >
        {items.map((item) => (
          <Option value={item.value}>{item.label}</Option>
        ))}
      </Select>
    </div>
  );
};

const CustomSortDropdown = connectSortBy(SortDropdown);
export default CustomSortDropdown;
