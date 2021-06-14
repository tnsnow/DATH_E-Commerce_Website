import { Button } from "antd";
import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-core";

const ButtonClearFilter = ({ items, refine }) => {
  return (
    <>
      <Button
        disabled={!items.length}
        onClick={() => refine(items)}
        style={{ width: "100%" }}
        type="primary"
      >
        Reset Filter
      </Button>
    </>
  );
};
const CustomButtonClearFilter = connectCurrentRefinements(ButtonClearFilter);
export default CustomButtonClearFilter;
