import { Tabs } from "antd";
import React from "react";

import User from "../Components/User/User";
import UserPassword from "../Components/User/UserPassword";
const { TabPane } = Tabs;
export default function Profile() {
  return (
    <div className="container">
      <div style={{ border: "none" }} className="section-product-detail">
        <Tabs
          style={{ padding: 20 }}
          tabBarGutter={30}
          size="large"
          tabPosition="left"
          defaultActiveKey="0"
        >
          <TabPane
            key="0"
            tab={
              // <a href="/home/profile">
              <IconUser
                username="@username"
                image={"https://picsum.photos/200"}
              />
              // </a>
            }
          >
            <User />
          </TabPane>
          <TabPane tab="Password" key="1">
            <UserPassword />
          </TabPane>
          <TabPane tab="Orders" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Shop" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export const IconUser = ({ image, username }) => {
  return (
    <div className="d-flex align-items-center">
      <img src={image} alt="Avatar" className="rounded-img-icon" />
      <div>
        <div className="title">{username}</div>
        <span className="subtitle">Edit profile</span>
      </div>
    </div>
  );
};
