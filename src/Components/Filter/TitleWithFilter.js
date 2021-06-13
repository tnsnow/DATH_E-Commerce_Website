import React from "react";
import PropTypes from "prop-types";
import Title from "antd/lib/typography/Title";
import { Button, Checkbox, Select, Space } from "antd";
import Text from "antd/lib/typography/Text";
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
            <Select style={{ margin: "0 10px", width: 200 }}>
              <Option value="jack">Jack</Option>
              <Option value="jack1">Jack</Option>
              <Option value="jack2">Jack</Option>
              <Option value="jack3">Jack</Option>
            </Select>
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
