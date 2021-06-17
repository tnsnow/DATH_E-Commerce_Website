import React from "react";
import PropTypes from "prop-types";
import { Divider, List } from "antd";
import CustomListItem from "./CustomListItem";

function Order({ data }) {
  // console.log("data in order", data)
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
        renderItem={(item) => <CustomListItem data={item} />}
      ></List>
    </>
  );
}

Order.propTypes = {
  data: PropTypes.object,
};

export default Order;
