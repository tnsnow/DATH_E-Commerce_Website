import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Space, Row, Col } from 'antd';
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

    return (
        <div id="menuComponent" className="section-navbar">
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
                                        <div className="d-flex align-items-center h-100 left-social__content">
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
                                <Menu.Item className="d-flex  align-items-center h-100 right-content__item right-content__notification">
                                    <BellOutlined className="right-content__item--icon" />
                                    <p className="right-content__item--title">Thông báo</p>
                                </Menu.Item>
                                <Menu.Item className="right-content__item right-content__support">
                                    <a href="/" className="d-flex align-items-center h-100">
                                        <QuestionCircleOutlined className="right-content__item--icon" />
                                        <p className="right-content__item--title">Hỗ Trợ</p>
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

                <div className="section-navbar__bottom">
                    <Row gutter={48}>
                        <Col className="gutter-row" span={6}>
                            <div className="section-navbar__bottom--logo">
                                <a href="/">
                                    <img className="img-fluid" src={logo} alt="Logo" />
                                </a>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={14}>
                            <div className="d-flex align-items-center h-100 section-navbar__bottom--serch">
                                <Search
                                    placeholder="input search text"
                                    onSearch={onSearch}
                                    enterButton
                                    className="w-100"
                                />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div className="d-flex justify-content-center h-100 section-navbar__bottom--icon">
                                <a
                                    className="d-flex align-items-center"
                                    hrf="#"
                                >
                                    <ShoppingCartOutlined />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
