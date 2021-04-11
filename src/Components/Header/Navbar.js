import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Space, Button, Popover } from 'antd';
import { QuestionCircleOutlined, ShoppingCartOutlined, BellOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo/logo_cartya_black.png";

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
        <div id="menuComponent" className="section-navbar" >
            <div className="container">
                <div className="d-flex justify-content-between section-navbar__top">
                    <div className="section-navbar__item section-navbar__top--left">
                        <Menu mode="horizontal">
                            <Space>
                                <Menu.Item>
                                    <a href="#">Kênh người bán</a>
                                </Menu.Item>
                                <Menu.Item>
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
                    <div className="section-navbar__item section-navbar__top--right">
                        <Menu mode="horizontal">
                            <Space>
                                <Menu.Item>
                                    <BellOutlined />
                                    <span>Thông báo</span>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="/Login">
                                        <QuestionCircleOutlined />
                                        <span>Hỗ Trợ</span>
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="login">
                                    <a href="/Login">Login</a>
                                </Menu.Item>
                                <Menu.Item key="register">
                                    <a href="/Register">Register</a>
                                </Menu.Item>
                            </Space>
                        </Menu>
                    </div>
                </div>

                <div className="d-flex justify-content-between section-navbar__bottom">
                    <Menu mode="horizontal">
                        <Space>
                            <Menu.Item>
                                <a href="/">
                                    <img src={logo} alt="Logo" />
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                            </Menu.Item>
                            <Menu.Item>
                                <a hrf="">
                                    <ShoppingCartOutlined />
                                </a>
                            </Menu.Item>
                        </Space>
                    </Menu>
                </div>
            </div>
        </div >
    );
}

export default Navbar;