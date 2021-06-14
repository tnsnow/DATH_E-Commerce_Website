import { Pagination } from "antd";
import React from "react";
import { connectPagination } from "react-instantsearch-core";

const PaginationPart = ({ currentRefinement, nbPages, refine }) => {
  console.log("Hello im Pagination");
  const handleChange = (page) => {
    refine(page);
  };
  return (
    <div className="w-100 d-flex align-items-center justify-content-center mt-5">
      <Pagination
        locale=""
        hideOnSinglePage
        defaultCurrent={currentRefinement}
        total={nbPages}
        onChange={handleChange}
      />
    </div>
  );
};

const CustomPagination = connectPagination(PaginationPart);

export default CustomPagination;
