import React from 'react';
import PropTypes from 'prop-types';

import ListProducts from '../Components/Card/ListItem';
// import { Row, Col } from 'antd';

ListProduct.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.object,
};

function ListProduct({ isLoading, data }) {
    return (
        <div className="section-all-products">
            <div className="section-all-products__title">
                <h1>Tất cả sản phẩm</h1>
            </div>

            <ListProducts listData={isLoading, data} />
        </div>
    );
}

export default ListProduct;