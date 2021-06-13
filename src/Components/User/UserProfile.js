import React, { useEffect, useState } from "react";
import {
  Col,
  Divider,
  Form,
  Input,
  Button,
  Space,
  Skeleton,
  Upload,
  InputNumber,
  Spin,
  Row,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "react-query";
import { fetchUser, mutateUpdateUser } from "./functions";
import { useCookies } from "react-cookie";
import { useNotification } from "../../hooks";
import { useForm } from "antd/lib/form/Form";

export default function UserProfile() {
  const [form] = useForm();
  const [cookies] = useCookies(["accessToken"]);
  const [imageUrl, setImageUrl] = useState("");
  const notificate = useNotification();
  const [uploads, setUploads] = useState({
    defaultFileList: [],
    file: {},
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const { isLoading, isError, error, refetch } = useQuery(
    "fetchingUser",
    () => fetchUser({ token: cookies.accessToken }),
    {
      onSuccess: (data) => {
        if (data?.status == 200) {
          console.log({ data });
          setImageUrl(data?.data?.userImage);
          // const { username, address, email, userImage, phone } = data.data;
          // setDataForm({ ...data.data });
          form.setFieldsValue({ ...data.data });
          // console.log(dataForm);
        }
      },
    }
  );
  const {
    mutate: mutateUpdate,
    isLoading: isUpdateLoading,
    isFetching: isUpdateFetching,
  } = useMutation(mutateUpdateUser, {
    onSuccess: (data) => {
      if (data?.data?.success) {
        notificate("success", data.data.success);
        refetch();
      }
    },
    onError: (data) => {
      console.log({ error: data });
    },
  });
  const handleChange = ({ fileList }) => {
    console.log(fileList);
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
        setImageUrl(file.response.url);
      }
      return file;
    });
    setUploads({ fileList: [...fileList] });
  };

  const onFinish = (values) => {
    // console.log("Success:", values);
    const data = {
      ...values,
      userImage: uploads.fileList[0] ? uploads.fileList[0].url : null,
    };
    console.log(data);
    mutateUpdate({ data, token: cookies.accessToken });
  };
  // if (isLoading || isUpdateFetching || isUpdateLoading) return <div>Loading</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Row>
        <Col span={16}>
          <Spin spinning={isLoading || isUpdateFetching || isUpdateLoading}>
            <Divider orientation="left">My Profile</Divider>
            <Form
              form={form}
              // initialValues={dataForm}
              {...layout}
              name="profile"
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
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
              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone">
                <InputNumber style={{ width: 200 }} />
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
          </Spin>
        </Col>
        <Col span={8} className="p-3 mt-5 justify-content-center d-flex">
          <Space
            align="center"
            direction="vertical"
            size={20}
            style={{ textAlign: "center" }}
          >
            <img
              src={imageUrl || `https://i.pravatar.cc/${70}`}
              alt="Avatar"
              className="rounded-img"
            />
            <Upload
              action="http://localhost:4001/products/image/upload"
              name="images"
              accept=".jpg,.png,.JPG,.PNG,.JPEG,.jpeg,.svg,.jfif"
              listType="text"
              fileList={uploads.fileList}
              onChange={handleChange}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Space>
        </Col>
      </Row>
    </>
  );
}
