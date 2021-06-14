import React from "react";
import PropTypes from "prop-types";
import Title from "antd/lib/typography/Title";
import { Button, Checkbox, Select, Space } from "antd";
import Text from "antd/lib/typography/Text";
import CustomSortDropdown from "./CustomSortDropdown";
const { Option } = Select;
function TitleWithFilter({ text, ...props }) {
  return (
    <div
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "rgba(0,0,0,.02)",
        margin: "10px 0",
      }}
    >
      <Space align="center" className="d-flex justify-content-between">
        <Title {...props}>{text}</Title>
        <div>
          <Space>
            <Text style={{ fontSize: 14 }} type="secondary">
              Sort by :
            </Text>
            <Checkbox>Newest</Checkbox>
            <Checkbox>Most like</Checkbox>
            <Checkbox>Best seller</Checkbox>
            <CustomSortDropdown
              defaultRefinement="most_buy"
              items={[
                { value: "date_desc", label: "Newest" },
                { value: "most_buy", label: "Best Seller." },
                { value: "price_asc", label: "Price asc." },
                { value: "price_desc", label: "Price desc." },
                { value: "most_like", label: "Most like." },
              ]}
            />
          </Space>
        </div>
      </Space>
    </div>
  );
}

TitleWithFilter.propTypes = {
  text: PropTypes.string,
};

export default TitleWithFilter;
