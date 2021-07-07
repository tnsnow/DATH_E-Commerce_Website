import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, List } from "antd";
import CustomListItem from "./CustomListItem";
import CommentModal from "./CommentModal";
import { useCookies } from "react-cookie";
function Order({ data }) {
  // console.log("data in order", data)
  const [cookies] = useCookies(["accessToken"]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleReview = (productId) => {
    setId(productId);
    setIsOpen(true);
  };
  const renderButtons = (page, type, ogElement) => {
    return <div style={{ margin: "0 5px" }}>{ogElement}</div>;
  };
  return (
    <>
      <Divider orientation="left">Your oders</Divider>
      <List
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
          itemRender: renderButtons,
        }}
        itemLayout={"vertical"}
        dataSource={data}
        renderItem={(item) => (
          <CustomListItem handleReview={handleReview} data={item} />
        )}
      ></List>
      <CommentModal
        token={cookies.accessToken}
        id={id}
        openState={{ isOpen, setIsOpen }}
        title={"Write your review"}
      />
    </>
  );
}

Order.propTypes = {
  data: PropTypes.object,
};

export default Order;
