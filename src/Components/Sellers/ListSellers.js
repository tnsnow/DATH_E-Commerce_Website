import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Button } from 'antd';

ListSellers.propTypes = {};

const { Meta } = Card;

function ListSellers(props) {
    return (
        <div className="section-list_sellers">
            <div className="section-list_sellers__title">
                <h1>Deal Chớp Nhoáng</h1>
            </div>

            <div className="section-list_sellers__time d-flex">
                <div className="section-list_sellers__time--left d-flex">
                    <h4>Kết thúc trong: </h4>
                    <div className="block-time d-flex">
                        <div className="block-time__item">
                            <p>03</p>
                        </div>
                        <div className="block-time__item">
                            <p>35</p>
                        </div>
                        <div className="block-time__item">
                            <p>41</p>
                        </div>
                    </div>
                </div>
                <div className="section-list_sellers__time--right">
                    <a href="#">Mua sắm toàn bộ</a>
                </div>
            </div>

            <div className="section-list_sellers__content">
                <Row gutter={16}>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="content-item">
                            <a href="#">
                                <Card
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Giày adidas đen trắng" />
                                    <div className="content-item__price">
                                        <h3>38.500đ</h3>
                                    </div>
                                    <div className="content-item__sale d-flex justify-content-between">
                                        <span>135.000đ</span>
                                        <span>-50%</span>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="section-list_sellers__see-more">
                <Button type="dashed" block>
                    Xem thêm
                </Button>
            </div>
        </div >
    );
}

export default ListSellers;