import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Components/AuthRoute/ProtectedRoute";
import { AppstoreOutlined } from "@ant-design/icons";
//components
import Navbar from "../Components/DynamicNavbar/Navbar";
export default function Seller() {
  const { Content, Header, Footer } = Layout;
  const items = [
    {
      name: "Ken",
      url: "#",
    },
    {
      icon: <AppstoreOutlined style={{ color: "white", fontSize: "24px" }} />,
    },
  ];

  return (
    <Layout>
      <Header style={{ width: "100%" }}>
        <Navbar items={items} />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Switch>
          {/* setup routes here */}
          <Route />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
