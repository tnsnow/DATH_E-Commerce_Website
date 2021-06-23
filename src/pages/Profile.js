import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";

import User from "../Components/User/User";
import UserOrder from "../Components/User/UserOrder";
import UserPassword from "../Components/User/UserPassword";
import UserProfile from "../Components/User/UserProfile";
import { currentUser } from "../recoil/user/atom";
const { TabPane } = Tabs;
export default function Profile() {
  const [user, setUser] = useRecoilState(currentUser);
  const location = useLocation();
  const [key, setKey] = useState("profile");
  useEffect(() => {
    console.log({ location });
    if (location.state?.keyTab) {
      setKey(location.state.keyTab);
    }
  }, [location]);
  return (
    <div className="container">
      <div style={{ border: "none" }} className="section-product-detail">
        <Tabs
          style={{ padding: 20 }}
          tabBarGutter={30}
          size="large"
          tabPosition="left"
          activeKey={key}
          // defaultActiveKey={key}
          onTabClick={(key) => setKey(key)}
        >
          <TabPane
            key="profile"
            tab={<IconUser username={user.username} image={user.userImage} />}
          >
            <UserProfile />
          </TabPane>
          <TabPane tab="Password" key="password">
            <UserPassword />
          </TabPane>
          <TabPane tab="Orders" key="orders">
            <UserOrder />
          </TabPane>
          <TabPane tab="Shop" key="shop">
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
