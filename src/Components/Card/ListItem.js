import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import CardItem from "./CardItem";
import TitleWithFilter from "../Filter/TitleWithFilter";
import Slider from "react-slick";
import CardItemsHorizontal from "./CardItemsHorizontal";
// import Product from '../Detail/Product';

ListItem.propTypes = {
  listData: PropTypes.object,
  isLoading: PropTypes.bool,
  direction: PropTypes.string,
};

function ListItem({ listData, isLoading, col, direction }) {
  if (isLoading) return <></>;

  const settings = {
    // dots: true,
    infinite: true,
    slidesPerRow: 1,
    speed: 500,
    slidesToShow: 4,
    autoPlay: true,
  };
  return (
    <div className="section-all-products__content">
      <Row gutter={24}>
        <TitleWithFilter level={4} text={"All products"} />
        <>
          {direction !== "horizontal" ? (
            listData?.data?.map((product) => (
              <Col style={{ padding: "0 5px" }} span={col || 6}>
                <div className="content-item">
                  <CardItem dataProduct={product} />
                </div>
              </Col>
            ))
          ) : direction == "horizontal" ? (
            <div className="container">
              <Slider {...settings}>
                {listData?.data?.map((product) => (
                  <div>
                    <CardItemsHorizontal dataProduct={product} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : null}
        </>
      </Row>
    </div>
  );
}

export default ListItem;
