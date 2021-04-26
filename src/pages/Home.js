import React, { useState } from "react";
import { Divider } from "antd";
import { Switch, Route } from "react-router-dom";
import { useQuery } from 'react-query'
import axios from 'axios';
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
  // const [data , setData] = useState([]);
  const fetchListCart = async () => {

    return await axios.get("http://localhost:4001/products")
  }
  const { isLoading, isError, data, error } = useQuery('itemCart', fetchListCart);

  if (isError) return <p>Error</p>

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
              {
                isLoading ? <p>Loading ...</p> :
                  <ItemsGroup isLoading={isLoading} data={data} />
              }
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
