import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { AppstoreOutlined, ShoppingOutlined } from "@ant-design/icons";
//components
import Navbar from "../Components/DynamicNavbar/Navbar";
import Sidebar from "../Components/DynamicNavbar/Sidebar";
import Product from "../Components/Seller/products/Product";
export default function Seller() {
  const { Content, Header, Footer, Sider } = Layout;

  return (
    <Layout>
      <Header style={{ width: "100%" }}>
        <Navbar items={itemsNav} />
      </Header>
      <Layout style={{ width: "100%" }}>
        <Sider width={300} className="site-layout-background">
          <Sidebar items={itemsSide} />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="common-content">
              <Switch>
                <Route exact path="/seller" component={Main} />
                <Route path="/seller/products" component={Product} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
const Main = () => {
  return <h1>Main</h1>;
};
const itemsNav = [
  {
    name: "Ken",
    url: "#",
  },
  {
    icon: <AppstoreOutlined style={{ color: "white", fontSize: "24px" }} />,
  },
];
const itemsSide = [
  {
    title: "Products",
    url: "/seller/products",
    icon: <ShoppingOutlined style={{ color: "gray", fontSize: "16px" }} />,
    childs: [
      {
        title: "All products",
        url: "/seller/products/all",
      },
      {
        title: "Add product",
        url: "/seller/products/add",
      },
    ],
  },
];
