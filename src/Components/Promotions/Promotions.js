import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import ImgPromotion from '../../assets/images/promotion/d9f25b7c2db6c01fbabc0bb2879ae5d5.png.jpg';

Promotion.propTypes = {};

function Promotion(props) {
    return (
        <div className="section-promotions">
            <Row gutter={24}>
                <Col span={6}>
                    <div className="section-promotions__item">
                        <a href="#">
                            <img className="img-fluid" src={ImgPromotion} alt="" />
                        </a>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="section-promotions__item">
                        <a href="#">
                            <img className="img-fluid" src={ImgPromotion} alt="" />
                        </a>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="section-promotions__item">
                        <a href="#">
                            <img className="img-fluid" src={ImgPromotion} alt="" />
                        </a>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="section-promotions__item">
                        <a href="#">
                            <img className="img-fluid" src={ImgPromotion} alt="" />
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Promotion;