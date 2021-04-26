import React from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";

ItemsGroup.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object
};

export default function ItemsGroup({ isLoading, data }) {

  // const test = {
  //   isLoading: false,
  //   product: {
  //     name: "Name product",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     rating: "4.5",
  //     like: "30",
  //     images: "https://picsum.photos/200",
  //     price: "120000",
  //     sold: "0",
  //   },
  // };
  return (

    <div className="row">
      {
        data.data.data.map(product =>
          <div className="col-lg-3 padding-items">
            <CardItem isLoading={isLoading} product={product} />
          </div>
        )
      }
    </div>
  );
}

