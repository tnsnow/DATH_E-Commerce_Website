/* eslint-disable */
import React from "react"; // useState
// import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Checkbox, Spin, notification ,Space, Typography} from "antd";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const antLoadingBtn = <LoadingOutlined style={{ fontSize: 24 }} spin />;

//noti
const openNotification = ({ ...props }) => {
  notification.open({
    ...props,
  });
};

const postRegisterUser = (data) => {
  return axios.post(`${process.env.REACT_APP_URL}/users/register/`, data);
};
export default function RegisterForm(props) {
  const history = useHistory();
  const [form] = Form.useForm();
  const { mutate, isLoading } = useMutation((data) => postRegisterUser(data), {
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
  });
  const onFinish = ({ username, password, email }) => {
    //trigger this function when submitted
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
    >
      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="username"
          size="large"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: false,
            },
          ]}
        >
          <Input placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="email"
          size="large"
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
          <Input placeholder="Email"/>
        </Form.Item>

        <Form.Item
          name="password"
          size="large"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item
          name="confirm"
          size="large"
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
          <Input.Password placeholder="Confirm Password"/>
        </Form.Item>
        <Form.Item
          name="phone"
          size="large"
          label=""
          rules={[
            { required: false, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Phone Number" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="agreement" valuePropName="checked">
          <Space direction="vertical" size={10} className="w-100">
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
         <Button className="w-100" size="large" type="primary" htmlType="submit">
            {isLoading ? <Spin indicator={antLoadingBtn} /> : "Register"}
          </Button>
          <Typography.Text type="secondary">Already have account ? <a href="/login">Login</a></Typography.Text></Space>
        </Form.Item>
        <Form.Item>

        </Form.Item>
      </Form>
    </div>
  );
}

// export default index;
