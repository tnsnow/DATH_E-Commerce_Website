import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Checkbox, InputNumber, Slider, Space } from "antd";
import { usePriceFormat } from "../../hooks";

function FilterCard(props) {
  const [priceInput, setPriceInput] = useState(1);
  const priceFormat = usePriceFormat();
  const onSliderChange = (value) => {
    setPriceInput(value);
  };
  return (
    <>
      <div style={{ padding: 15, width: "100%" }}>
        <div className={"border-card-round"}>
          <Card title="Price" bordered={false} style={{ width: "100%" }}>
            <Slider
              min={1}
              max={999999}
              onChange={onSliderChange}
              value={typeof priceInput === "number" ? priceInput : 0}
            />
            <Space size={0}>
              {"1000 -"}
              <InputNumber
                min={1}
                max={999999}
                formatter={(value) => `${priceFormat(value)}`}
                style={{ width: 100, margin: "0 16px" }}
                value={priceInput}
                onChange={onSliderChange}
              />{" "}
            </Space>
            <Button style={{ marginTop: 15, width: "100%" }} type="primary">
              Apply
            </Button>
          </Card>
          <Card title="Categories" bordered={false} style={{ width: "100%" }}>
            <Space direction="vertical">
              <Checkbox>Checkbox</Checkbox>
              <Checkbox>Checkbox</Checkbox>
              <Checkbox>Checkbox</Checkbox>
              <Checkbox>Checkbox</Checkbox>
            </Space>
          </Card>
          <Card title="Card title" bordered={false} style={{ width: "100%" }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
      <div style={{ padding: "0 10px" }}>
        <Button style={{ width: "100%" }} type="ghost">
          Reset Filter
        </Button>
      </div>
    </>
  );
}

FilterCard.propTypes = {};

export default FilterCard;
