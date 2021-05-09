import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import CardItem from './CardItem';
// import Product from '../Detail/Product';

ListItem.propTypes = {
    listData: PropTypes.object,
};

function ListItem({ listData }) {
    console.log('listData:', listData);
    return (
        <div className="section-all-products__content">
            <Row gutter={10}>
                {listData.data.map((product) => (
                    <Col span={4}>
                        <div className="content-item">
                            <CardItem
                                dataProduct={product}
                            />
                        </div>
                    </Col>
                ))}

            </Row>
        </div>
    );
}

export default ListItem;