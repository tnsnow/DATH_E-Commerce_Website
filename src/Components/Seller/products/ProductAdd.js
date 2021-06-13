import {
  Form,
  Input,
  Button,
  Divider,
  Space,
  List,
  InputNumber,
  Upload,
  Modal,
} from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNotification } from "../../../hooks";
import { Editor, EditorState } from "draft-js";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
  const notificate = useNotification();
  const [edit, setEdit] = useState("");
  const [category, setCategory] = useState({
    parent: { label: "", value: "" },
    child: { label: "", value: "" },
  });

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

  const handleChange = ({ fileList }) => {
    // console.log(info);
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setUploads({ fileList: [...fileList] });
  };
  const handleRemove = ({ response }) => {
    axios
      .post(
        `http://localhost:4001/products/image/destroy/${response.public_id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => notificate("error", err));
  };
  const onFinish = (values) => {
    // console.log("Success:", values);
    const arr = uploads.fileList.map((file) => file.url);
    onGetForm({ ...values, images: arr, category, desc: edit });
  };

  return (
    <div className="common-content">
      <h1 className="header-txt-custom">New product</h1>
      <Divider orientation="left">Product images</Divider>
      <Form.Item labelCol={{ span: 1, offset: 4 }} label=" ">
        <Upload
          action="http://localhost:4001/products//image/upload"
          name="images"
          accept=".jpg,.png,.JPG,.PNG,.JPEG,.jpeg,.svg,.jfif"
          listType="picture-card"
          // beforeUpload={beforeUpload}
          progress
          fileList={uploads.fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
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
        <Form.Item
          label="Product's Description"
          name=""
          rules={[
            {
              required: true,
              message: "Please input Product's Description!",
            },
          ]}
        >
          {/* <Input.TextArea
            maxLength={3000}
            allowClear={true}
            showCount={({ count, maxLength }) => `${count}/${maxLength}`}
            autoSize={{ minRows: 2, maxRows: 10 }}
          /> */}
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setEdit(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </Form.Item>
        {/* <Divider orientation="left">Edit Test</Divider> */}

        <Divider orientation="left">Sale Infomation</Divider>
        <Form.Item
          style={{ width: "100%" }}
          rules={[
            {
              required: true,
              message: "Price value is require and min 1000 ",
            },
          ]}
          label="Product's Price"
          name="price"
        >
          <InputNumber
            style={{ width: "100%" }}
            defaultValue={1000}
            min={1000}
            formatter={(value) => `${value} ₫`}
          />
        </Form.Item>
        <Form.Item
          label="Available"
          name="available"
          rules={[
            {
              required: true,
              message: "Available value is require ",
            },
          ]}
        >
          <InputNumber type={"number"} />
        </Form.Item>
        <Divider orientation="left">Category</Divider>
        <Form.Item
          label={
            category.parent.label !== "" &&
            `${category.parent.label} > ${category.child.label}`
          }
          wrapperCol={{ offset: 1, span: 24 }}
        >
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
                            category.parent.value == item.value
                              ? "custom-active"
                              : ""
                          }
                          onClick={() => {
                            // setIsActive({ ...isActive, parent: item.value });
                            handleClickParent(item);
                            setCategory({
                              ...category,
                              parent: { value: item.value, label: item.label },
                            });
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
                            category.child.value == item.value
                              ? "custom-active"
                              : ""
                          }
                          onClick={() => {
                            // setIsActive({ ...isActive, child: item.value });

                            setCategory({
                              ...category,
                              child: { value: item.value, label: item.label },
                            });
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

        <Form.Item wrapperCol={{ offset: 5, span: 12 }}>
          <Button
            size="large"
            loading={isCreateLoading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
