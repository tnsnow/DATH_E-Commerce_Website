import React, { useState } from "react";
import { Menu, Input, Space, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
//Components import here

//Page = Multiple Components
const { SubMenu } = Menu;
const { Search } = Input;



export default function Home() {
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onSearch = value => console.log(value);

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Space size="middle">
          <Button type="primary">Login</Button>
          <Button>Register</Button>
        </Space>
        <Menu.Item key="iconBell">
          <BellOutlined />
        </Menu.Item>
      </Menu>
    </div >
  );
}
