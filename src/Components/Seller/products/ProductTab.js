import { Table, Space, Tag, Image } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import userAtom from "../../../recoil/user";

const dataSourceVar = [
  // name
  // categories
  // price
  // available
  // sold
  // action
];

const columns = [
  {
    title: "Product's name",
    dataIndex: "name",
    key: "name",
    render: ({ name, image }) => (
      <div className="image-label" style={{ width: 250 }}>
        <Image alt={name} width={56} src={image} />
        <span>{name}</span>
      </div>
    ),
  },
  {
    title: "Categories",
    dataIndex: "categories",
    key: "categories",
    render: (tags) => (
      <>
        {tags.map((tag) => (
          <>
            <Tag color="blue" key={tag.name}>
              {tag.name}
            </Tag>
          </>
        ))}
      </>
    ),
  },
  {
    title: "Pricing",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => b.price - a.price,
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
    render: (amount) =>
      amount == 0 ? (
        <Tag color="red" key={amount}>
          Out of stock
        </Tag>
      ) : (
        amount
      ),
  },
  {
    title: "Sold",
    dataIndex: "sold",
    key: "sold",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href="#">Learn more</a>
        <a href="#">Delete</a>
      </Space>
    ),
  },
  ,
];

export default function ProductTab() {
  const currentUser = useRecoilValue(userAtom);
  const [cookies] = useCookies(["accessToken"]);
  const [dataSource, setDataSource] = useState(dataSourceVar);
  const fetchProduct = async (id) => {
    return axios
      .get(`http://localhost:4001/products/seller/${id}`, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.message;
        }
      });
  };
  const { isLoading, isError, data, error } = useQuery(
    "product",
    () => fetchProduct(currentUser.userId),
    {
      enabled: !!currentUser.userId,
      onSuccess: (data) => {
        console.log(data);
        const dataRes = data.data;
        if (!dataRes) {
          console.log("No data");
          setDataSource([]);
        } else {
          if (dataRes.error) {
            console.log(dataRes.error);
            return;
          }

          const arr = [];
          dataRes.map((item, index) => {
            arr.push({
              key: index + 1,
              name: {
                name: item.name,
                image: item.images[0],
              },
              categories: item.categories,
              price: item.price,
              available: item.available,
              sold: item.sold,
            });
            setDataSource(arr);
          });
        }
      },
    }
  );

  if (isError) return <h1>{error}</h1>;
  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        loading={isLoading}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}
