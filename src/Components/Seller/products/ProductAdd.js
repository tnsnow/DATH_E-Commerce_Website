import { Form, Input, Button, Divider, Select, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
ProductAdd.propTypes = {
  onGetForm: PropTypes.func,
  optionsCascader: PropTypes.object,
};
export default function ProductAdd({ onGetForm }) {
  const { Option } = Select;
  const [uploads, setUploads] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    fileImages: [],
  });
  const provinceData = ["Zhejiang", "Jiangsu"];
  const cityData = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
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
    onGetForm({ ...values, images: uploads.fileImages });
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
          <Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={handleProvinceChange}
          >
            {provinceData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <Select
            style={{ width: 120 }}
            value={secondCity}
            onChange={onSecondCityChange}
          >
            {cities.map((city) => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
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
            accept=".png, .jpg, .jpeg"
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
