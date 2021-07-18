import React, { useState } from "react";
import { connectPagination } from "react-instantsearch-core";

const PaginationPart = ({ nbPages, refine, defaultRefinement, ...props }) => {
  console.log("Pagination", { ...props });
  const [currentActive, setCurrentActive] = useState(defaultRefinement);
  const handleChange = (page) => {
    setCurrentActive(page);
    refine(page);
  };
  return (
    <div
      style={{ fontSize: "16px" }}
      className="w-100 d-flex align-items-center justify-content-center mt-5 "
    >
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {currentActive !== defaultRefinement && (
            <li
              onClick={() => handleChange(currentActive - 1)}
              className="page-item"
            >
              <span className="page-link">Previous</span>
            </li>
          )}
          {new Array(nbPages).fill(null).map((_, index) => {
            const page = index + 1;

            return (
              <div
                onClick={() => handleChange(page)}
                className={`page-item ${
                  currentActive === page ? "active" : ""
                } cursor-pointer`}
              >
                <span className="page-link px-3">{page}</span>
              </div>
            );
          })}

          {currentActive !== nbPages && (
            <li
              onClick={() => handleChange(currentActive + 1)}
              className="page-item"
            >
              <span className="page-link">Next</span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

const CustomPagination = connectPagination(PaginationPart);

export default CustomPagination;
