import { Space, Avatar, Typography } from "antd";
import React from "react";
import CarouselImages from "./CarouselImages";

export default function CardComment({
  user: { username, userImage },
  content,
  media,
}) {
  return (
    <div>
      <Space direction="vertical">
        <Space>
          {userImage ? <Avatar src={userImage} /> : <Avatar>{username}</Avatar>}
          <Typography.Text>{content}</Typography.Text>
        </Space>
        {media && <CarouselImages images={media} />}
      </Space>
    </div>
  );
}
