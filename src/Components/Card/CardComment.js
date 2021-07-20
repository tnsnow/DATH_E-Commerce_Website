import { Space, Avatar, Typography, List, Image, Rate } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { fetchComment } from "./api";
import CarouselImages from "./CarouselImages";

export default function CardComment({ id }) {
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["accessToken"]);
  const { isLoading, isFetching, isError, error } = useQuery(
    "fetchComment",
    () => fetchComment({ id, token: cookies.accessToken }),
    {
      onSuccess: (data) => {
        try {
          console.log(data);
          if (data?.status === 200) {
            // console.log(data.data);
            setData(data.data || []);
          }
        } catch (error) {
          console.log(error);
        }
      },
    }
  );
  if (isError) return JSON.stringify(error);
  return (
    <>
      <List
        itemLayout="horizontal"
        loading={isLoading || isFetching}
        dataSource={data}
        pagination={{
          className: "d-flex justify-content-center",
          position: "bottom",
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        renderItem={({
          user: { username, userImage },
          content,
          rate,
          media,
        }) => (
          <>
            <Space direction="vertical" className="w-100 p-3">
              <Space align="start">
                <div style={{ padding: 5 }}>
                  {userImage ? (
                    <Avatar src={userImage} />
                  ) : (
                    <Avatar>{username}</Avatar>
                  )}
                </div>
                <Space direction="vertical" size={5}>
                  <Title level={4}>{username}</Title>
                  <Rate
                    style={{ fontSize: 14 }}
                    defaultValue={rate || 0}
                    disabled
                    allowHalf
                  />
                  <Text style={{ fontSize: 16 }} type="secondary">
                    {content}
                  </Text>
                  <div className="w-100">
                    {media.map((img, i) => (
                      <Image src={img} alt={i} width={50} height={50} />
                    ))}
                  </div>
                </Space>
              </Space>
            </Space>
          </>
        )}
      />
    </>
  );
}
