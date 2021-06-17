import React from "react";
import PropTypes from "prop-types";
import CustomTitle from "./components/CustomTitle";
import Paragraph from "antd/lib/typography/Paragraph";
import { useRecoilValue } from "recoil";
import { currentHit } from "../../recoil/product/product";

function ProductInfo({ data }) {
  const hitState = useRecoilValue(currentHit);
  console.log({ hitState });
  return (
    <div>
      <CustomTitle text={"Product Detail"} />
      <Paragraph
        style={{ fontSize: 16, padding: "15px 20px" }}
        type={"secondary"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: data?.replaceAll("&lt;", "<") }}
        ></div>
      </Paragraph>
    </div>
  );
}

ProductInfo.propTypes = {};

export default ProductInfo;
