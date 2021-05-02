import React from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";

const { Item, SubMenu } = Menu;

Sidebar.propTypes = {
  items: PropTypes.array,
};
export default function Sidebar({ items }) {
  return (
    <div>
      <Menu
        // defaultSelectedKeys={["1"]}
        //   defaultOpenKeys={['sub1']}
        style={{ height: "100%", borderRight: 0 }}
        mode="inline"
      >
        {items.map((item, index) => (
          <SubMenu title={item.title} icon={item.icon} key={item.title + index}>
            {item.childs.map((child, i) => (
              <Item key={index}>
                <a href={child.url}>{child.title}</a>
              </Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
}
