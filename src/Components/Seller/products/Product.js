import React from "react";
import { Tabs } from "antd";
import ProductTab from "./ProductTab";

// components import

const { TabPane } = Tabs;
export default function Product() {
  return (
    <div style={{ padding: 10 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <ProductTab />
        </TabPane>
        <TabPane tab="Sold" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
}
