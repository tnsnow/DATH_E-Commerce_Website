import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Space, Button, Popover } from 'antd';
import { QuestionCircleOutlined, ShoppingCartOutlined, BellOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo/logo_cartya_black.png";

// const { SubMenu } = Menu;
const { Search } = Input;

function Navbar(props) {
    const onSearch = (value) => console.log(value);

    const handleClick = (e) => {
        console.log('click ', e);
        // setCurrent(e.key);
    };

    // const onSearch = value => console.log(value);

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
                                    <div className="d-flex left-social">
                                        <p className="left-social__title">Kết nối với chúng tôi:</p>
                                        <div className="d-flex left-social__content">
                                            <div className="left-social__content--item">
                                                <a href="#">
                                                    <FacebookOutlined className="item-icon" />
                                                </a>
                                            </div>
                                            <div className="left-social__content--item">
                                                <a href="#">
                                                    <InstagramOutlined className="item-icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Menu.Item>
                            </Space>
                        </Menu>
                    </div>
                    <div className="section-navbar__item section-navbar__top--right">
                        <Menu mode="horizontal" className="right-content">
                            <Space>
                                <Menu.Item className="right-content__item right-content__notification">
                                    <BellOutlined className="right-content__item--icon" />
                                    <span className="right-content__item--title">Thông báo</span>
                                </Menu.Item>
                                <Menu.Item className="right-content__item right-content__support">
                                    <a href="/">
                                        <QuestionCircleOutlined className="right-content__item--icon" />
                                        <span className="right-content__item--title">Hỗ Trợ</span>
                                    </a>
                                </Menu.Item>
                                <Menu.Item className="right-content__item right-content__login" key="login">
                                    <a href="/Login" className="right-content__item--title">Login</a>
                                </Menu.Item>
                                <Menu.Item className="right-content__item right-content__register" key="register">
                                    <a href="/Register" className="right-content__item--title">Register</a>
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
                                <Search
                                    placeholder="input search text"
                                    onSearch={onSearch}
                                    enterButton
                                />
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
