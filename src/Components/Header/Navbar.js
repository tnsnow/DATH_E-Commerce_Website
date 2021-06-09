/* eslint-disable */
import React, { useEffect, useState } from "react";
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
  Badge,
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
import { useRecoilState } from "recoil";
import { currentUser } from "../../recoil/user/atom";
import { useMutation } from "react-query";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useRandomColor, useTruncate } from "../../hooks";
import Avatar from "antd/lib/avatar/avatar";
import { fetchUser } from "../User/functions";

const { Search } = Input;
function Navbar(props) {
  let history = useHistory();
  const [cookies, removeCookie] = useCookies(["accessToken"]);
  const [user, setUser] = useState({});
  const [userAtom, setUserAtom] = useRecoilState(currentUser);
  const truncate = useTruncate();
  const [login, setLogin] = useState(false);
  const dataSource = ["hi", "hi2", "hi3", "ai", "hi", "hi"];
  const [items, setItems] = useState([]);
  const token = cookies.accessToken;
  const renderListOptionProfile = () => (
    <>
      <Button size="small" type="link" href="/home/profile">
        Your Profile
      </Button>
      <hr />
      <Button size="small" type="link" href="/home/profile/orders">
        Your Orders
      </Button>
      <hr />
      <Button size="small" type="link" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
  const fetchItemsInCart = async () => {
    return axios
      .get(`http://localhost:4001/products/in-cart`, {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .catch((err) => err.message);
  };

  //fetch Data item in cat
  const { mutate, isLoading } = useMutation(fetchItemsInCart, {
    onSuccess: (data) => {
      const { status } = data;
      if (status === 200) {
        // console.log({ data });
        const arr = [];
        data.data.map((i) => {
          arr.push({
            name: truncate(i.product.name, 60),
            price: i.product.price,
            image: i.product.images[0],
          });
        });
        setItems(arr);
      }
    },
  });

  //fetch user data
  const { mutate: mutateFetchUser } = useMutation(fetchUser);

  useEffect(() => {
    mutate();
  }, [cookies]);

  useEffect(() => {
    // console.log("token", cookies.accessToken);

    const userDecoded = decodeToken(token);
    if (token !== "undefined") {
      mutateFetchUser(
        { token },
        {
          onSuccess: (data) => {
            setUser(data?.data);
          },
        }
      );
      setLogin(true);
      setUserAtom(userDecoded);
    } else {
      setLogin(false);
    }
  }, [cookies, token]);
  const onSearch = (value) => history.push(`/home/search/${value}`);
  const handleLogout = () => {
    removeCookie("accessToken");
    // history.push("/home");
    window.location.reload();
  };
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
              {login ? (
                <Menu.Item
                  className="right-content__item right-content__login"
                  key="logout"
                ></Menu.Item>
              ) : (
                <>
                  <Menu.Item
                    className="right-content__item right-content__login"
                    key="login"
                  >
                    {/* <a href="/Login" className="right-content__item--title">
                      Login
                    </a> */}
                    <Button href="/login" type="primary">
                      Login
                    </Button>
                  </Menu.Item>
                  <Menu.Item
                    className="right-content__item right-content__register"
                    key="register"
                  >
                    <Button href="/register" type="ghost">
                      Register
                    </Button>
                    {/* <a href="/Register" className="right-content__item--title">
                      Register
                    </a> */}
                  </Menu.Item>
                </>
              )}
            </Space>
          </Menu>
        </div>
      </div>

      <div className="section-navbar__bottom">
        <Row justify="space-between">
          <Col span={6}>
            <div className="section-navbar__bottom--logo">
              <a href="/">
                <img className="img-fluid" src={logo} alt="Logo" />
              </a>
            </div>
          </Col>
          <Col span={12}>
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
          <Col span={6}>
            <div className="justify-content-end h-100 d-flex align-items-center">
              {login ? (
                <Popover
                  placement="bottomRight"
                  title={<p>{user.username}</p>}
                  content={renderListOptionProfile}
                >
                  <Avatar
                    size={36}
                    style={{ marginRight: 30 }}
                    alt="Avatar"
                    src={user.userImage}
                  />
                </Popover>
              ) : (
                ""
              )}
              <div className="d-flex justify-content-center h-100 section-navbar__bottom--icon">
                <a className="d-flex align-items-center" href="/home/cart">
                  <Popover
                    placement="bottomRight"
                    content={
                      <MiniCartItem items={items} isLoading={isLoading} />
                    }
                    title="Title"
                  >
                    <div className="d-flex align-items-center">
                      <Badge count={items.length}>
                        <ShoppingCartOutlined
                          style={{ fontSize: 36, color: "#1890ff" }}
                          onMouseEnter={() => mutate()}
                        />
                      </Badge>
                    </div>
                  </Popover>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbar;
