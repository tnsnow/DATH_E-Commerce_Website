import React, { useEffect } from "react";
import { Col, Divider, Form, Input, Button, Space, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import { useNotification } from "../../hooks";
import { mutateUpdateUser } from "./functions";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
export default function UserPassword() {
  const notificate = useNotification();
  const [form] = useForm();
  const [cookies] = useCookies(["accessToken"]);
  const { mutate: mutateUpdate, isLoading: isUpdateLoading } =
    useMutation(mutateUpdateUser);

  const handleFinish = (values) => {
    mutateUpdate(
      { data: values, token: cookies.accessToken },
      {
        onSuccess: (data) => {
          if (data?.status === 200) {
            notificate("success", data.data?.success);
            form.resetFields();
          }
        },
        onError: (error) => {
          const err = { ...error };
          // console.log(err);
          notificate("error", err.response.data.error);
        },
      }
    );
  };
  return (
    <Col span={24}>
      <Divider orientation="left">Change password</Divider>
      <Spin spinning={isUpdateLoading}>
        <Form form={form} onFinish={handleFinish} {...layout} name="profile">
          <Form.Item
            label="Old password"
            name="oldPassword"
            hasFeedback
            rules={[
              { required: true, message: "Please input your old password" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="New password"
            name="password"
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
            dependencies={["password"]}
            rules={[
              {
                required: true,
                whitespace: false,
                message: "Please input your confirm password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
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
      </Spin>
    </Col>
  );
}
