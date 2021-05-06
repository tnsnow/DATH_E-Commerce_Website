import React from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";

ItemsGroup.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};

export default function ItemsGroup({ isLoading, data }) {
  // console.log(data);
  return (
    <div className="row">
      {data &&
        data.data.map((product) => (
          <CardItem isLoading={isLoading} product={product} />
        ))}
    </div>
  );
}
