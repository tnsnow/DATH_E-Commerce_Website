import { Button, Divider, Image, Space, Table, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import Paragraph from "antd/lib/typography/Paragraph";
import { TypeTag } from "Components/Orders/components/TypeTag";
import { useNotification } from "hooks";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { currentUser } from "recoil/user/atom";
import { fetchOrderData, mutateStatus } from "./api";

export default function OrderList() {
  const [dataSource, setDataSource] = useState([]);
  const [cookies] = useCookies(["accessToken"]);
  const notificate = useNotification();
  const seller = useRecoilValue(currentUser);
  console.log({ seller });

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      width: "500px",
      key: "name",
      render: ({ name, images }, { user: { userImage, username } }) => (
        <Space direction="vertical" size={20}>
          <Space>
            {userImage ? (
              <Avatar size="small" src={userImage} />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
            <Typography.Text type="secondary">{username}</Typography.Text>
            <hr></hr>
          </Space>
          <Space className="w-100">
            <Image alt={name} width={56} src={images[0]} />
            <Paragraph ellipsis={{ rows: 2, tooltip: true }}>{name}</Paragraph>
          </Space>
          {/* <span>{name}</span> */}
        </Space>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => b.amount - a.amount,
      render: (amount) =>
        Intl.NumberFormat("vn-VN", {
          style: "currency",
          currency: "VND",
        }).format(amount),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => b.quantity - a.quantity,
      render: (quantity) => `x ${quantity}`,
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "status",
      render: (status) => (
        <TypeTag className="d-flex align-items-center" type={status} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => handleMutate({ id: record._id, status: "shipping" })}
          >
            Delivery
          </Button>
        </Space>
      ),
    },
    ,
  ];
  const { isLoading, isFetching, isError, refetch } = useQuery(
    "fetchingOrder",
    () => fetchOrderData({ id: seller._id }),
    {
      enable: !!seller._id,
      refetchInterval: 2000,
      onSuccess: (data) => {
        try {
          if (data.status == 200) {
            // console.log(data.data)
            const source = [];
            data.data?.map((order) => {
              order.products.map((prod) => {
                source.push({
                  ...prod,
                  user: order.user,
                });
              });
            });
            console.log(source);
            setDataSource(source);
          }
        } catch (error) {
          console.log(error);
          notificate("error", data.data.error);
        }
      },
    }
  );
  const { mutate, isLoading: isStatusLoading } = useMutation(mutateStatus);
  const handleMutate = ({ id, status }) => {
    mutate(
      { id, status, token: cookies.accessToken },
      {
        onSuccess: (data) => {
          console.log(data.data);
          refetch();
        },
      }
    );
  };

  if (isError) return <div>Error</div>;
  return (
    <div>
      <Table
        loading={isLoading || isStatusLoading}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 6,
        }}
      />
    </div>
  );
}
