import { Tabs } from "antd";
import React from "react";
import { useRecoilState } from "recoil";

import User from "../Components/User/User";
import UserOrder from "../Components/User/UserOrder";
import UserPassword from "../Components/User/UserPassword";
import { currentUser } from "../recoil/user/atom";
const { TabPane } = Tabs;
export default function Profile() {
  const [user, setUser] = useRecoilState(currentUser);
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
            tab={<IconUser username={user.username} image={user.userImage} />}
          >
            <User />
          </TabPane>
          <TabPane tab="Password" key="1">
            <UserPassword />
          </TabPane>
          <TabPane tab="Orders" key="2">
            <UserOrder />
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
      <div style={{ textAlign: "start", marginLeft: 10 }}>
        <div className="title">{username}</div>
        <span className="subtitle">Edit profile</span>
      </div>
    </div>
  );
};
