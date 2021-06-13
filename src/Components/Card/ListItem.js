import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import CardItem from "./CardItem";
import TitleWithFilter from "../Filter/TitleWithFilter";
// import Product from '../Detail/Product';

ListItem.propTypes = {
  listData: PropTypes.object,
  isLoading: PropTypes.bool,
};

function ListItem({ listData, isLoading, col }) {
  if (isLoading) return <></>;
  return (
    <div className="section-all-products__content">
      <Row gutter={24}>
        <TitleWithFilter level={4} text={"All products"} />
        <>
          {listData
            ? listData.data?.map((product) => (
                <Col style={{ padding: "0 5px" }} span={col || 6}>
                  <div className="content-item">
                    <CardItem dataProduct={product} />
                  </div>
                </Col>
              ))
            : null}
        </>
      </Row>
    </div>
  );
}

export default ListItem;
