import React from "react";

import CardItem from "./CardItem";

export default function ItemsGroup() {
  const test = {
    isLoading: false,
    product: {
      name: "Name product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: "4.5",
      like: "30",
      images: "https://picsum.photos/200",
      price: "120000",
      sold: "0",
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
        <div className="col-lg-3 padding-items">
          <CardItem isLoading={test.isLoading} product={test.product} />
        </div>
      </div>
    </div>
  );
}
