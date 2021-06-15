<<<<<<< HEAD
import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Tabs, Button, Space } from "antd";
import ProductTab from "./ProductTab";
import ProductAdd from "./ProductAdd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";
import { useNotification } from "../../../hooks";
import ProductEdit from "./ProductEdit";

// components import

const { TabPane } = Tabs;

export default function Product() {
  let history = useHistory();
  const notificate = useNotification();
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
        try {
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
        } catch (error) {}
      },
    }
  );

  ///MUTATE ===============
  const mutationCreateProduct = async ({ data }) => {
    return axios
      .post("http://localhost:4001/products/new/", data, {
        headers: {
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
  const mutationEditProduct = async ({ data, id }) => {
    console.log({ data, id });
    return axios
      .post(`http://localhost:4001/products/edit/${id}`, data, {
        headers: {
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
        try {
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
        } catch (error) {
          notificate("error", "Cannot get child category");
        }
      },
    }
  );

  const { mutate, isLoading: isCreateLoading } = useMutation(
    mutationCreateProduct,
    {
      onSuccess: (data) => {
        try {
          if (data.status == 200) {
            if (data.data.success) {
              notificate("success", data.data.success);
              history.push("/seller/products/all");
            }
            if (data.data.error) {
              notificate("error", data.data.error);
            }
          }
        } catch (error) {
          notificate("error", "Cannot create new Product 😳");
        }
      },
    }
  );
  const { mutate: mutateEdit, isLoading: isEditLoading } = useMutation(
    mutationEditProduct,
    {
      onSuccess: (data) => {
        try {
          if (data.status == 200) {
            // notificate("success", data.data);
            if (data.data.success) {
              notificate("success", data.data.success);
              history.push("/seller/products/all");
            }
            if (data.data.error) {
              notificate("error", data.data.error);
            }
          }
        } catch (error) {
          notificate("error", "Cannot create new Product 😳");
        }
      },
    }
  );
  const onGetFormCreate = (values) => {
    const { name, desc, price, available, category, brand, images } = values;

    const data = {
      name,
      desc,
      price,
      available,
      brand,
      images,
      categories: category.child.value,
    };
    // console.log({ images, imageTest });
    mutate({ data });
  };
  const onGetFormEdit = (values) => {
    // images[] -> image.originFileObj\
    const { name, desc, price, available, category, brand, id, images } =
      values;
    console.log({ id });
    // const arrImg = images.map((image, i) => image);
    const data = {
      name,
      desc,
      price,
      available,
      categories: category.child.value,
      brand,
      images,
    };
    // console.log({ data });
    mutateEdit({ data, id });
    // notificate("success", values.name);
    // history.push("/seller/products/all");
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
                <div style={{ padding: 10 }}>
                  <Space>
                    <a href="/seller/products/add">
                      <Button
                        size="large"
                        className="perfect-button-icon"
                        type="primary"
                        icon={<PlusOutlined />}
                      >
                        Add new Product
                      </Button>
                    </a>
                  </Space>
                </div>
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
            onGetForm={onGetFormCreate}
            isCreateLoading={isCreateLoading}
          />
        </Route>
        <Route path="/seller/products/:id">
          <ProductEdit
            dataChild={{ childData, isChildLoading }}
            dataParent={{ parentData, isParenLoading }}
            handleClickParent={handleClickParent}
            onGetForm={onGetFormEdit}
            isEditLoading={isEditLoading}
          />
        </Route>
      </Switch>
    </>
  );
}
