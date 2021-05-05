import { Form, Input, Button, Divider } from "antd";
import React from "react";

export default function ProductAdd() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="common-content">
      <Divider orientation="left">Products Infomation</Divider>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
