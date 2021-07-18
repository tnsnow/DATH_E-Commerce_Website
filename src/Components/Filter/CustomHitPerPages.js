import { Select } from "antd";
import React from "react";
import { connectHitsPerPage } from "react-instantsearch-dom";

function HitPerPages({ items, currentRefinement, refine }) {
  const handleSelect = (value) => {
    console.log(value);
    refine(value);
  };
  return (
    <>
      <Select
        defaultValue={currentRefinement}
        onSelect={handleSelect}
        style={{ margin: "0 10px", width: 200 }}
      >
        {items.map((item) => (
          <Select.Option value={item.value}>{item.label}</Select.Option>
        ))}
      </Select>
    </>
  );
}

const CustomHitPerPages = connectHitsPerPage(HitPerPages);
export default CustomHitPerPages;
