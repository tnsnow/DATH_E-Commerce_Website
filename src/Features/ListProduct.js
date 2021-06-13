import React from "react";
import PropTypes from "prop-types";

import ListProducts from "../Components/Card/ListItem";
// import { Row, Col } from 'antd';

ListProduct.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};

function ListProduct({ isLoading, data }) {
  return (
    <div className="section-all-products mt-3 mb-5">
      <ListProducts col={4} listData={data} isLoading={isLoading} />
    </div>
  );
}

export default ListProduct;
