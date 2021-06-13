import React from "react";
import PropTypes from "prop-types";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import Text from "antd/lib/typography/Text";
function Shop({ seller }) {
  // console.log({ seller });
  if (!seller) return "";
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${"https://picsum.photos/1000"})`,
        }}
        className={"shop-card"}
      >
        <Space split={<Divider orientation="cemter" type="vertical" />}>
          <Space size={"large"} style={{ padding: "0 30px" }}>
            <Avatar size={90} shape={"circle"} icon={<UserOutlined />} />
            <Space size={1} direction={"vertical"}>
              <Text strong className={"font-18"} style={{ color: "white" }}>
                {seller.username ? seller.username : "@unknow"}
              </Text>
              <Text
                type="secondary"
                className={"font-16"}
                style={{ color: "white" }}
              >
                {seller.email ? seller.email : "@unknow"}
              </Text>
            </Space>
            <Button
              href={seller._id ? `/home/shop/${seller._id}` : "/home/"}
              type="primary"
            >
              Visit us
            </Button>
          </Space>
        </Space>
      </div>
    </>
  );
}

Shop.propTypes = {};

export default Shop;
