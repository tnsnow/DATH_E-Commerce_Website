import React from "react";
import PropTypes from "prop-types";
import { Button, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

function FullWidthBanner({ content, ...props }) {
  return (
    <div className="header-banner">
      <Space className="content" direction="vertical">
        {content}
      </Space>
    </div>
  );
}

FullWidthBanner.propTypes = {
  content: PropTypes.elementType,
};

export default FullWidthBanner;
