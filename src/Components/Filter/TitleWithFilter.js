import React from "react";
import PropTypes from "prop-types";
import Title from "antd/lib/typography/Title";
import { Button, Checkbox, Select, Space } from "antd";
import Text from "antd/lib/typography/Text";
import CustomSortDropdown from "./CustomSortDropdown";
import CustomHitPerPages from "./CustomHitPerPages";
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
            <CustomHitPerPages
              defaultRefinement={8}
              items={[
                { value: 8, label: "8 Result" },
                { value: 16, label: "16 Result" },
                { value: 50, label: "50 Result" },
              ]}
            />

            <CustomSortDropdown
              defaultRefinement="most_buy"
              items={[
                { value: "date_desc", label: "Newest" },
                { value: "most_buy", label: "Best Seller." },
                { value: "price_asc", label: "Price asc." },
                { value: "price_desc", label: "Price desc." },
                { value: "most_likes", label: "Most like." },
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
