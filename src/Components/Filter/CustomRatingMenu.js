import { Rate } from "antd";
import React, { useState } from "react";
import { connectRange } from "react-instantsearch-core";

const RatingMenu = ({ min, max, currentRefinement, refine }) => {
  const [star, setStar] = useState(0);
  const handleChange = (value) => {
    setStar(value);
    console.log({ currentRefinement });
    refine({ min: value });
  };
  for (let i = min; i <= max; i++) {
    return (
      <Rate
        count={max}
        value={star}
        defaultValue={currentRefinement || 0}
        onChange={handleChange}
      />
    );
  }
};
const CustomRatingMenu = connectRange(RatingMenu);

export default CustomRatingMenu;
