import React from "react";
import Slider from "react-slick";

export default function CarouselImages({ images }) {
  return (
    <div>
      <Slider>
        {images.map((img, index) => (
          <img alt={index} src={img} />
        ))}
      </Slider>
    </div>
  );
}
