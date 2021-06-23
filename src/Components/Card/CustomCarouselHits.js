import React from "react";
import { Card, Typography, Row } from "antd";
import { connectHits } from "react-instantsearch-dom";
import Slider from "react-slick";
import { useState } from "react";
import { HitCard } from "./CustomHitCard";
const { Text } = Typography;
const Meta = Card.Meta;

const CarouselList = ({ hit }) => {
  console.log(hit);
  return <>1</>;
};
const CustomCarouselHits = connectHits(CarouselList);
export default CustomCarouselHits;
