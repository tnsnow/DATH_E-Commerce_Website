import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Space, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Search } = Input;

function Navbar(props) {
    const [current, setCurrent] = useState();

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const onSearch = value => console.log(value);

    return (
        <div id="menuComponent" className="section-navbar">
            <div className="container">
                <div className="d-flex justify-content-between section-navbar__top">
                    <div className="section-navbar__top--left">
                        <Menu mode="horizontal">
                            <Space>
                                <Menu.Item key="">
                                    <a href="#">Kênh người bán</a>
                                </Menu.Item>
                                <Menu.Item key="" >
                                    <div className="d-flex">
                                        <p>Kết nối với chúng tôi:</p>
                                        <div className="d-flex social">
                                            <div className="social__item">
                                                <a href="#">fb</a>
                                            </div>
                                            <div className="social__item">
                                                <a href="#">ins</a>
                                            </div>
                                        </div>
                                    </div>
                                </Menu.Item>
                            </Space>
                        </Menu>
                    </div>
                    <div className="section-navbar__top--right">
                        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                            <Menu.Item key="login">
                                <a href="/Login">Login</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/Register">Register</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;