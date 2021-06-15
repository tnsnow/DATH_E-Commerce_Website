import React from "react";
import { Tabs } from "antd";
import { Switch, Route } from "react-router-dom";
import ProductTab from "./ProductTab";
import ProductAdd from "./ProductAdd";
// components import

const { TabPane } = Tabs;
export default function Product() {
  const onGetForm = (values) => {
    // images[] -> image.originFileObj
    console.log(values);
  };
  return (
    <>
      <Switch>
        <Route exact path="/seller/products">
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
        </Route>
        <Route path="/seller/products/add">
          <ProductAdd onGetForm={onGetForm} />
        </Route>
      </Switch>
    </>
  );
}
