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
import ListSeller from "../Components/Sellers/ListSellers";

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
              <ListSeller />
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
