import React from "react";
import PropTypes from "prop-types";
import { Table, Space, Tag, Image, Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

Cart.propTypes = {
  items: PropTypes.array,
};

export default function Cart({ items }) {
  const dataSource = [];

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      // render: ({ name, image }) => (
      //   <div className="image-label" style={{ width: 250 }}>
      //     <Image alt={name} width={56} src={image} />
      //     <span>{name}</span>
      //   </div>
      // ),
    },
    {
      title: "Pricing",
      dataIndex: "price",
      key: "price",
      // render: (tags) => (
      //   <>
      //     {tags.map((tag) => (
      //       <>
      //         <Tag color="blue" key={tag.name}>
      //           {tag.name}
      //         </Tag>
      //       </>
      //     ))}
      //   </>
      // ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      // sorter: (a, b) => b.price - a.price,
      // render: (price) => "₫ " + numeral(price).format("0,0[.]00"),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      // sorter: (a, b) => b.available - a.available,
      // render: (amount) =>
      //   amount == 0 ? (
      //     <Tag color="red" key={amount}>
      //       Out of stock
      //     </Tag>
      //   ) : (
      //     amount
      //   ),
    },
    {
      title: "Action",
      key: "action",
      // render: (text) => (
      //   <Space size="middle">
      //     <a href={`/seller/products/${text.name.id}`}>Edit</a>
      //   </Space>
      // ),
    },
    ,
  ];

  return (
    <div className="container p-3">
      <Table
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
