import Title from "antd/lib/typography/Title";
import React from "react";

export default function CustomTitle({ text, ...props }) {
  const style = {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(0,0,0,.02)",
    margin: "10px 0",
  };
  return (
    <div {...props} style={style}>
      <Title level={4}>{text}</Title>
    </div>
  );
}
