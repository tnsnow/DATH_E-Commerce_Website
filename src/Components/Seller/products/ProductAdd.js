import { Form, Input, Button, Divider, Cascader, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
ProductAdd.propTypes = {
  onGetForm: PropTypes.func,
};
export default function ProductAdd({ onGetForm }) {
  const [uploads, setUploads] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [
      // {
      //   uid: "-1",
      //   name: "image.png",
      //   status: "done",
      //   url:
      //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      // },
      // {
      //   uid: "-2",
      //   name: "image.png",
      //   status: "done",
      //   url:
      //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      // },
      // {
      //   uid: "-3",
      //   name: "image.png",
      //   status: "done",
      //   url:
      //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      // },
      // {
      //   uid: "-4",
      //   name: "image.png",
      //   status: "done",
      //   url:
      //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      // },
      // {
      //   uid: "-xxx",
      //   percent: 50,
      //   name: "image.png",
      //   status: "uploading",
      //   url:
      //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      // },
      // {
      //   uid: "-5",
      //   name: "image.png",
      //   status: "error",
      // },
    ],
  });
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const optionsCascader = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const handleCancel = () => {
    setUploads({
      ...uploads,
      previewVisible: false,
    });
  };
  const handlePreview = async (file) => {
    console.log(file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setUploads({
      ...uploads,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const handleChange = ({ fileList }) => setUploads({ ...uploads, fileList });
  const onFinish = (values) => {
    // console.log("Success:", values);
    onGetForm({ ...values, images: uploads.fileList });
  };
  return (
    <div className="common-content">
      <Divider orientation="left">Add new Product</Divider>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item
          label="Product's name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Product's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product's Description"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input Product's Description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product's Brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Please input Product's Brand!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Divider orientation="left">Sale Infomation</Divider>
        <Form.Item
          label="Product's Price"
          name="price"
          rules={[
            {
              required: true,

              message: "Product price must be number & limit value is 1000!",
            },
          ]}
        >
          <Input type={"number"} addonBefore={"VND"} defaultValue={1000} />
        </Form.Item>
        <Form.Item
          label="Available"
          name="available"
          rules={[
            {
              // required: true,
              message: "Available value cannot blank",
            },
          ]}
        >
          <Input defaultValue={0} min={0} type={"number"} />
        </Form.Item>
        <Form.Item
          label="Categories"
          name="categories"
          rules={[
            {
              required: true,
              message: "Categories is required",
            },
          ]}
        >
          <Cascader options={optionsCascader} />
        </Form.Item>
        <Divider orientation="left">Product images</Divider>
        <Form.Item
          label="Images"
          rules={[
            {
              required: true,
              message: "Product's images must have at least 1 image ",
            },
          ]}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={uploads.fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {uploads.fileList.length >= 10 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
          <Modal
            visible={uploads.previewVisible}
            title={uploads.previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{ width: "100%" }}
              src={uploads.previewImage}
            />
          </Modal>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
