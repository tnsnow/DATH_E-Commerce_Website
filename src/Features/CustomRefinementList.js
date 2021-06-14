import React from "react";
import PropTypes from "prop-types";
import { connectRefinementList } from "react-instantsearch-dom";

const RefinementList = ({
  items,
  currentRefinement,
  refine,
  isFromSearch,
  searchForItems,
  createURL,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <a href="#" style={{ fontWeight: item.isRefined ? "bold" : "" }}>
            {item.label} ({item.count})
          </a>
        </li>
      ))}
    </ul>
  );
};

RefinementList.propTypes = {};
const CustomRefinementList = connectRefinementList(RefinementList);
export default CustomRefinementList;
