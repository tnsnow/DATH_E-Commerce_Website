import { Modal, Rate, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import axios from "axios";
import { useNotification } from "hooks";
import { useMutation } from "react-query";
import { createReview } from "./api";

export default function CommentModal({
  openState: { isOpen, setIsOpen },
  token,
  id,
  ...props
}) {
  const [rate, setRate] = useState(0);
  const [content, setContent] = useState("");
  const [uploads, setUploads] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    fileImages: [],
  });
  const notificate = useNotification();
  const { mutate, isLoading } = useMutation(createReview);
  const handleRateChange = (value) => {
    //value : number
    console.log(value);
    setRate(value);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
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
        `${process.env.REACT_APP_URL}/products/image/destroy/${response.public_id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => notificate("error", err));
  };
  const handleSubmit = () => {
    if (content == "") {
      notificate("error", "Content cannot blank");
      return;
    }
    const urls = uploads.fileList?.map((i) => i.url);
    mutate(
      { token, id, body: { content, media: urls } },
      {
        onSuccess: (data) => {
          try {
            if (data.status == 200) {
              notificate("success", data.data.success);
              setIsOpen(false);
            }
          } catch (error) {
            notificate("error", data.data.error);
            console.log(error);
          }
        },
      }
    );
  };
  return (
    <>
      <Modal
        {...props}
        visible={isOpen}
        onOk={handleSubmit}
        onCancel={() => setIsOpen(false)}
        confirmLoading={isLoading}
      >
        <Space className="w-100 p-3" size="large" direction="vertical">
          <div className="centered">
            <Rate
              style={{ fontSize: 36, textAlign: "center" }}
              defaultValue={0}
              onChange={handleRateChange}
            />
          </div>
          <TextArea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your comment ..."
          />
          <Upload
            action={`${process.env.REACT_APP_URL}/products//image/upload`}
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
            )}{" "}
          </Upload>
        </Space>
      </Modal>
    </>
  );
}
