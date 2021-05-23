import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table, Space, Tag, Image, Button, InputNumber } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { useNotification, usePriceFormat, useTruncate } from "../hooks";
import { useMutation, useQuery } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";

// Cart.propTypes = {
//   mutateAdd: PropTypes.func,
//   mutateDelete: PropTypes.func,
//   items: PropTypes.array,
//   isLoading: PropTypes.object,
// };

export default function Cart() {
  const notificate = useNotification();
  const [cookies] = useCookies(["accessToken"]);
  const formatPrice = usePriceFormat();
  const [dataSource, setDataSource] = useState([]);
  const truncate = useTruncate();
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: ({ name, image }) => (
        <div className="image-label" style={{ maxWidth: 400 }}>
          <Image
            alt={name}
            style={{ maxWidth: 70, maxHeight: 70 }}
            src={image}
          />
          <span>{truncate(name, 50)}</span>
        </div>
      ),
    },
    {
      title: "Pricing",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      // sorter: (a, b) => b.price - a.price,
      render: (q) => (
        <InputNumber
          readOnly={isAddItemLoading || isDeleteLoading}
          defaultValue={Number(q)}
          min={0}
          onStep={(q, value, info) => handleStepChange(q, value, info)}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="link">Delete</Button>,
    },
    ,
  ];

  const fetchItemsInCart = async () => {
    return axios
      .get(`http://localhost:4001/products/in-cart`, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .catch((err) => err.response.data);
  };
  const mutateAddItemInCart = async ({ id, quantity }) => {
    return axios
      .post(
        `http://localhost:4001/products/add-to-cart/${id}`,
        {
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      )
      .catch((err) => err.response.data);
  };
  const mutateDeleteItemInCart = async ({ id, quantity }) => {
    return axios
      .post(
        `http://localhost:4001/products/remove-from-cart/${id}`,
        {
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      )
      .catch((err) => err.response.data);
  };
  const { mutate: mutateAddItem, isLoading: isAddItemLoading } = useMutation(
    mutateAddItemInCart,
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          notificate("success", data.data.success);
        }
      },
    }
  );
  const { mutate: mutateDeleteItem, isLoading: isDeleteLoading } = useMutation(
    mutateDeleteItemInCart,
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          notificate("success", data.data.success);
        }
      },
    }
  );

  const {
    refetch,
    isLoading: isCartLoading,
    isError: isCartError,
    error: cartError,
  } = useQuery("fetch-item-cart", fetchItemsInCart, {
    onSuccess: (data) => {
      console.log({ data });
      if (data.status === 200) {
        if (!data.data.error) {
          const arr = [];
          data.data.map((item, i) => {
            arr.push({
              key: i + 1,
              product: {
                image: item.product.images[0],
                name: item.product.name,
              },
              price: formatPrice(item.product.price),
              quantity: item.quantity,
              amount: formatPrice(item.amount),
            });
          });
          setDataSource(arr);
        }
      }
    },
  });
  if (isCartError) {
    notificate("error", cartError);
  }
  const handleStepChange = (value, info) => {
    // console.log({ value, info });
    const { type } = info;
    if (type === "up") {
      // mutateAdd({id here})
    } else {
      //mutateDelete({id})
    }
  };
  return (
    <div className="container p-3">
      <Table
        pagination={false}
        loading={isCartLoading}
        rowSelection={{
          type: "checkbox",
          // onSelect: onSelectRow,
          // onSelectAll: onSelectAllRow,
        }}
        dataSource={dataSource}
        columns={columns}
      />
      <div className="container">
        <div>
          <div className="fixed-card">
            <Button
              // loading={isDeleteLoading}
              type="primary"
              size="large"
              // onClick={onDelete}
            >
              <Space align="center">
                <DeleteOutlined size={24} />
                <span>Checkout</span>
              </Space>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
