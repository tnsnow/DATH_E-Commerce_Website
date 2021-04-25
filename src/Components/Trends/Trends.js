import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, } from 'antd'
import { FileSearchOutlined } from '@ant-design/icons';

import ImgProduct from "../../assets/images/product/b518860859b1ea204032a449023fd56a.jpg";

Trends.propTypes = {};

function Trends(props) {
    return (
        <div className="section-trends">
            <div className="section-trends__title">
                <Row>
                    <Col span={24} className="d-flex">
                        <FileSearchOutlined style={{ fontSize: '2.5rem' }} />
                        <h1>Tìm kiếm nổi bật</h1>
                    </Col>
                </Row>
            </div>

            <div className="section-trends__content">
                <Row gutter={24}>
                    <Col span={8}>
                        <div className="content-item">
                            <a href="#" >
                                <div className="content-item__img">
                                    <Row gutter={14}>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-item__desc">
                                    <h3>Váy Trắng</h3>
                                    <p>500 sản phẩm</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="content-item">
                            <a href="#" >
                                <div className="content-item__img">
                                    <Row gutter={14}>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-item__desc">
                                    <h3>Váy Trắng</h3>
                                    <p>500 sản phẩm</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="content-item">
                            <a href="#" >
                                <div className="content-item__img">
                                    <Row gutter={14}>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="content-item__img--item">
                                                <img src={ImgProduct} className="img-fluid" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-item__desc">
                                    <h3>Váy Trắng</h3>
                                    <p>500 sản phẩm</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default Trends;