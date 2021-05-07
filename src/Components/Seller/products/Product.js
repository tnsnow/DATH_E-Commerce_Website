import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Tabs } from "antd";
import ProductTab from "./ProductTab";
import ProductAdd from "./ProductAdd";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";

// components import

const { TabPane } = Tabs;
export default function Product() {
  const [cookies] = useCookies(["accessToken"]);
  const [parentData, setParentData] = useState([]);
  const [childData, setChildData] = useState([]);
  ///QUERY ===============================
  const fetchCategoryChild = (idParent) => {
    return axios
      .get(`http://localhost:4001/categories/child/${idParent}`)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.response.data;
        }
      });
  };

  //dumb  - format later
  const { isLoading: isParenLoading } = useQuery(
    "fetchCategory",
    () =>
      axios
        .get(`http://localhost:4001/categories/parent`)
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return error.response.data;
          }
        }),
    {
      onSuccess: ({ data }) => {
        // console.log({ dataCategory: data });
        const arr = [];
        data.map((data) => {
          const children = [];

          arr.push({
            label: data.name,
            value: data._id,
          });
        });
        setParentData(arr);
      },
    }
  );

  ///MUTATE ===============
  const mutationCreateProduct = async (data) => {
    return axios
      .post("http://localhost:4001/products/new/", data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.response.data;
        }
      });
  };
  const { mutate: mutateChild, isLoading: isChildLoading } = useMutation(
    (parentID) => fetchCategoryChild(parentID),
    {
      onSuccess: ({ data }) => {
        const arr = [];
        data.map((item) => {
          arr.push({ value: item._id, label: item.name });
        });
        setChildData(arr);
      },
    }
  );

  const { mutate, isLoading } = useMutation(
    (data) => mutationCreateProduct(data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  const onGetForm = (values) => {
    // images[] -> image.originFileObj\
    const { name, desc, price, available, categories, brand, images } = values;
    // const arrImg = images.map((image, i) => image);
    const data = new FormData();
    data.append("name", name);
    data.append("desc", desc);
    data.append("price", price);
    data.append("available", available ? available : "0");
    data.append("categories", categories[0]);
    images.forEach((img) => {
      data.append("images", img);
    });
    data.append("brand", brand);

    // console.log({ images, imageTest });
    mutate(data);
  };
  const handleClickParent = (item) => {
    // console.log(item.value);

    // setParentID(item.value);
    mutateChild(item.value);
  };

  return (
    <>
      <Switch>
        <Route exact path="/seller/products/all">
          <div style={{ padding: 10 }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="All" key="1">
                {/* product table */}
                <ProductTab />
              </TabPane>
              <TabPane tab="Sold" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </Route>
        <Route path="/seller/products/add">
          <ProductAdd
            dataChild={{ childData, isChildLoading }}
            dataParent={{ parentData, isParenLoading }}
            handleClickParent={handleClickParent}
            onGetForm={onGetForm}
          />
        </Route>
      </Switch>
    </>
  );
}
