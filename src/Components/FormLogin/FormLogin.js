/* eslint-disable */
import React from "react"; // useState
// import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import { Form, Input, Button, Checkbox, Space, notification } from "antd";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

//api fetching
const postLoginUser = (data) => {
  return axios
    .post("http://localhost:4001/users/login/", data)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.data;
      }
    });
};

//noti
const openNotification = ({ ...props }) => {
  notification.open({
    ...props,
  });
};

export default function FormLogin(props) {
  const history = useHistory();
  const [cookies, setCookies] = useCookies([]);
  const { mutate, isLoading } = useMutation((data) => postLoginUser(data), {
    onError: (err) => {
      openNotification({
        message: "Error",
        description: err,
        icon: <WarningOutlined style={{ color: "#fa3939" }} />,
      });
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        openNotification({
          message: "Success",
          description: data.success,
          icon: <CheckCircleOutlined style={{ color: "#36e379" }} />,
        });

        //handle tokens here
        setCookies("accessToken", data.accessToken, { path: "/" });
        //redirect to home page
        history.push("/");
      }

      if (data.error) {
        //error notification
        openNotification({
          message: "Error",
          description: data.error,
          icon: <WarningOutlined style={{ color: "#fa3939" }} />,
        });
      }
    },
  });
  const onFinish = ({ email, password }) => {
    mutate({
      email,
      password,
    });
  };

  return (
    <div className="mt-5 d-flex justify-content-center section-form__content--form">
      <Form
        name="login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Space size="middle">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isLoading ? <LoadingOutlined /> : "Sign in"}
            </Button>
            Or <a href="/register">register now!</a>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
