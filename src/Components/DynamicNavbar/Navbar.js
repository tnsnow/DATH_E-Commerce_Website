import React from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";

Navbar.propTypes = {
  items: PropTypes.array,
};
export default function Navbar({ items }) {
  return (
    <div className="navbar-perfect">
      <div className="brand">Cartya - for seller </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {items.map((item, id) => (
          <Menu.Item key={id + 1}>
            {item.icon ? item.icon : <a href={item.url}> {item.name}</a>}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
