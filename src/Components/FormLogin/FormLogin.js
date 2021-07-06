/* eslint-disable */
import React, { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";
import { decodeToken } from "react-jwt";
import { Form, Input, Button, Checkbox, Space, notification } from "antd";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { useRecoilState, useSetRecoilState } from "recoil";

//atoms & reducers import
import { currentUser, isLogin } from "../../recoil/user/atom";
//api fetching
const postLoginUser = (data) => {
  return axios
    .post(`${process.env.REACT_APP_URL}/users/login/`, data)
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
  const [login, setLogin] = useRecoilState(isLogin);
  const setUserState = useSetRecoilState(currentUser);
  const [cookies, setCookies] = useCookies([]);
  const { mutate, isLoading, isError, error } = useMutation(
    (data) => postLoginUser(data),
    {
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
          // set atomUser & loginState
          setLogin(true);
          setUserState({ ...data.user });
          //redirect to previous path in history stack
          history.push("/home");
        } else {
          openNotification({
            message: "Error",
            description: data.error,
            icon: <WarningOutlined style={{ color: "#fa3939" }} />,
          });
        }
      },
    }
  );
  const onFinish = ({ email, password }) => {
    mutate({
      email,
      password,
    });
  };

  return (
    <div className="">
      <Form
        name="login"
        className=""
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
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            size="large"
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
          <Space
            size="middle"
            direction="vertical"
            className="w-100 text-center"
          >
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="w-100"
            >
              {isLoading ? <LoadingOutlined /> : "Log in"}
            </Button>
            <div>Or</div>
            <a href="/register">register now!</a>
          </Space>
          {isError && <span>{error}</span>}
        </Form.Item>
      </Form>
    </div>
  );
}
