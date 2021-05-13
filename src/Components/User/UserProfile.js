import React from "react";
import { Col, Divider, Form, Input, Button, Space } from "antd";
export default function UserProfile() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span : 16 },
    };
  return (
    <>
      <Col span={16}>
        <Divider orientation="left">My Profile</Divider>
        <Form {...layout} name="profile" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Space size="small">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <a href="/home/profile/password">
                <Button htmlType="button">Change password</Button>
              </a>
            </Space>
          </Form.Item>
        </Form>
      </Col>
      <Col span={8} className="p-3 mt-5 justify-content-center d-flex">
        <img
          src="https://picsum.photos/200"
          alt="Avatar"
          className="rounded-img"
        />
      </Col>
    </>
  );
}
