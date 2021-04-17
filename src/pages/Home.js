import React from "react";
import { Divider } from "antd";

//components import here
import CategoryTab from "../Components/Category/CategoryTab";
import Navbar from "../Components/Header/Navbar";
import CoverBanner from "../Components/Header/CoverBanner";
import ItemsGroup from "../Components/Card/ItemsGroup";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <CoverBanner />

      <div className="container mt-5">
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

      <Footer />
    </>
  );
}
