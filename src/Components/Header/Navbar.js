/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import {
  Menu,
  Input,
  Space,
  Row,
  Col,
  AutoComplete,
  Popover,
  Button,
} from "antd";
import {
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import logo from "../../assets/images/logo/cartya-logo.png";
import { useCookies } from "react-cookie";
import MiniCartItem from "../../Features/MiniCartItem";

const { Search } = Input;
function Navbar(props) {
  let history = useHistory();
  const [cookies] = useCookies(["accessToken"]);
  const dataSource = ["hi", "hi2", "hi3", "ai", "hi", "hi"];
  const onSearch = (value) => history.push(`/home/search/${value}`);
  const items = [
    {
      name: "wdawdhwawudwahduawdakdahdawhda",
      price: 120000,
      image: "https://picsum.photos/200",
    },
    {
      name: "Item 2",
      price: 120000,
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <div id="menuComponent" className="section-navbar">
      <div className="d-flex justify-content-between section-navbar__top">
        <div className="section-navbar__item section-navbar__top--left">
          <Menu mode="horizontal">
            <Space>
              <Menu.Item>
                <a href="/seller">Kênh người bán</a>
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
              <Menu.Item
                className="right-content__item right-content__login"
                key="login"
              >
                <a href="/Login" className="right-content__item--title">
                  Login
                </a>
              </Menu.Item>
              <Menu.Item
                className="right-content__item right-content__register"
                key="register"
              >
                <a href="/Register" className="right-content__item--title">
                  Register
                </a>
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
              <AutoComplete
                style={{ width: "100%" }}
                backfill={true}
                dataSource={dataSource}
                filterOption={(inputValue, option) =>
                  option.props.children
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              >
                <Input.Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
              </AutoComplete>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div className="d-flex justify-content-center h-100 section-navbar__bottom--icon">
              <a className="d-flex align-items-center" href="#">
                <Popover
                  placement="bottomRight"
                  content={<MiniCartItem items={items} isLoading={false} />}
                  title="Title"
                >
                  <div className="d-flex align-items-center">
                    <ShoppingCartOutlined />
                  </div>
                </Popover>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
