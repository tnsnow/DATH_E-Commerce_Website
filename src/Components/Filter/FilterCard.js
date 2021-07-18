import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Checkbox, InputNumber, Slider, Space } from "antd";
import CustomFilter from "./CustomFilter";
import CustomRangeSlider from "../RangeInput/CustomRangeSlider";
import CustomButtonClearFilter from "../../Features/CustomButtonClearFilter";
import CustomRatingMenu from "./CustomRatingMenu";

const min = 0;
const max = 1000000000;
function FilterCard(props) {
  return (
    <>
      <div style={{ padding: "0 15px 0 15px", margin: "0 0 10px 0" }}>
        <CustomButtonClearFilter />
      </div>
      <div style={{ padding: "0px 15px ", width: "100%" }}>
        <div className={"border-card-round"}>
          <Card title="Price" bordered={false} style={{ width: "100%" }}>
            <CustomRangeSlider
              attribute="price"
              min={min}
              max={max}
              defaultRefinement={{
                min: min,
                max: max,
              }}
            />
          </Card>
          <Card title="Categories" bordered={false} style={{ width: "100%" }}>
            <CustomFilter
              operator={"or"}
              attributes={["categories"]}
              limit={10}
              showMore
            />{" "}
          </Card>
          <Card title="Brands" bordered={false} style={{ width: "100%" }}>
            <CustomFilter
              operator={"or"}
              attributes={["brand"]}
              limit={10}
              showMore
            />{" "}
          </Card>
          <Card title="Rating" bordered={false} style={{ width: "100%" }}>
            <CustomRatingMenu
              max={5}
              min={0}
              defaultRefinement={0}
              attribute="rating"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

FilterCard.propTypes = {};

export default FilterCard;
