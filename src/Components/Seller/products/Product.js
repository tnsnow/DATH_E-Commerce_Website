import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Tabs, notification } from "antd";
import ProductTab from "./ProductTab";
import ProductAdd from "./ProductAdd";
import axios from "axios";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";

// components import

const { TabPane } = Tabs;
const openNotification = ({ ...props }) => {
  notification.open({
    ...props,
  });
};
export default function Product() {
  let history = useHistory();
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
      onSuccess: (data) => {
        // console.log({ dataCategory: data });
        if (data.data) {
          if (data.data.error) {
            console.log(data.data.error);
          } else {
            const arr = [];
            data.data.map((item) => {
              arr.push({
                label: item.name,
                value: item._id,
              });
            });
            setParentData(arr);
          }
        } else {
        }
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
      onSuccess: (data) => {
        console.log({ dataChild: data });
        if (data.data) {
          if (data.data.error) {
            console.log(data.data.error);
          } else {
            const arr = [];
            data.data.map((item) => {
              arr.push({ value: item._id, label: item.name });
            });
            setChildData(arr);
          }
        }
      },
    }
  );

  const { mutate, isLoading: isCreateLoading } = useMutation(
    (data) => mutationCreateProduct(data),
    {
      onSuccess: (data) => {
        if (data.data.success) {
          openNotification({
            message: "Success",
            description: data.data.success,
            icon: <CheckCircleOutlined style={{ color: "#36e379" }} />,
          });
          history.push("/seller/products/all");
        }
        if (data.data.error) {
          openNotification({
            message: "Error",
            description: data.data.error,
            icon: <WarningOutlined style={{ color: "#fa3939" }} />,
          });
        }
      },
      onError: (err) => {
        openNotification({
          message: "Error",
          description: err,
          icon: <WarningOutlined style={{ color: "#fa3939" }} />,
        });
      },
    }
  );
  const onGetForm = (values) => {
    // images[] -> image.originFileObj\
    const { name, desc, price, available, category, brand, images } = values;
    // const arrImg = images.map((image, i) => image);
    const data = new FormData();
    data.append("name", name);
    data.append("desc", desc);
    data.append("price", price);
    data.append("available", available ? available : "0");
    data.append("categories", category.child);
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
            isCreateLoading={isCreateLoading}
          />
        </Route>
      </Switch>
    </>
  );
}
