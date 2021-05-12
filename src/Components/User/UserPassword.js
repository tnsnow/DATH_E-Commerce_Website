import React from "react";

import { Col, Divider, Form, Input, Button, Space } from "antd";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
export default function UserPassword() {
  return (
    <Col span={24}>
      <Divider orientation="left">Change password</Divider>
      <Form {...layout} name="profile">
        <Form.Item
          label="Old password"
          name="password"
          hasFeedback
          rules={[
            { required: true, message: "Please input your old password" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="New password"
          name="newPassword"
          rules={[
            {
              required: true,
              whitespace: false,
              message: "Please input your new password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              whitespace: false,
              message: "Please input your confirm password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Col>
  );
}
