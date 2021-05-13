import {
  Form,
  Input,
  Button,
  Divider,
  Space,
  List,
  Upload,
  Modal,
  InputNumber,
  Skeleton,
} from "antd";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useParams } from "react-router";
import { func, object, bool } from "prop-types";
import { useQuery } from "react-query";
import axios from "axios";
import { useNotification } from "../../../hooks";

ProductEdit.propTypes = {
  onGetForm: func,
  optionsCascader: object,
  dataParent: object,
  dataChild: object,
  handleClickParent: func,
  isEditLoading: bool,
};
export default function ProductEdit({
  handleClickParent,
  onGetForm,
  dataParent,
  dataChild,
  isEditLoading,
}) {
  const { id } = useParams();
  const notification = useNotification();
  const fetchProductId = () => {
    return axios.get(`http://localhost:4001/products/single/${id}`);
  };

  const [defaultValue, setDefaultValue] = useState({
    name: "",
    desc: "",
    brand: "",
    price: 1000,
    available: 0,
  });

  const [category, setCategory] = useState({
    parent: { label: "", value: "" },
    child: { label: "", value: "" },
  });

  const [uploads, setUploads] = useState({
    previewVisible: false,
    defaultFileList: [],
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
    // console.log(file);
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
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setUploads({ fileList: [...fileList] });
  };
  const onFinish = (values) => {
    // console.log("Success:", values);
    const arr = uploads.fileList.map((file) => file.url);
    onGetForm({
      ...values,
      // images: uploads.fileList,
      images: arr,
      category,
      id,
    });
  };
  const { isLoading, error, isError } = useQuery(
    "fetchSingleProduct",
    fetchProductId,
    {
      enabled: !!id,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        try {
          if (data.status === 200) {
            const { data: dataProd } = data;
            //handle category
            let cateObj = category;
            let imageList = [];
            dataProd[0].categories.map((cate) => {
              if (!cate.parent) {
                cateObj = {
                  ...cateObj,
                  parent: {
                    label: cate.name,
                    value: cate._id,
                  },
                };
              } else {
                cateObj = {
                  ...cateObj,
                  child: {
                    label: cate.name,
                    value: cate._id,
                  },
                };
              }
            });
            dataProd[0].images.map((image, i) => {
              imageList.push({
                uid: i,
                name: dataProd[0].name + i,
                status: "done",
                url: image,
                response: { url: image },
              });
            });
            setUploads({
              ...uploads,
              fileList: [...uploads.fileList, ...imageList],
              fileImages: [dataProd[0].images],
            });
            setCategory(cateObj);

            //get basic values
            setDefaultValue({
              ...defaultValue,
              name: dataProd[0].name,
              brand: dataProd[0].brand,
              price: dataProd[0].price,
              desc: dataProd[0].desc,
              available: dataProd[0].available,
            });
          }
        } catch (error) {
          notification("error", error);
        }
      },
    }
  );
  const handleRemove = ({ response }) => {
    // console.log(response);
    if (response.public_id) {
      axios
        .post(
          `http://localhost:4001/products/image/destroy/${response.public_id}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => notification("error", err));
    } else {
      const arr = response.url.split("/");
      const public_id = arr[arr.length - 1].split(".")[0];
      // console.log(public_id);
      axios
        .post(`http://localhost:4001/products/image/destroy/${public_id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => notification("error", err));
    }
  };
  if (isLoading || isEditLoading)
    return (
      <Skeleton
        className="custom-ant-skeleton"
        active
        paragraph={{ rows: 10 }}
      />
    );

  if (isError) return <h1>{error}</h1>;

  return (
    <>
      <div className="common-content">
        <h1 className="header-txt-custom">Product Detail</h1>
        <Divider orientation="left">Product images</Divider>
        <Form.Item label="Images" name="images">
          <Upload
            action="http://localhost:4001/products//image/upload"
            name="images"
            accept=".jpg,.png,.JPG,.PNG,.JPEG,.jpeg,.svg,.jfif"
            listType="picture-card"
            // beforeUpload={handleFile}
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
        <Form
          initialValues={defaultValue}
          {...layout}
          name="basic"
          onFinish={onFinish}
        >
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
            <Input.TextArea
              maxLength={3000}
              allowClear={true}
              showCount={({ count, maxLength }) => `${count}/${maxLength}`}
              autoSize={{ minRows: 2, maxRows: 10 }}
            />
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
                type: "number",
                required: true,
                message: "Available value is require ",
              },
            ]}
          >
            <InputNumber type={"number"} />
          </Form.Item>
          <Divider orientation="left">Category</Divider>
          <Form.Item
            name="categories"
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
                                parent: {
                                  value: item.value,
                                  label: item.label,
                                },
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
            <Button loading={isEditLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
