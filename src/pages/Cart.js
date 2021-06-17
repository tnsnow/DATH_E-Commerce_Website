import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  Space,
  Tag,
  Image,
  Button,
  InputNumber,
  Modal,
  List,
  Divider,
  Radio,
  Input,
  Spin,
} from "antd";

import { PayPalButton } from "react-paypal-button-v2";
import { DeleteOutlined } from "@ant-design/icons";
import { useNotification, usePriceFormat, useTruncate } from "../hooks";
import { useMutation, useQuery } from "react-query";
import { useCookies } from "react-cookie";
import axios from "axios";
import Avatar from "antd/lib/avatar/avatar";
import { useRecoilValue } from "recoil";
import { currentUser } from "../recoil/user/atom";
import Text from "antd/lib/typography/Text";
import { postCreateOrder } from "./functions";

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
  // const user = useRecoilValue(currentUser);
  const [user, setUser] = useState({});
  const userAtom = useRecoilValue(currentUser);
  const [radioValue, setRadioValue] = useState("cod");
  const [amount, setAmount] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataCheckout, setDataCheckout] = useState([]);
  const [notice, setNotice] = useState("");

  const truncate = useTruncate();
  const totalCalc = (arr) => {
    return arr.reduce((a, b) => b + a, 0);
  };
  useEffect(() => {
    setUser(userAtom);
  }, [userAtom]);
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: ({ name, image, id }) => (
        <div className="image-label" style={{ maxWidth: 400 }}>
          <Image
            alt={name}
            style={{ maxWidth: 70, maxHeight: 70 }}
            src={image}
          />
          <span>
            <a href={`/home/product-detail/${id}`}>{truncate(name, 50)} </a>
          </span>
        </div>
      ),
    },
    {
      title: "Pricing",
      dataIndex: "price",
      key: "price",
      render: (price) => formatPrice(price),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        // console.log({ text, record, index }),
        <InputNumber
          disabled={isAddItemLoading || isAddItemFetching}
          defaultValue={Number(text)}
          min={0}
          onChange={(value) =>
            handleStepChange(record.idItemCart, value, record)
          }
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => formatPrice(amount),
    },
    {
      title: "Action ",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleDeleteItem(record.idItemCart)} type="link">
          Delete
        </Button>
      ),
    },
    ,
  ];

  const fetchItemsInCart = async () => {
    return axios
      .get(`${process.env.REACT_APP_URL}/products/in-cart`, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .catch((err) => err.response.data);
  };
  const mutateItemInCart = async ({ id, quantity }) => {
    return axios
      .post(
        `${process.env.REACT_APP_URL}/products/edit-cart/${id}`,
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

  const requestDelete = async ({ id }) => {
    return axios
      .post(
        `${process.env.REACT_APP_URL}/products/remove-from-cart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      )
      .catch((err) => console.log({ error: err }));
  };
  const {
    mutate: mutateDelete,
    isLoading: isDeleteLoading,
    isFetching: isDeleteFetching,
  } = useMutation(requestDelete, {
    onSuccess: () => {
      refetch();
    },
  });
  const {
    mutate: mutateItem,
    isFetching: isAddItemFetching,
    isLoading: isAddItemLoading,
  } = useMutation(mutateItemInCart, {
    onSuccess: (data) => {
      if (data.status === 200) {
        notificate("success", data.data.success);
      } else {
        notificate("error", data.data.error);
      }
    },
  });

  const {
    refetch,
    isLoading: isCartLoading,
    // isFetching: isCartFetching,
    isError: isCartError,
    error: cartError,
  } = useQuery("fetch-item-cart", fetchItemsInCart, {
    refetchInterval: 1000,
    onSuccess: (data) => {
      // console.log({ data });
      if (data.status === 200) {
        if (!data.data.error) {
          const arr = [];
          data.data.map((item, i) => {
            arr.push({
              idItemCart: item._id,
              id: item.product._id,
              idItem: item._id || null,
              key: i + 1,
              product: {
                id: item.product._id,
                image: item.product.images[0],
                name: item.product.name,
              },
              price: item.product.price,
              quantity: item.quantity,
              amount: item.amount,
            });
          });
          setDataSource(arr);
        }
      }
    },
  });

  const {
    mutate: mutateCreateOrder,
    isLoading: isMutateCreateOrderLoading,
    isFetching: isMutateCreateOrderFetching,
  } = useMutation(postCreateOrder, {
    onError: (err) => {
      const errorRs = { ...err };
      notificate("error", errorRs.response.data.error);
      setIsOpenModal(false);
    },
    onSuccess: (data) => {
      // console.log({ data });
      if (data.status == 200) {
        setIsOpenModal(false);
        setNotice("");
        refetch();
        notificate("success", data.data.success);
      }
    },
  });
  if (isCartError) {
    notificate("error", cartError);
  }

  const handleStepChange = (id, value, record) => {
    // console.log(dataSource[record.key - 1]);
    // console.log({ id, value, info });

    mutateItem({ id, quantity: value });
  };
  const onSelectNoneRow = () => {
    setAmount(0);
    setIsDisable(true);
  };
  const onSelectRow = (selected, selectedRows, changeRows) => {
    if (changeRows.length > 0) {
      const amountArr = changeRows.map((i) => Number(i.amount));
      const calcAmount = totalCalc(amountArr);
      setAmount(calcAmount);
      setIsDisable(false);
      setDataCheckout([...changeRows]);
    } else {
      setAmount(0);
      setIsDisable(true);
    }
  };
  const onSelectAllRow = (selected, selectedRows, changeRows) => {
    if (selectedRows.length > 0) {
      const amountArr = selectedRows.map((i) => Number(i.amount));
      const calcAmount = totalCalc(amountArr);
      setAmount(calcAmount);
      setDataCheckout([...changeRows]);
      setIsDisable(false);
    } else {
      setAmount(0);
      setIsDisable(true);
    }
  };

  const handleCheckout = () => {
    setIsOpenModal(true);

    //TODOS create order
    const { phone, address } = userAtom;
    const itemsId = dataCheckout.map((i) => i.idItemCart);
    const data = {
      phone,
      address,
      notice,
      checkoutPayment: radioValue,
      cartItemsId: itemsId,
    };
    console.log({ dataFinal: data });
    mutateCreateOrder(
      { token: cookies.accessToken, data },
      {
        onSuccess: () => {
          // ?Reset values
          setAmount(null);
          setIsDisable(true);
          setDataCheckout([]);
        },
      }
    );
    refetch();
  };
  const handleDeleteItem = (id) => {
    mutateDelete(
      { id },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };
  const propsPaypalButton = {
    createOrder: (data, actions) => {
      console.log({ data, actions });
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: formatPrice(amount, "en"),
            },
          },
        ],
      });
    },
    onApprove: (data, actions) => {
      // Capture the funds from the transaction
      return actions.order.capture().then(function (details) {
        console.log({ details });
        // Show a success message to your buyer
        // alert("Transaction completed by " + details.payer.name.given_name);
        notificate("success", "Checkout success ✅");

        // OPTIONAL: Call your server to save the transaction
        return fetch(`${process.env.REACT_APP_URL}/paypal/complete`, {
          method: "post",
          body: {
            data,
          },
        });
      });
    },
  };
  return (
    <>
      <Table
        pagination={false}
        loading={
          isCartLoading ||
          isAddItemFetching ||
          isAddItemLoading ||
          isDeleteLoading ||
          isDeleteFetching
        }
        rowSelection={{
          type: "checkbox",
          onSelect: onSelectRow,
          onSelectAll: onSelectAllRow,
          onSelectNone: onSelectNoneRow,
        }}
        dataSource={dataSource}
        columns={columns}
      />
<<<<<<< HEAD
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
=======

      <Modal
        okText={"Order"}
        visible={isOpenModal}
        closable={false}
        onCancel={() => setIsOpenModal(false)}
        onOk={handleCheckout}
      >
        <Spin
          spinning={isMutateCreateOrderFetching || isMutateCreateOrderLoading}
        >
          <div>
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <h4>Products</h4>
              <List
                itemLayout="horizontal"
                dataSource={dataCheckout}
                footer={<h3>Total : {formatPrice(amount)}</h3>}
                renderItem={(item) => (
                  <div className="p-3">
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.product.image} />}
                        title={
                          <a
                            href={`/home/product-detail/${item.id}`}
                          >{`${truncate(item.product.name, 50)}`}</a>
                        }
                        description={`${formatPrice(item.price)} (x${
                          item.quantity
                        })`}
                      />
                    </List.Item>
                  </div>
                )}
              />

              <h4>Payment methods</h4>
              <div>
                <Radio.Group onChange={onChangeRadio} value={radioValue}>
                  <Radio value={"cod"}>COD</Radio>
                  <Radio value={"paypal"}>Paypal</Radio>
                </Radio.Group>
              </div>
              {radioValue === "cod" ? (
                <>
                  <h4>Delivery Address</h4>
                  <List
                    itemLayout="horizontal"
                    bordered
                    dataSource={
                      user
                        ? [
                            <>
                              <Text strong>(+84) {user.phone}</Text> -{" "}
                              <Text>{user.address}</Text>{" "}
                            </>,
                          ]
                        : []
                    }
                    renderItem={(item) => (
                      <List.Item>
                        {item}{" "}
                        <Button
                          style={{ marginLeft: 8 }}
                          href="/home/profile"
                          type="link"
                        >
                          Change
                        </Button>
                      </List.Item>
                    )}
                  />
                </>
              ) : (
                <>
                  {/* <Button type="primary">Paypal</Button> */}
                  <PayPalButton {...propsPaypalButton} />
                </>
              )}
              <Input
                value={notice}
                onChange={(e) => setNotice(e.target.value)}
                placeholder="Notice"
                name="notice"
              />
            </Space>
          </div>
        </Spin>
      </Modal>

      <div className="container p-3">
        <div className="fixed-card d-flex justify-content-between">
          <h3 style={{ fontWeight: "normal" }}>
            Total price :
            <span style={{ fontSize: 24, fontWeight: 400, color: "#1890ff" }}>
              {`${Number(amount).toLocaleString()} VND` || 0}
            </span>
          </h3>
          <Button
            // loading={isDeleteLoading}
            type="primary"
            size="large"
            disabled={isDisable}
            onClick={() => setIsOpenModal(true)}
          >
            <Space align="center">
              <DeleteOutlined size={24} />
              <span>Checkout</span>
            </Space>
          </Button>
        </div>
>>>>>>> 9d7a74e5cb328f2e02ea5e0c222a430949cc3a47
      </div>
    </>
  );
}
