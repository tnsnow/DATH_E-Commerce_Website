import React from "react";
import { Divider } from "antd";
import { Switch, Route } from "react-router-dom";
//components import here
import CategoryTab from "../Components/Category/CategoryTab";
import Navbar from "../Components/Header/Navbar";
import CoverBanner from "../Components/Header/CoverBanner";
import ItemsGroup from "../Components/Card/ItemsGroup";
import CategoryLine from "../Components/Category/CategoryLine";
import Footer from "../Components/Footer";
import Search from "./Search";
import Trends from "../Components/Trends/Trends";
import Promotions from "../Components/Promotions/Promotions";

export default function Home() {
  return (
    <>
      <div className="box-nav">
        <div className="container">
          <Navbar z />
        </div>
      </div>

      <div className="box-blog">
        <Switch>
          <Route exact path="/">
            <div className="container">
              <CoverBanner />
              <CategoryLine />
              <Trends />
              <Promotions />

              <div className="row">
                <div className="col col-md-4 p-3">
                  <CategoryTab />
                </div>
                <div className="col col-md-8 p-3">
                  <Divider style={{ color: "#1890ff" }} orientation="left">
                    <h1>TOP SELLER</h1>
                  </Divider>
                  <ItemsGroup />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/home/search/:keyword">
            <Search />
          </Route>
        </Switch>
      </div>
      <div className="">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}
