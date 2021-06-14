import { Button, InputNumber, Slider, Space } from "antd";
import React, { useEffect, useState } from "react";
import { connectRange } from "react-instantsearch-core";
import { usePriceFormat } from "../../hooks";

const RangeSlider = ({ min, max, refine, currentRefinement, canRefine }) => {
  console.log(min, max, refine, currentRefinement, canRefine);
  const [stateMin, setStateMin] = React.useState(min);
  const [stateMax, setStateMax] = React.useState(max);
  const formatPrice = usePriceFormat();
  React.useEffect(() => {
    if (canRefine) {
      setStateMin(currentRefinement.min);
      setStateMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max]);
  const onSliderChange = (value) => {
    // setPriceInput(value);
    refine({ min: 0, max: value });
  };

  if (min === max) {
    return null;
  }

  return (
    <div>
      <Slider
        tipFormatter={(value) => formatPrice(value)}
        min={stateMin}
        max={stateMax}
        defaultValue={[currentRefinement.min, currentRefinement.max]}
        onChange={onSliderChange}
        // range={{ draggableTrack: true }}
      />
    </div>
  );
};
const CustomRangeSlider = connectRange(RangeSlider);

export default CustomRangeSlider;
