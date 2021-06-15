import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import CardItem from "./CardItem";
// import Product from '../Detail/Product';

ListItem.propTypes = {
  listData: PropTypes.object,
  isLoading: PropTypes.bool,
};

function ListItem({ listData, isLoading }) {
  if (isLoading) return <></>;
  return (
    <div className="section-all-products__content">
      <Row gutter={10}>
        {listData
          ? listData.data.map((product) => (
              <Col span={4}>
                <div className="content-item">
                  <CardItem dataProduct={product} />
                </div>
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
}

export default ListItem;
