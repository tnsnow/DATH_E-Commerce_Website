import { Table, Space, Tag, Image, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import numeral from "numeral";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery, useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import userAtom from "../../../recoil/user";
import { useNotification, useTruncate } from "../../../hooks";

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
    render: (price) => "₫ " + numeral(price).format("0,0[.]00"),
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
    sorter: (a, b) => b.available - a.available,
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
    sorter: (a, b) => b.sold - a.sold,
  },
  {
    title: "Action",
    key: "action",
    render: (text) => (
      <Space size="middle">
        <a href={`/seller/products/${text.name.id}`}>Edit</a>
        {/* <a href="#">Delete</a> */}
      </Space>
    ),
  },
  ,
];

export default function ProductTab() {
  // const truncate = useTruncate();
  const notification = useNotification();
  const currentUser = useRecoilValue(userAtom);
  const [cookies] = useCookies(["accessToken"]);
  const [isShow, setIsShow] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dataSource, setDataSource] = useState(dataSourceVar);
  const deleteProductById = ({ id }) => {
    return axios.post(
      `http://localhost:4001/products/delete/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      }
    );
  };
  const fetchProduct = async (id) => {
    return axios
      .get(`http://localhost:4001/products/seller/${id}`, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return error.response.data.message;
        }
      });
  };
  const { isLoading, isError, refetch, error } = useQuery(
    "product",
    () => fetchProduct(currentUser.userId),
    {
      enabled: !!currentUser.userId,
      onSuccess: (data) => {
        try {
          // console.log(data);
          if (data.status == 200) {
            const arr = [];
            data.data.map((item, index) => {
              arr.push({
                key: index + 1,
                name: {
                  id: item._id,
                  // name: truncate(item.name, 60),
                  image: item.images[0],
                },
                categories: item.categories,
                price: item.price,
                available: item.available,
                sold: item.sold,
                action: item.id,
              });
              setDataSource(arr);
            });
          }
        } catch (error) {
          notification("error", error);
        }
      },
    }
  );
  const { mutate: mutateDelete, isLoading: isDeleteLoading } = useMutation(
    deleteProductById,
    {
      onSuccess: (data) => {
        try {
          if (data.status === 200) {
            notification("success", data.data.success);
            refetch();
          }
        } catch (error) {
          console.log(error);
        }
      },
    }
  );
  const onSelectRow = (selected, selectedRows, changeRows) => {
    changeRows.length > 0 ? setIsShow(true) : setIsShow(false);
    setSelectedRows(changeRows);
    // console.log({ selected, selectedRows, changeRows });
  };
  const onSelectAllRow = (selected, selectedRows, changeRows) => {
    selected ? setIsShow(true) : setIsShow(false);
    setSelectedRows(selectedRows);
    // console.log({ selected, selectedRows, changeRows });
  };
  const onDelete = () => {
    // console.log({ selectedRows });
    selectedRows.map((item) => {
      mutateDelete({ id: item.name.id });
    });
  };

  if (isError) return <h1>{error}</h1>;
  if (isLoading)
    return (
      <>
        <Table loading={isLoading} />
      </>
    );

  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          onSelect: onSelectRow,
          onSelectAll: onSelectAllRow,
        }}
        loading={isLoading || isDeleteLoading}
        dataSource={dataSource}
        columns={columns}
      />
      {isShow ? (
        <div className="fixed-button">
          <Button
            loading={isDeleteLoading}
            type="primary"
            size={30}
            onClick={onDelete}
          >
            <Space align="center">
              <DeleteOutlined size={24} />
              <span>Delete</span>
            </Space>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
