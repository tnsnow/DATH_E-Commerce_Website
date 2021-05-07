import { Form, Input, Button, Divider, Space, List, Upload, Modal } from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
ProductAdd.propTypes = {
  onGetForm: PropTypes.func,
  optionsCascader: PropTypes.object,
  dataParent: PropTypes.object,
  dataChild: PropTypes.object,
  handleClickParent: PropTypes.func,
  isCreateLoading: PropTypes.bool,
};
export default function ProductAdd({
  handleClickParent,
  onGetForm,
  dataParent,
  dataChild,
  isCreateLoading,
}) {
  const [category, setCategory] = useState({ parent: "", child: "" });
  const [isActive, setIsActive] = useState({ parent: "", child: "" });
  const [uploads, setUploads] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    fileImages: [],
  });

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

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
  const handleFile = async (file, fileList) => {
    setUploads({ ...uploads, fileImages: [...uploads.fileImages, file] });
    return false;
  };
  const handleChange = ({ fileList }) => setUploads({ ...uploads, fileList });
  const onFinish = (values) => {
    // console.log("Success:", values);
    onGetForm({ ...values, images: uploads.fileImages, category });
  };

  return (
    <div className="common-content">
      <h1 className="header-txt-custom">New product</h1>
      <Divider orientation="left">Product's info</Divider>
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
        <Form.Item label="Product's Price" name="price">
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
        <Divider orientation="left">Category</Divider>
        <Form.Item wrapperCol={{ offset: 1, span: 24 }}>
          <Space direction="horizontal" align="start">
            {dataParent.parentData && (
              <List
                className="fix-category"
                size="small"
                bordered
                loading={dataParent.isParenLoading}
                dataSource={dataParent.parentData}
                renderItem={
                  dataParent.parentData.length > 0
                    ? (item) => (
                        <List.Item
                          className={
                            isActive.parent == item.value ? "custom-active" : ""
                          }
                          onClick={() => {
                            setIsActive({ ...isActive, parent: item.value });
                            handleClickParent(item);
                            setCategory({ ...category, parent: item.value });
                          }}
                          key={item.value}
                        >
                          {item.label} <RightOutlined size={24} />
                        </List.Item>
                      )
                    : ""
                }
              />
            )}

            {dataChild ? (
              <List
                className="fix-category"
                size="small"
                bordered
                loading={dataChild.isChildLoading}
                dataSource={dataChild.childData}
                renderItem={
                  dataChild.childData.length > 0
                    ? (item) => (
                        <List.Item
                          className={
                            isActive.child == item.value ? "custom-active" : ""
                          }
                          onClick={() => {
                            setIsActive({ ...isActive, child: item.value });

                            setCategory({ ...category, child: item.value });
                          }}
                          key={item.value}
                        >
                          {item.label}
                        </List.Item>
                      )
                    : ""
                }
              />
            ) : null}
          </Space>
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
            name="files"
            accept=".jpg,.png,.JPG,.PNG,.JPEG,.jpeg,.svg,.jfif"
            listType="picture-card"
            beforeUpload={handleFile}
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
          <Button loading={isCreateLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
