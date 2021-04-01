import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Checkbox, Spin, notification } from "antd";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
// import LoginImage from "../../assets/images/form_customer/login_img.jpg";

const antLoadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

//noti
const openNotification = ({ ...props }) => {
  notification.open({
    ...props,
  });
};

const postRegisterUser = (data) => {
  return axios.post("http://localhost:4001/users/register/", data);
};
export default function RegisterForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();
  const { mutate, isError, error, isLoading } = useMutation(
    (data) => postRegisterUser(data),
    {
      onError: (err) => {
        openNotification({
          message: "Error",
          description: err,
          icon: <WarningOutlined style={{ color: "#fa3939" }} />,
        });
      },
      onSuccess: ({ data }) => {
        console.log(data);
        if (data.error) {
          openNotification({
            message: "Error",
            description: data.error,
            icon: <WarningOutlined style={{ color: "#fa3939" }} />,
          });
        }
        if (data.success) {
          openNotification({
            message: "Success",
            description: data.success,
            icon: <CheckCircleOutlined style={{ color: "#36e379" }} />,
          });
          history.push("/login");
        }
      },
    }
  );
  const onFinish = ({ username, password, email }) => {
    //trigger this function when submitted
    // console.log("Received values of form: ", values);
    //post
    const newData = {
      username,
      password,
      email,
    };
    try {
      mutate(newData);
    } catch (error) {
      console.log(error);
    }
    //success

    //redirect to login
  };

  return (
    <div
      className="mt-3 d-flex justify-content-center"
      style={{ width: props.width }}
    >
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="username"
          label="Username"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: false, message: "Please input your phone number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="agreement" valuePropName="checked">
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isLoading ? <Spin indicator={antLoadingIcon} /> : "Register"}
            {/* register */}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

// export default index;
