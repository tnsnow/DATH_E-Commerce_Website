import React, { useState } from "react";
import { Divider, Skeleton, Card } from "antd";
import { Switch, Route } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

//components import here
import CategoryTab from "../Components/Category/CategoryTab";
import Navbar from "../Components/Header/Navbar";
import CoverBanner from "../Components/Header/CoverBanner";
import ItemsGroup from "../Components/Card/ItemsGroup";
import CategoryLine from "../Components/Category/CategoryLine";
import Footer from "../Components/Footer/Footer";
import Search from "./Search";
import Trends from "../Components/Trends/Trends";
import Promotions from "../Components/Promotions/Promotions";
import ListSeller from "../Components/Sellers/ListSellers";

import ProductDetail from "../Features/ProductDetail";

export default function Home() {
  const fetchListCart = async () => {
    return await axios
      .get("http://localhost:4001/products")
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.response.data;
        }
      });
  };
  const { isLoading, isError, data, error } = useQuery(
    "itemCart",
    fetchListCart
  );

  if (isError) return <h1>{error}</h1>;

  return (
    <>
      <div className="box-nav">
        <div className="container">
          <Navbar />
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
              {isLoading ? (
                <Card
                  style={{ width: "300px", padding: "0.25rem" }}
                  loading={isLoading}
                  cover={<Skeleton.Image />}
                ></Card>
              ) : (
                <ItemsGroup isLoading={isLoading} data={data} />
              )}
            </div>
          </Route>
          <Route path="/home/search/:keyword">
            <Search />
          </Route>
          <Route path="/home/product-detail">
            <ProductDetail />
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
