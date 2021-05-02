import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default function Product() {
  return (
    <div style={{ padding: 10 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Sold" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
}
