import React from "react";
import PropTypes from "prop-types";
import CustomTitle from "./components/CustomTitle";
import Paragraph from "antd/lib/typography/Paragraph";

function ProductInfo({ data }) {
  return (
    <div>
      <CustomTitle text={"Product Detail"} />
      <Paragraph
        style={{ fontSize: 16, padding: "15px 20px" }}
        type={"secondary"}
      >
        {data}
      </Paragraph>
    </div>
  );
}

ProductInfo.propTypes = {};

export default ProductInfo;
